import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/page/HomePage';
import UserMicropostsList from './components/page/GetUserMicroposts.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/:userId/microposts' element={<UserMicropostsList />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
