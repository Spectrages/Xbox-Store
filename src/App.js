import React from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom"
import { HomePage } from "./pages/HeaderPages/HomePage";
import { ConsolesPage } from "./pages/HeaderPages/ConsolesPage";
import { AccessoriesPage }from "./pages/HeaderPages/AccessoriesPage";
import { GamesPage } from "./pages/HeaderPages/GamesPage";
import { BlogPage } from "./pages/HeaderPages/BlogPage";
import { ContactPage } from "./pages/HeaderPages/ContactPage";
import { NoFoundPage } from "./pages/HeaderPages/NoFoundPage";
import { Layout } from "./components/Layout";

const App = () => {
  return (
      <div className="Board">
          <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="/consoles" element={<ConsolesPage/>}/>
              <Route path="/accessories" element={<AccessoriesPage/>}/>
              <Route path="/games" element={<GamesPage/>}/>
              <Route path="/blog" element={<BlogPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="*" element={<NoFoundPage/>}/>
          </Route>
          </Routes>
      </div>
  );
}

export default App;
