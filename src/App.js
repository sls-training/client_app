import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/page/HomePage';
import VuewUserMicropostsPage from './components/page/VuewUserMicropostsPage';
import LoginPage from './components/page/LoginPage';
import NotFound from './components/page/NotFound';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/users/:userId/microposts/page/:pageNumber/per_page/:perPage' element={ <VuewUserMicropostsPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};
export default App;
