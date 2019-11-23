import React, { useState, useEffect } from 'react';
import { Modal, Text, View, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import moment from 'moment';
import { Card, Avatar, Badge, Icon } from 'react-native-elements'
const Page = styled.SafeAreaView`
       flex:1;
       background-color:#343a40;
`;

const ButtonContainer = styled.TouchableOpacity`
	width: 300px;
	height: 40px
	padding: 12px;
    border-radius: 10px;	
    left:30px;
    right:30px;
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor};
	text-align: center;
`;
const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

];
const Criar = (props) => {
    const [nome, setNome] = useState('');
    const [modalVisible, setModalVisible] = useState('');

    const [token_event, setToken_event] = useState();
    const [id, setId] = useState(0);
    const [events, setEvents] = useState([]);
    AsyncStorage.getItem('@id').then((id) => { if (id !== null) { setId(id) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@token_event').then((token_event) => { if (token_event !== null) { setToken_event(token_event) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@nome').then((nome) => { if (nome !== null) { setNome(nome) } else { props.navigation.navigate('Login') } });
    function formCadEvento() {
        props.navigation.navigate('FormCadEvento')
    }


    function mostraEvento(id) {
        props.navigation.navigate('VerEvento', { id })
    }
    async function getMyEvents() {
        try {
            await api.get("/events/organizer", {
                headers: { Authorization: token_event, id: id }
            }).then((response) => {
                setEvents(response.data.events)
            })
        } catch (e) {

        }

    }
    function state(end, start) {
        const today = moment();
        if (moment(end) >= today) {
            return 'success';
        } else {
            return 'error';
        }
    }
    function formatDate(e) {
        const date = moment.utc(e);
        return date.format('DD/MM/YYYY HH:mm:ss');
    }
    useEffect(() => {
        getMyEvents()
    });
    return (
        <>
            <Page >
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                    <ButtonContainer backgroundColor="#DF4723" onPress={() => formCadEvento()}  >
                        <ButtonText textColor="white">Criar evento</ButtonText>
                    </ButtonContainer>
                </View>
                <View style={{ flex: 7, top: 10 }}>
                    <Card title="Meus eventos:">
                        {
                            events.map((u, i) => {
                                return (
                                    <TouchableOpacity key={i} onPress={() => mostraEvento(u)}>
                                        <View style={styles.item}>
                                            <CustomBadge style={{ width: 20, height: 20 }} texto={formatDate(u.start)} status={state(u.start, u.end)} />
                                            <Text>{u.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </Card>
                </View>
            </Page>

        </>
    );
}
const CustomBadge = (props) => {
    return (
        <>
            <Badge value={<Text>{props.texto}</Text>} status={props.status} containerStyle={{ position: 'absolute', bottom: 20, right: -4 }} />
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 15,
    },
});
Criar.navigationOptions = () => {
    return {
        header: null,
        headerMode: 'none'
    }
}
export default Criar;