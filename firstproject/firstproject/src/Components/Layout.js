import React from "react";
import { Link, outleet, Outlet } from "react-router-dom";
import img from "./download.png";

const Layout = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav float-start">
                        <li className={"nav-item active "}>
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                            <img src={img} alt="logo" height={100} width={150}/>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-5" >
                        <li className={"nav-item mr-5"} >
                            <a class="nav-link" href="">About</a>
                        </li>

                        <li className={"nav-item mr-5"}>
                            <a class="nav-link" href="">contact</a>
                        </li>

                        <li className={"nav-item mr-5"}>
                            <a class="nav-link" href="">Rate Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default Layout;