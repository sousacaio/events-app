import React, { useState, useEffect } from 'react';
import { Button, Text, Image, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import Axios from 'axios';

import fundoImg from '../images/fundo.jpg';

const Page = styled.SafeAreaView`
    flex:1;
    justifyContent: center;
    align-items: center;
    position: absolute;
    margin:20px;
`;
const Prot = styled.SafeAreaView`
background-color: white;
flex:1;
justifyContent: center;
align-items: center;
margin-left: 12px;
`;
const Input = styled.TextInput`
    fontSize:15;
    borderBottomWidth: 1;
    width:200px;
    height:50px;
    margin:10px;
`;
const Botao = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    padding: 12px;
    border-radius: 10;    
    background-color:#B22222;
    margin: 10px;
    margin-bottom: 2px;
`;
const Btntexto = styled.Text`
	font-size: 15px;
	color: white;
    text-align: center;
    font-weight: bold;
    `;
const Title = styled.Text`
    padding: 20px;
	font-size: 18px;
	font-weight: bold;
	color: red;
`;
const Fundo = styled.ImageBackground`
      flex: 1;
      width: 590px;

`;

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function cadastro() {
        props.navigation.navigate('Cadastro');
    }
    async function logar() {
        if (!email || !senha) {
            alert('Preencha todos os campos!');
        } else {
            const response = api.post('/auth', { email, password: senha }).then(
                function (response) {
                    AsyncStorage.setItem('@token_event', response.data.token)
                    AsyncStorage.setItem('@id', response.data.user._id)
                    AsyncStorage.setItem('@nome', response.data.user.name)
                    props.navigation.navigate('Dashboard');
                }
            );


        }
        props.navigation.navigate('Dashboard');

    }
    return (
        <Fundo source={require('../images/fundo.jpg')}>
            <Page>
                <Image
                    style={{ width: 150, height: 150, margin: 30 }}
                    source={{ uri: 'https://i.ibb.co/R7KkgMj/logo.png' }} />
                <Prot>
                    <Input value={email} onChangeText={e => setEmail(e)} placeholder="E-mail" placeholderTextColor="dimgray" />
                    <Input value={senha} onChangeText={e => setSenha(e)} placeholder="Password" placeholderTextColor="dimgray" />
                    <Botao onPress={() => logar()} ><Btntexto>Conectar</Btntexto></Botao>
                    <Title onPress={() => cadastro()}>Não é cadastrado? Registre-se!</Title>
                </Prot>
            </Page>
        </Fundo>
    );
}

Login.navigationOptions = () => {
    return {
        title: 'E V E N T S',

        headerTitleStyle: {
            textAlign: "center",
            flex: 1,
        },
        headerStyle: {
            backgroundColor: 'black',

        },
        headerTintColor: '#white',
    }

}
export default Login;