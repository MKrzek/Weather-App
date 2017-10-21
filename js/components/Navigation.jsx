import React from 'react';
import {Link, IndexLink}from 'react-router';

export default class Navigation extends React.Component{
    render(){
        return <nav className='navbar navbar-default' id="bs-example-navbar-collapse-1">
                <div className='container-fluid'>
                   <ul className='nav navbar-nav'>
                       <li>
                       <Link to ="/ShowLocations">My Locations</Link>
                        </li>
                        <li>
                          <Link to ="/LocateMe">Locate Me</Link>
                        </li>
                   </ul>
                </div>
               </nav>
    }}