import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import { SSignin, SSigninContainer, SSigninForm } from './Signin.styled';
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

const Signin = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <SSignin>
      <SSigninContainer>
        <LoginIcon sx={{ fontSize: 60, marginBottom: '10px' }} />
        <p>{t('signin_title')}</p>
        <SSigninForm>
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
                id="email"
                label={t('sign_email')}
                name="email"
                autoComplete="email"
                autoFocus
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t('sign_remember')}
              />
            </ThemeProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t('signin_button')}
            </Button>
          </Box>
        </SSigninForm>
      </SSigninContainer>
    </SSignin>
  );
};
export default Signin;
