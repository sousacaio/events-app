import React, { useState, useEffect } from 'react';
import { Text, View, Clipboard, Button, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Card } from 'react-native-elements'
import moment from 'moment';
import axios from 'axios';
const Page = styled.SafeAreaView`
       flex:1;
       background-color:#343a40;
`;

const VerEvento = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [token_event, setToken_event] = useState();
    const [id, setId] = useState(0);
    const [guests, setGuests] = useState([]);
    AsyncStorage.getItem('@id').then((id) => { if (id !== null) { setId(id) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@token_event').then((token_event) => { if (token_event !== null) { setToken_event(token_event) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@nome').then((nome) => { if (nome !== null) { setNome(nome) } else { props.navigation.navigate('Login') } });
    const dadosEvento = navigation.getParam('id');
    function formatDate(e) {
        const date = moment.utc(e);
        return date.format('DD/MM/YYYY HH:mm:ss');
    }
    const CopiaTexto = () => {
        Alert('Copiado!')
    }

    async function _setContent() {
        Clipboard.setString(`https://backevents.onrender.com/api/accept/${dadosEvento._id}`);
        alert('Copiado para seu Clipboard!');
    }
    async function getGuests() {
        try {
            await axios.get("https://backevents.onrender.com/api/guests", {
                headers: { Authorization: token_event, id: dadosEvento._id }
            }).then((response) => {
                setGuests(response.data.users)
            })
        } catch (e) {

        }
    }
    useEffect(() => {
        getGuests()
    });
    let confirmados = `Convidados confirmados: ${dadosEvento.guests.length}`;
    return (
        <>
        
            <Page >
                <Card title={dadosEvento.name}>
                    <View style={{ fontSize: 50 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ left: 10 }}>Local:</Text><Text style={{ right: 0 }}>{dadosEvento.local}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ left: 10 }}>Começa:</Text><Text style={{ right: 0 }}>{formatDate(dadosEvento.start)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ left: 10 }}>Acaba:</Text><Text style={{ right: 0 }}>{formatDate(dadosEvento.end)}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ left: 10 }}>Organizador:</Text><Text style={{ right: 0 }}>{dadosEvento.organizer}</Text>
                        </View>
                    </View>
                </Card>

                <Card title="Link do evento:">
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View >
                                <View>
                                    <Text>https://backevents.onrender.com/api/accept/{dadosEvento._id}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => _setContent()}>
                                        <Text> Toque aqui para copiar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Card>
                <Card title={confirmados}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'column' }}>
                            {guests.map((u) => {
                                return (
                                    <View key={u._id}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ left: 10 }}>{u.name}</Text><Text style={{ right: 0 }}>{u.email}</Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </Card>
            </Page>
        
        </>
    );
}
VerEvento.navigationOptions = () => {
    return {
        header: null,
        headerMode: 'none'
    }
}
export default VerEvento;