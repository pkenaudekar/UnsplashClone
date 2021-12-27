import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';

import Editorial from './Editorial';
import Header from './Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Editorial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
