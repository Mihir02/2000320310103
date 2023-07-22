// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Tab, Tabs } from '@mui/material';
import AllTrains from './pages/AllTrains';
import SingleTrain from './pages/SingleTrain';

const App = () => {
  const [dat, setDat] = React.useState()
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Trains Schedule App
              <input type = "text" placeholder = "Enter Train No." name = "trainNo" onChange={(e) => {setDat(e.target.value)}}></input>
            </Link>
          </Typography>
        </Toolbar>
        <Tabs value={false} indicatorColor="secondary" centered>
          <Tab label="All Trains" component={Link} to="/" />
          {/* Replace 'trainId' with the appropriate parameter for SingleTrain page */}
          <Tab label="Single Train" component={Link} to="/train/" />
        </Tabs>
      </AppBar>
      <Container>
        <Routes>
          <Route exact path="/" element={<AllTrains/>} />
          
          <Route exact path="/train/" element={<SingleTrain id = {dat}/>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
