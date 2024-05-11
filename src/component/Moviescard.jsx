import React from 'react';
import { Link } from 'react-router-dom';

const Moviescard = (props) => {
    // console.log(props.movieslist.Search);
    
    if (!props.movieslist || !props.movieslist.Search) {
        // Handle the case where props.movieslist or props.movieslist.Search is undefined
        return <div>No movies found</div>;
    }
  return (
    <div className=' d-flex mt-2'>
           { props.movieslist.Search.map((movies,idx)=>{
                return (
                    <div key={idx} className=' image-container d-flex gap-4 m-3 justify-content-start'>
                      <Link to={`/Movies-app/mdetails/${movies.imdbID}`}>
                    <img className='' src={movies.Poster} key={idx} alt="moviesimg" />
                    
                  <div className=" overlay d-flex text-white align-items-center justify-content-center">
                    More Details
                  </div>
                  </Link>
                    </div>
                )
            })   
}
        {/* {props.search.Poster} */}
   
    </div>
  );
}

export default Moviescard;
