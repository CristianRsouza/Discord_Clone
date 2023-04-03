import React from 'react';
import './App.css'
import ServerBar from './components/ServerBar/ServerBar';
import ChannelBar from './components/ChannelBar/ChannelBar';
import Main from './components/main/main';
import UserBar from './components/UsersBar/UserBar';


function App() {
  

  
  return (
    <div className="App">
      <ServerBar />
      <ChannelBar/>
      <Main />
      <UserBar />
    </div>
  );
}

export default App;
