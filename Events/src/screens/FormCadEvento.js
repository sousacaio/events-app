import React, { useState, useEffect } from 'react';
import { Image, TextInput, View, Button } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import api from '../services/api';
const Page = styled.SafeAreaView`
    flex:1;
    justifyContent:center;
    align-items:center;
    background-color:#343a40;
`;
const TxtInput = styled.TextInput`
backgroundColor:white;
width:250;
height:50;
border-radius: 10px;
`;
const Span = styled.Text`
color:white;
font-size:30px
`;
let data = new Date();
// Fri Nov 16 2018 18:36:40 GMT-0200 (Horário de Verão de Brasília)

let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);

var dataBase = data2.toISOString();
console.log(dataBase)
console.log(Date.UTC())
const FormCadEvento = (props) => {

    const [nome, setNome] = useState('')
    const [token_event, setToken_event] = useState('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [local, setLocal] = useState('')
    const [limit, setLimit] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [link, setLink] = useState('')
    AsyncStorage.getItem('@id').then((id) => { if (id !== null) { setId(id) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@token_event').then((token_event) => { if (token_event !== null) { setToken_event(token_event) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@nome').then((nome) => { if (nome !== null) { setNome(nome) } else { props.navigation.navigate('Login') } });
    async function cadastrarEvento() {
        if (!name || !local || !limit || !start || !end) {
            alert('Preencha todos os campos!');
        } else {
            console.log(start)
            console.log(end)
            const dataInicio = moment(start).format();
            const dataFim = moment(end).format();
            await api.post('/event', {
                name,
                local,
                limit,
                start: dataInicio,
                end: dataFim,
                organizer: id
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token_event
                }
            })
                .then(function (response) {
                    console.log(response)
                    alert('Evento criado com sucesso!')
                    props.navigation.navigate('Criar')
                }).catch(function (error) {
                    console.log(error);
                });
        }

    }
    return (
        <Page>
            <View>
                <Span>Nome do evento:</Span>
                <TxtInput value={name} onChangeText={e => setName(e)} placeholder="Nome" />
                <Span>Endereço do evento:</Span>
                <TxtInput value={local} onChangeText={e => setLocal(e)} placeholder="Local" />
                <Span>Limite de convidados:</Span>
                <TxtInput value={limit} onChangeText={e => setLimit(e)} placeholder="Limite" />
                <Span>Data e hora de início</Span>
                <DatePicker
                    style={{ width: 300 }}
                    date={start}
                    is24Hour={true}
                    mode="datetime"
                    placeholder="Selecione o começo"
                    format="YYYY-MM-DD HH:mm"
                    confirmBtnText="Confirma"
                    cancelBtnText="Cancela"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(end) => { setStart(end) }}
                />
                <Span>Data e hora final</Span>
                <DatePicker
                    style={{ width: 300 }}
                    date={end}
                    mode="datetime"
                    is24Hour={true}
                    placeholder="Selecione o final"
                    format="YYYY-MM-DD HH:mm"
                    confirmBtnText="Confirma"
                    cancelBtnText="Cancela"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => { setEnd(date) }}
                />
                <Button title="Cadastrar evento" onPress={cadastrarEvento} />

            </View>

        </Page>
    );
}


export default FormCadEvento;

{/* <Span>Data e hora de início</Span>
<DatePicker
    style={{ width: 300 }}
    date={end}
    mode="datetime"
    placeholder="Selecione o começo"
    format="YYYY-MM-DD HH:MM"
    minDate="03-11-2019"
    confirmBtnText="Confirma"
    cancelBtnText="Cancela"
    customStyles={{
        dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
        },
        dateInput: {
            marginLeft: 36
        }
        // ... You can check the source to find the other keys.
    }}
    onDateChange={(end) => { setEnd(end) }}
/>
<Span>Data e hora final</Span>
<DatePicker
    style={{ width: 300 }}
    date={start}
    mode="datetime"
    placeholder="Selecione o final"
    format="YYYY-MM-DD HH:MM"
    minDate="03-11-2019"
    confirmBtnText="Confirma"
    cancelBtnText="Cancela"
    customStyles={{
        dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
        },
        dateInput: {
            marginLeft: 36
        }
                           }}
    onDateChange={(date) => { setStart(date) }}
/> */}