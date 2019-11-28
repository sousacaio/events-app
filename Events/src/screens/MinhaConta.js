import React, { useState, useEffect } from 'react';
import { Image, Text, View, Button, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';



const Page = styled.SafeAreaView`
    flex:1;
    justifyContent: center;
    align-items: center;
    background-color:#DF4723;
    
`;
const Prot = styled.SafeAreaView`
background-color: #DF4723;
flex:1;
justifyContent: center;
align-items: center;
margin-left:60px;
margin-right:50px;
`;
const Input = styled.TextInput`
    fontSize:15;
    borderBottomWidth: 1;
    width:200px;
    height:50px;
    margin:10px;
    color:white;
    `;
const Botao = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    padding: 12px;
    border-radius: 10;    
    background-color:#343a40;
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
const MinhaConta = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nome, setNome] = useState('');
    const [user, setUser] = useState([]);
    const [token_event, setToken_event] = useState('');
    const [id, setId] = useState('');

    AsyncStorage.getItem('@id').then((id) => { if (id !== null) { setId(id) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@token_event').then((token_event) => { if (token_event !== null) { setToken_event(token_event) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@nome').then((nome) => { if (nome !== null) { setNome(nome) } else { props.navigation.navigate('Login') } });
    async function getUser() {
        try {
           await api.get("/user", {
                headers: { Authorization: token_event, id: id }
            }).then((response) => {
                setUser(response.data.user)
            })
        } catch (e) {

        }

    }
    async function handlerEdit() {
        await api.put("/user", {  name: nome, phone }, { headers: { Authorization: token_event, id: id } })
        if (name) {
            AsyncStorage.setItem('@nome').then(AsyncStorage.setItem("@nome", name));
        }
    }
    useEffect(() => {
        getUser()
    });
    return (
        <Page>
            <Prot>
                <TouchableHighlight onPress={() => { alert('Troca de foto de perfil') }}>
                    <View style={{ width: 100, height: 100, flexDirection: 'row', margin: 24, borderRadius: 10 }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 100, height: 100, position: 'absolute', backgroundColor: '#DF4723' }}
                            source={{ uri: 'https://icon-library.net/images/profile-png-icon/profile-png-icon-1.jpg' }}
                        />
                    </View>
                </TouchableHighlight>
                <Input value={user.name} onChangeText={e => setName(e)} placeholderTextColor="dimgray" />
                <Input value={user.phone} onChangeText={e => setPhone(e)} placeholderTextColor="dimgray" keyboardType="numeric" />
                <Botao onPress={() => handlerEdit()} ><Btntexto>Alterar</Btntexto></Botao>
            </Prot>
        </Page>
    );
}

export default MinhaConta;