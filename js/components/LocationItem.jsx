import React from 'react';
//import ShowLocations from './ShowLocations.jsx';


export default class LocationItem extends React.Component {
    render() {
        console.log(this.props)
        return (
            <li>
{this.props.location}
            <button>X</button>
            </li>
        )
    }
}
    
    