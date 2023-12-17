
import './App.css';
import React from 'react';
import { ProfilePage } from './components/ProfilePage';
import { Container, Row, Col } from 'react-bootstrap';




function App() {

  return (
    <div>
      <Container style={{ maxWidth: '100%', }}>
        <ProfilePage />
      </Container>
    </div>
  );
}

export default App;
