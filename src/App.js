import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserMicropostsList from './components/users/microposts/GetUserMicroposts.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/:userId/microposts' element={<UserMicropostsList />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
