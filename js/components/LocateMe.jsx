import React from 'react';
import {Link, IndexLink}from 'react-router';
export default class LocateMe extends React.Component{

    render(){
        return <div>
                <nav>
                   <ul>
                       <li>
                        <Link to="/">Back to Main Page</Link>
                       </li>
                       <li>
                        <Link to ="/LocateMe">Locate Me</Link>
                       </li>
                   </ul>
               </nav>
               <div>
               abababababababababab
               </div>
               </div>
    }
}