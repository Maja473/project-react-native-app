import React from 'react';
import styled from 'styled-components/native';
import FetchApi from './components/FetchApi';


const Container = styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;



const App = () => {
	return (
	
			<Container>
			<FetchApi />
			</Container>
		
 );
 
};

export default App;
