import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Navbar } from './components/index';
import { Home, Auth } from './containers';

const App = () => {
  return (
    <GoogleOAuthProvider clientId='GOOGLE_CLIENT_ID'>
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/auth' exact element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
