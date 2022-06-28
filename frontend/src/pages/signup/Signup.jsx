import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { SSignup, SSignupContainer, SSignupForm } from './Signup.styled';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { blue } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Signup = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <SSignup>
      <SSignupContainer>
        <HowToRegIcon sx={{ fontSize: 60, marginBottom: '10px' }} />
        <p>{t('signup_title')}</p>

        <SSignupForm>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label={t('sign_name')}
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t('sign_email')}
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('sign_password')}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </ThemeProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t('signup_button')}
            </Button>
          </Box>
        </SSignupForm>
      </SSignupContainer>
    </SSignup>
  );
};
export default Signup;
