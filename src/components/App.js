import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';

import Header from './Header';
import Explore from './Explore';
import Advertise from './Advertise';
import Blog from './Blog';
import LogIn from './LogIn';
import Editorial from './Editorial';
import Architecture from './Architecture';
import Blockchain from './Blockchain';
import BusinessWork from './BusinessWork';
import Experiment from './Experiment';
import Fashion from './Fashion';
import Film from './Film';
import FoodDrink from './FoodDrink';
import HealthWellness from './HealthWellness';
import Holidays from './Holidays';
import Nature from './Nature';
import TexturePatterns from './TexturePatterns';
import ThreeDRenders from './ThreeDRenders';
import Wallpapers from './Wallpapers';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Editorial />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/advertise" element={<Advertise />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/architecture" element={<Architecture />} />
          <Route exact path="/blockchain" element={<Blockchain />} />
          <Route exact path="/business_work" element={<BusinessWork />} />
          <Route exact path="/experiment" element={<Experiment />} />
          <Route exact path="/fashion" element={<Fashion />} />
          <Route exact path="/film" element={<Film />} />
          <Route exact path="/food_drink" element={<FoodDrink />} />
          <Route exact path="/health_wellness" element={<HealthWellness />} />
          <Route exact path="/holidays" element={<Holidays />} />
          <Route exact path="/nature" element={<Nature />} />
          <Route exact path="/texture_patterns" element={<TexturePatterns />} />
          <Route exact path="/3d_renders" element={<ThreeDRenders />} />
          <Route exact path="/wallpapers" element={<Wallpapers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
