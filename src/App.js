import React from 'react';
import classes from './App.module.scss'
import {Route, Routes} from "react-router-dom"
import { HomePage } from "./pages/HeaderPages/HomePage/HomePage";
import { ConsolesPage } from "./pages/HeaderPages/ConsolesPage/ConsolesList/ConsolesPage";
import { AccessoriesPage }from "./pages/HeaderPages/AccessoriesPage/AccessoriesPage";
import { GamesPage } from "./pages/HeaderPages/GamesPage";
import { BlogPage } from "./pages/HeaderPages/BlogPage";
import { ContactPage } from "./pages/HeaderPages/ContactPage/ContactPage";
import { NoFoundPage } from "./pages/HeaderPages/NoFoundPage";
import { Layout } from "./components/Layout/Layout";
import { AccountPage } from "./pages/FooterPages/AccountPage";
import { SupportPage } from "./pages/FooterPages/SupportPage";
import { ReturnsPage } from "./pages/FooterPages/ReturnsPage";
import { TrackingPage } from "./pages/FooterPages/TrackingPage";
import { LocationPage } from "./pages/FooterPages/LocationPage";
import { NewsPage } from "./pages/FooterPages/NewsPage";
import { xboxSupportPage } from "./pages/FooterPages/xboxSupportPage"
import { XboxSeriesX } from './pages/HeaderPages/ConsolesPage/Consoles/Xbox series X/main'
import { XboxWC } from "./pages/HeaderPages/ConsolesPage/Consoles/Xbox Wireless Controller/main";
import { CartPage } from "./pages/HeaderPages/CartPage/Cart";

const App = () => {
  return (
      <div className={classes.Board}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/controllers" element={<ConsolesPage/>}/>
                <Route path="/XboxSeriesX" element={<XboxSeriesX/>}/>
                <Route path="/xboxWC" element={<XboxWC/>}/>
              <Route path="/accessories" element={<AccessoriesPage/>}/>
              <Route path="/games" element={<GamesPage/>}/>
              <Route path="/blog" element={<BlogPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="*" element={<NoFoundPage/>}/>

              <Route path="/account" element={<AccountPage/>}/>
              <Route path="/support" element={<SupportPage/>}/>
              <Route path="/returns" element={<ReturnsPage/>}/>
              <Route path="/tracking" element={<TrackingPage/>}/>
              <Route path="/location" element={<LocationPage/>}/>
              <Route path="/news" element={<NewsPage/>}/>
              <Route path="/xboxsupport" element={<xboxSupportPage/>}/>
            </Route>
          </Routes>
      </div>
  );
}

export default App;
