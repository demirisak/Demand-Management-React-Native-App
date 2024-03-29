import {DefaultTheme, DarkTheme} from '@react-navigation/native';
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#757474',
    secondary: '#9b9b9b',
    text: '#333333',
    border: '#ededed',
  },
};
export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#9fd5e8',
    secondary: '#ccc',
    card: '#282828',
    background: '#121212',
    border: '#333333',
  },
};
