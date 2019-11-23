import React, { useState, useEffect } from 'react';
import { Image, Text, View, Button, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';


const Page = styled.SafeAreaView`
    flex:1;
    justifyContent:center;
    align-items:center;

    background-color:#343a40;
`;
const Title = styled.Text`
	font-size: 48px;
	font-weight: 600;
	color: #DF4723;
`;
const Dashboard = (props) => {

    const [nome, setNome] = useState('')
    const [token_event, setToken_event] = useState('')
    const [id, setId] = useState('')

    AsyncStorage.getItem('@id').then((id) => { if (id !== null) { setId(id) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@token_event').then((token_event) => { if (token_event !== null) { setToken_event(token_event) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@nome').then((nome) => { if (nome !== null) { setNome(nome) } else { props.navigation.navigate('Login') } });
    function criar() {
        props.navigation.navigate('Criar');
    }
    function Eventos() {
        props.navigation.navigate('Eventos')
    }
    
    return (
        <Page>
            <Title>Olá {nome}</Title>
            <View>
                <TouchableHighlight onPress={() => { criar() }}>
                    <View style={{ width: 200, height: 200, flexDirection: 'row', margin: 24 }}>
                        <Image

                            style={{ width: 200, height: 200, position: 'absolute', backgroundColor: '#DF4723' }}
                            source={{ uri: 'https://static.thenounproject.com/png/232752-200.png' }}
                        />
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                            <Text style={{ color: 'white', fontSize: 20, margin: 6 }}>Meus eventos</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { Eventos() }}>
                    <View style={{ width: 200, height: 200, flexDirection: 'row', margin: 24, borderRadius: 10 }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 200, height: 200, position: 'absolute', backgroundColor: '#DF4723' }}
                            source={{ uri: 'https://carlisletheacarlisletheatre.org/images/party-png-icon-5.png' }}
                        />
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                            <Text style={{ color: 'white', fontSize: 20, margin: 6 }}>Próximos eventos</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        </Page >
    );
}

Dashboard.navigationOptions = () => {
    return {
        header: null,
        headerMode: 'none'
    }
}
export default Dashboard;