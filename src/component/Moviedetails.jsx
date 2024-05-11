import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Moviedetails = () => {
   // const apiid="https://www.omdbapi.com/?i=tt3896198&apikey=6fbcd1f";
    const {imdbID} = useParams();
    // console.log(imdbID);
    const [movieslist, setmovieslist] = useState([]);
    const mdetails=async()=>{
        let url=`https://www.omdbapi.com/?i=${imdbID}&apikey=6fbcd1f`
        let result= await fetch(url);
        let data= await result.json();
        // console.log(data);
        setmovieslist(data);
    }
    useEffect(() => {
      mdetails();
    }, [imdbID]);
  return (
    <div>
     <div className=" container mt-3">
        <div className="row">
           <div className="col-6">
            <img src={movieslist.Poster} height={600} alt="" />
           </div>
           <div className="col-6">
           <p>Title: {movieslist.Title}</p>
           <p>Year: {movieslist.Year}</p>
           <p>Rated: {movieslist.Rated}</p>
           <p>Released: {movieslist.Released}</p>
           <p>Runtime: {movieslist.Runtime}</p>
           <p>Genre: {movieslist.Genre}</p>
           <p>Director: {movieslist.Director}</p>
           <p>Writer: {movieslist.Writer}</p>
           <p>Actors: {movieslist.Actors}</p>
           <p>Plot: {movieslist.Plot}</p>
           <p>Language: {movieslist.Language}</p>
           <p>Country: {movieslist.Country}</p>
           <p>Awards: {movieslist.Awards}</p>
           <Link to="/Movies-app/movielist">
           <button className=' btn btn-outline-info m-2'>
            back to Main page
            </button>
            </Link>
           </div>
        </div>
     </div>
    </div>
  );
}

export default Moviedetails;
