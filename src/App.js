// App.js
import React, { useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.toggleBorder};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledDiv>
        <h1>Hello, World!</h1>
        <p>This is a simple React app with styled components.</p>
        <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default App;