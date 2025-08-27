import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Api from "./pages/Api";
import Contributer from "./pages/Contributer";
import DevChoice from "./pages/DevChoice";
import Home from "./pages/Home";
import NWG from "./pages/NWG";

function App() {
  const [showDropList, setShowDropList] = React.useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/dev-choice"
            element={
              <DevChoice
                setShowDropList={setShowDropList}
                showDropList={showDropList}
              />
            }
          />
          <Route
            path="/nwg.io"
            element={
              <NWG
                setShowDropList={setShowDropList}
                showDropList={showDropList}
              />
            }
          />
          <Route
            path="/contributers"
            element={
              <Contributer
                setShowDropList={setShowDropList}
                showDropList={showDropList}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                showDropList={showDropList}
                setShowDropList={setShowDropList}
              />
            }
          />
          <Route
            path="/api-docs"
            element={
              <Api
                setShowDropList={setShowDropList}
                showDropList={showDropList}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
