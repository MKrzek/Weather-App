import React from 'react';
import FetchData from './FetchData.jsx';

export default class SearchInput extends React.Component{
    
    
   
    render(){
    
        return <div className='form-group'>
                <form>
                    <div className='input-group'>
                      <input className='form-control  search-query' 
                            
                             type='text' 
                             value={this.props.cityName} 
                             onChange={this.props.handleNameChange} 
                             placeholder='enter a location'/>
                            <span className='input-group-btn' onClick={this.props.handleSubmitButton}> 
                                <button type='submit' className='btn btn-primary'>Search</button>
                            </span>
                 </div> 
               </form>
               
               </div>
    }

}
