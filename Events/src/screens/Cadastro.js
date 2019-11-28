import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-native';
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
    margin:50px;
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
                <Image
                    style={{ width: 150, height: 150, margin: 30 }}
                    source={{ uri: 'https://i.ibb.co/R7KkgMj/logo.png' }} />
                <Prot>

                    <Input value={email} onChangeText={e => setEmail(e)} placeholder="Email" placeholderTextColor="dimgray" />
                    <Input value={nome} onChangeText={e => setNome(e)} placeholder="Nome" placeholderTextColor="dimgray" />
                    <Input value={senha} onChangeText={e => setSenha(e)} placeholder="Senha" placeholderTextColor="dimgray" />
                    <Input value={telefone} onChangeText={e => setTelefone(e)} placeholder="Telefone" placeholderTextColor="dimgray" />
                    <Botao onPress={() => cadastrar()} ><Btntexto>Cadastrar!</Btntexto></Botao>
                </Prot>
            </Page>
        </Fundo>
    );
}
Cadastro.navigationOptions = () => {
    return {
        title: 'C A D A S T R O',

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
export default Cadastro;