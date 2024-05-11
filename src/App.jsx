import React, { useEffect, useState } from "react";
import "./App.css";
import Moviescard from "./component/Moviescard";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moviedetails from "./component/Moviedetails";

function App() {
 
  const [movieslist, setmovieslist] = useState([]);
  // const [searchvalue, setsearchvalue] = useState("avengers");
  const [searchvalue, setsearchvalue] = useState("shinchan");

  const handleMovies = async (searchvalue) => {
    // let url=`https://www.omdbapi.com/?s=Batman&i=tt3896198&apikey=6fbcd1f`;
    let url = `https://www.omdbapi.com/?s=${searchvalue}&i=tt3896198&apikey=6fbcd1f`;
    let result = await fetch(url);
    let data = await result.json();
    // console.log(data);
    setmovieslist(data);
  };
  useEffect(() => {
    handleMovies(searchvalue);
  }, [searchvalue]);

  return (
    <>
    <BrowserRouter>
      <Navbar searchvalu={searchvalue}  setsearchvalue={setsearchvalue} />
      <div className=" container-fluid movie-card">
        <div className=" row ">
          <Routes>
            <Route index element={<Moviescard movieslist={movieslist} />} />
            <Route path="/Movies-app/" element={<Moviescard movieslist={movieslist} />} />
            <Route path="/Movies-app/movielist" element={<Moviescard movieslist={movieslist} />} />
            <Route path="/Movies-app/mdetails/:imdbID" element={<Moviedetails/>} />
            {/* <Route path="/mdetails" element={<Moviedetails/>} /> */}
          

          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
