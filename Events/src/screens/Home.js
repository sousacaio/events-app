import React, { useState, useEffect } from 'react';
import { Image, Text, View, Button, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import { Col, Row, Grid } from "react-native-easy-grid";


const Page = styled.SafeAreaView`
    flex:1;
        
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
    function MinhaConta() {
        props.navigation.navigate('MinhaConta')
    }
    function Sair() {
        AsyncStorage.clear();
        props.navigation.navigate('Login')
    }
    function confirmar() {
        props.navigation.navigate('Confirmar')
    }
    AsyncStorage.getItem('@id').then((id) => { if (id !== null) { setId(id) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@token_event').then((token_event) => { if (token_event !== null) { setToken_event(token_event) } else { props.navigation.navigate('Login') } });;
    AsyncStorage.getItem('@nome').then((nome) => { if (nome !== null) { setNome(nome) } else { props.navigation.navigate('Login') } });

    useEffect(() => {



    }, []);

    return (
        <Grid style={{ backgroundColor: '#343a40' }}>

            <Row >
                <Col style={{ left: 10 }}>
                    <Row style={{ alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight onPress={() => { criar() }}>
                                <View style={{ width: 150, height: 150, flexDirection: 'row', }}>
                                    <Image

                                        style={{ width: 150, height: 150, position: 'absolute', backgroundColor: '#DF4723' }}
                                        source={{ uri: 'https://static.thenounproject.com/png/232752-200.png' }}
                                    />
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', fontSize: 20, }}>Meus eventos</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </Row>
                    <Row style={{ alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight onPress={() => { Eventos() }}>
                                <View style={{ width: 150, height: 150, flexDirection: 'row', borderRadius: 10 }}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ width: 150, height: 150, position: 'absolute', backgroundColor: '#DF4723' }}
                                        source={{ uri: 'https://carlisletheacarlisletheatre.org/images/party-png-icon-5.png' }}
                                    />
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', fontSize: 20, }}>Próximos eventos</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </Row>
                    <Row style={{ alignItems: 'center' }} size={1}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight onPress={() => { Sair() }}>
                                <View style={{ width: 150, height: 150, flexDirection: 'row', borderRadius: 10 }}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ width: 150, height: 150, position: 'absolute', backgroundColor: '#DF4723' }}
                                        source={{ uri: 'https://icon-library.net/images/logout-icon-png/logout-icon-png-26.jpg' }}
                                    />
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', fontSize: 20, }}>Sair</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </Row>
                </Col>
                <Col style={{ left: 10 }}>
                    <Row style={{ alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight onPress={() => { MinhaConta() }}>
                                <View style={{ width: 150, height: 150, flexDirection: 'row', borderRadius: 10 }}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ width: 150, height: 150, position: 'absolute', backgroundColor: '#DF4723' }}
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png' }}
                                    />
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', fontSize: 20, }}>Minha conta</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </Row>
                    <Row style={{ alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight onPress={() => { confirmar() }}>
                                <View style={{ width: 150, height: 150, flexDirection: 'row', borderRadius: 10 }}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ width: 150, height: 150, position: 'absolute', backgroundColor: '#DF4723' }}
                                        source={{ uri: 'http://simpleicon.com/wp-content/uploads/add-user.png' }}
                                    />
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', fontSize: 20, }}>Confirmar Evento</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </Row>
                </Col>
            </Row>

        </Grid >
    );
}

export default Dashboard;