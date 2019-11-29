import React, { useState, useEffect } from 'react';
import {Image, Text, View, Button, TouchableHighlight, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';


const Page = styled.SafeAreaView`
    flex:1;
    justifyContent: center;
    align-items: center;
    position: absolute;
    margin-left: 20px;
`;
const Prot = styled.View`
    background-color: #B22222;
    flex:1;
    justifyContent: center;
    align-items: center;

    width: 120%;
`;
const Title = styled.Text`
	font-size: 48px;
    font-weight: 600;
    font-weight: bold;
    color: white;

`;
const Fundo = styled.ImageBackground`
    flex:1;

`;
const Botao = styled.TouchableHighlight`
    borderRadius: 10;

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
    <Fundo source={require('../images/fundo2.jpg')}>
        <Page><Prot>
           <Title>Olá {nome}</Title> 
           </Prot>
            <View>
                <Botao onPress={() => { criar() }}>
                    <View style={{width: 165, height: 165, flexDirection: 'row', margin: 15}}>
                        <Image
                            style={{ width: 165, height: 165,  position: 'absolute', backgroundColor: '#B22222', borderRadius: 10 }}
                            source={{ uri: 'https://static.thenounproject.com/png/232752-200.png' }}
                        />
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end', borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 20, margin: 6, fontWeight: 'bold' }}>Meus eventos</Text>
                        </View>
                    </View>
                </Botao>
                <Botao onPress={() => { Eventos() }}>
                    <View style={{ width: 165, height: 165, flexDirection: 'row', margin: 15}}>
                        <Image
                            //resizeMode='contain'
                            style={{ width: 165, height: 165, position: 'absolute', backgroundColor: '#B22222', borderRadius: 10 }}
                            source={{ uri: 'https://carlisletheacarlisletheatre.org/images/party-png-icon-5.png' }}
                        />
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end', borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 20, margin: 6, fontWeight: 'bold' }}>Próximos eventos</Text>
                        </View>
                    </View>
                </Botao>
            </View>
        </Page >
    </Fundo>
    );
}

Dashboard.navigationOptions = () => {
    return {
        header: null,
        headerMode: 'none',

    }
}
export default Dashboard;