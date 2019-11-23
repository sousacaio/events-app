import React from 'react';
import styled from 'styled-components';

const CustomButton = props => (
    <ButtonContainer
    
        backgroundColor={props.backgroundColor}
    >
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </ButtonContainer>
);

export default CustomButton;

const ButtonContainer = styled.TouchableOpacity`
	width: 300px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor};
	text-align: center;
`;