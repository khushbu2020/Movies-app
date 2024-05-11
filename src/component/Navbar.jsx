import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <div className=" container-fluid mt-3">
        <div className=" row">
            <div className=" col-6 d-flex justify-content-start align-items-center">
                <img src="./movie2.png"  height={50} width={80} alt="" />
            <Link className=' text-decoration-none text-white' to="/Movies-app/movielist">
                <h3>Movie List</h3>
                </Link>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">     
            <input
             type="text"
             className="form-control w-50"
             placeholder="Search the movies here..."
             aria-label="Username" 
             aria-describedby="basic-addon1"
            //  defaultValue="avengers"
             onChange={(e)=>{props.setsearchvalue(e.target.value)}}
             value={props.searchvalue}
            
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
