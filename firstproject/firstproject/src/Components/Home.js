import React from 'react'
import {Link} from 'react-router-dom'

const Home= ()=>{
    return(
    <>
        <h1>Home Page</h1> 
        <Link to={'/contact'}>Contact</Link> <br />
        <Link to={'/about'}>About</Link>
    </>
);
}
export default Home;