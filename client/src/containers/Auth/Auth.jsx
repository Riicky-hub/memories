import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import Input from './Input/Input';
import Icon from './Icon';

const Auth = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => setShowPassword((prevState) => !prevState);
  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
    setShowPassword(false);
  };
  const login = useGoogleLogin({
    onSuccess: async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;
      console.log(res);
      try {
        // dispatch({ type: 'AUTH', data: { result, token } });
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => console.log('Erro ao fazer login com google'),
  });
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? 'Cadastro' : 'Login'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name='ConfirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              {isSignUp ? 'Cadastrar' : 'Login'}
            </Button>
            <Button
              className={classes.googleButton}
              color='primary'
              fullWidth
              onClick={() => login()}
              startIcon={<Icon />}
              variant='contained'
            >
              {isSignUp ? 'Cadastrar com Google' : 'Logar com Google'}
            </Button>
          </Grid>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Já tem uma conta? Faça seu login'
                  : 'Não tem uma conta? Faça seu cadastro'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
