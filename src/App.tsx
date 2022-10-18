import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import Loginpage from './pages/Loginpage';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';
import Homepage from './pages/Homepage';
import PrivateRoute from './helpers/PrivateRoute';

const App = () => {
  
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/*" element={
          <PrivateRoute>
            <Homepage/>
          </PrivateRoute>
        }/>
      </Routes>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
