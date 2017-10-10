import React from 'react';
import FetchData from './FetchData.jsx';

export default class SearchInput extends React.Component{
    
    
   
    render(){
    
        return <div>
                <form >
                  <label>
                      <input type='text' 
                             value={this.props.cityName} 
                             onChange={this.props.handleNameChange} 
                             placeholder='check the weather by city name'/>
                  </label>
                  <input type='submit' onClick={this.props.handleSubmitButton}/>
               </form>
               
               </div>
    }

}
