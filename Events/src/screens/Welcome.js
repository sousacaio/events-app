import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justifyContent:center;
    align-items:center;
    background-color:#343a40;
`;
const Texto = styled.Text`
    font-size:20px;
    color:white;
`;
const Btn = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40;
  height: 40;
  border-radius: 50;
`

const Botao = styled.TouchableOpacity`
width: 200px;
height: 40px
padding: 12px;
border-radius: 10px;    
`;
const Input = styled.TextInput`
    fontSize:15;
    border:1px solid;
    width:200px;
    height:50px;
    background-color:white;
`;

const Screen = (props) => {
    const [nome, setNome] = useState();

    const fazerLogin = () => {
        if (nome) {
            props.navigation.navigate('Login', { nome });
        } else {
            Alert.alert(
                'Sério?Pfffffff',
                'Qual é,a gente precisa do seu nome',
                [
                    { text: 'Ok,eu vou digitar meu nome' },
                ],
                { cancelable: false },
            );
        }

    }

    return (
        <Page>
            <Texto>Seja bem vindo(a)</Texto>
            <Input value={nome} onChangeText={e => setNome(e)} placeholder="Seu nome" />
            <Botao title="Fazer login" onPress={fazerLogin} ><Texto>Ok,vamos lá.</Texto></Botao>

        </Page>
    );
}

Screen.navigationOptions = () => {
    return {
        title: 'Boas vindas!'
    }
}
export default Screen;