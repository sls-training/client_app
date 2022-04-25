import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/:id/microposts' element={<List />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;