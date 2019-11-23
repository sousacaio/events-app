import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import Axios from 'axios';

const Page = styled.SafeAreaView`
    flex:1;
    justifyContent:center;
    align-items:center;

    background-color:#343a40;
`;
const Input = styled.TextInput`
    fontSize:15;
    border:1px solid;
    width:250px;
    height:50px;
    background-color:white;
`;
const Botao = styled.Button`
width: 200px;
height: 40px
padding: 12px;
border-radius: 10px;    
`;
const Title = styled.Text`
	font-size: 48px;
	font-weight: 600;
	color: #DF4723;
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
        <Page>
            <Input value={email} onChangeText={e => setEmail(e)} placeholder="Email" />
            <Input value={senha} onChangeText={e => setSenha(e)} placeholder="Senha" />
            <Button title="Fazer login" onPress={() => logar()} />
            <Title onPress={() => cadastro()}>Registre-se!</Title>
        </Page>
    );
}

Login.navigationOptions = () => {
    return {
        title: 'Login'
    }
}
export default Login;