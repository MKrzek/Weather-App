import React from 'react';
import {Link, IndexLink}from 'react-router';

export default class Navigation extends React.Component{
    render(){
        return <nav>
                   <ul>
                       <li>
                       <Link to ="/ShowLocations">My Locations</Link>
                        </li>
                        <li>
                          <Link to ="/LocateMe">Locate Me</Link>
                        </li>
                   </ul>
               </nav>
    }}