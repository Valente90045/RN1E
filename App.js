import { ESLint } from 'eslint';
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex=1;
    align-items:center;    
`;
const HeaderText = styled.Text`
    font-size: 25px;
`;
const Input = styled.TextInput`
    width:90%;
    height:50px;
    font-size: 18px;
    background-color:#EEE
    margin-top:20px;
    border-radius:10px;
    padding:10px;
`;

export default () => {
    const [bill, setBill] = useState('');

    const calc = () => {

    };
    return (
        <Page>
            <HeaderText>CALCULADORA DE GORGETA</HeaderText>
            <Input
                PlaceHolder="Quanto deu a conta?"
                PlaceHolderTextcolor="#000"
                KeyboardType="numeric"
                Value={bill}
                OnChangeText={(n) => setBill(n)}
            />
            <CalcButton title="Calcular" onPress={calc} />
        </Page>
    );
};
