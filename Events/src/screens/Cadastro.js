import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import Axios from 'axios';

const Page = styled.SafeAreaView`
    flex:1;
    justifyContent: center;
    align-items: center;
`;
const Title = styled.Text`
	font-size: 30px;
    margin-bottom: 10px;
    font-weight: bold;
	color: red;
`;
const Input = styled.TextInput`
    fontSize:15;
    border-width: 1;
    border-radius: 10;
    width:200px;
    height:50px;
    margin:10px;
    background-color:white;
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
    const Fundo = styled.ImageBackground`
    flex: 1;
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
        <Fundo source={require('../images/fundo.jpg')}>
        <Page>
        <Title>C A D A S T R O</Title> 
            <Input value={email} onChangeText={e => setEmail(e)} placeholder="Email" />
            <Input value={nome} onChangeText={e => setNome(e)} placeholder="Nome" />
            <Input value={senha} onChangeText={e => setSenha(e)} placeholder="Senha" />
            <Input value={telefone} onChangeText={e => setTelefone(e)} placeholder="Telefone" />
            <Botao onPress={() => cadastrar()} ><Btntexto>Cadastrar</Btntexto></Botao>
        </Page>
        </Fundo>
    );
}

Cadastro.navigationOptions = () => {
    return {
   
            title: '',
            
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1, 
            },
              headerStyle: {
                  backgroundColor: 'white',
                  
              },
              headerTintColor: 'red',
              fontWeight: 'bold'
        }           
    
    }
export default Cadastro;