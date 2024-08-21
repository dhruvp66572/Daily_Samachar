import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { CountryContext } from "./context/countrycontext";

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 9;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [country, setCountry] = useState("in");
  const [search , setSearch] = useState("");

  return (
    <>
      <CountryContext.Provider value={{ country, setCountry, search, setSearch }}>
        <NavBar  />
        <LoadingBar color="#f11946" progress={setProgress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"general"}
                pageSize={pageSize}            
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"business"}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"entertainment"}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"general"}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"health"}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"science"}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"sports"}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"technology"}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
        <Footer />
      </CountryContext.Provider>
    </>
  );
};

export default App;
