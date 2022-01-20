import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';

import Header from './Header';
import Footer from './Footer';
import Explore from './Explore';
import Advertise from './Advertise';
import Blog from './Blog';
import LogIn from './LogIn';
import Editorial from './Editorial';
import Architecture from './Architecture';
import Blockchain from './Blockchain';
import BusinessWork from './BusinessWork';
import Experimental from './Experimental';
import Fashion from './Fashion';
import Film from './Film';
import FoodDrink from './FoodDrink';
import HealthWellness from './HealthWellness';
import Holidays from './Holidays';
import Nature from './Nature';
import TexturePatterns from './TexturePatterns';
import ThreeDRenders from './ThreeDRenders';
import Wallpapers from './Wallpapers';
import SearchResult from './SearchResult';

const App = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Editorial />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/business_work" element={<BusinessWork />} />
          <Route path="/experimental" element={<Experimental />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/film" element={<Film />} />
          <Route path="/food_drink" element={<FoodDrink />} />
          <Route path="/health_wellness" element={<HealthWellness />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/texture_patterns" element={<TexturePatterns />} />
          <Route path="/3d_renders" element={<ThreeDRenders />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
