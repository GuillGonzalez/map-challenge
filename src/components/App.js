import React from 'react';
import GoogleMap from './GoogleMap';
import UserInput from './UserInput';
import css from "../style.scss";

const App = () => {
  return (
    <div>
      <GoogleMap />
      <UserInput />
    </div>
  );
};

export default App;