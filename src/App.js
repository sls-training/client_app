import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/page/HomePage';
import UserMicropostsList from './components/page/GetUserMicroposts.jsx';
import NotFound from './components/page/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/:userId/microposts' element={<UserMicropostsList />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
