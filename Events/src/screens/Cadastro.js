import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
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

const Cadastro = (props) => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    function cadastrar() {
        if (email == null && nome == null && senha == null && telefone == null) {
            alert('Preencha todos os campos!');
        } else {
            api.post('/user', {
                name: nome,
                phone: telefone,
                email,
                password: senha,
            })
                .then(function (response) {
                    alert(response.data.message);
                    props.navigation.navigate('Login');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <Page>
            <Input value={email} onChangeText={e => setEmail(e)} placeholder="Email" />
            <Input value={nome} onChangeText={e => setNome(e)} placeholder="Nome" />
            <Input value={senha} onChangeText={e => setSenha(e)} placeholder="Senha" />
            <Input value={telefone} onChangeText={e => setTelefone(e)} placeholder="Telefone" />
            <Button title="Cadastrar" onPress={() => cadastrar()} />
        </Page>
    );
}

Cadastro.navigationOptions = () => {
    return {
        title: 'Cadastro'
    }
}
export default Cadastro;