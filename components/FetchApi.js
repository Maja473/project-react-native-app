import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const FactText = styled.Text`
	font-weight: 50px;
	font-size: 30px;
`;

const APIButton = styled.TouchableOpacity`
	width: 40%;
	background-color: #D13870;
	border-radius: 50px;
	padding: 20px;
	alignt-content: center;
`;

const InfoText = styled.Text`
	font-size: 50px;
`
const LengthText = styled.Text`
	font-size: 30px;
`

const ButtonText = styled.Text`
	font-size: 30px;
	align-content: center;
`


const FetchApi = () => {
	const [info, setFact] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		generateFact();
	}, []);

	const generateFact = () => {
		setLoading(true);
		fetch('https://catfact.ninja/fact')
			.then((res) => res.json())
			.then((data) => setFact(data))
			.finally(() => setLoading(false));
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<View>
			<InfoText>Click button to learn more about cats 🐱</InfoText>
			<APIButton onPress={generateFact}>
				<ButtonText>Click me</ButtonText>
			</APIButton>
			<FactText>Fact: {info.fact}</FactText>
			<LengthText>Length: {info.length}</LengthText>
		</View>
	);
};

export default FetchApi;
