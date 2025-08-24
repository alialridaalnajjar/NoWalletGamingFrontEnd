import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./pages/Api";
import React from "react";

function App() {
  const [showDropList, setShowDropList] = React.useState(false);

  return (
    <>
      <Router>
        <Routes>
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
