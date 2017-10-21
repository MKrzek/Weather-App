import React from 'react';
import FetchData from './FetchData.jsx';

export default class SearchInput extends React.Component{
    
    
   
    render(){
    
        return <div className='form-group'>
                <form>
                    <div className='input-group'>
                      <input className='form-control input-lg' 
                             id="inputLarge"
                             type='text' 
                             value={this.props.cityName} 
                             onChange={this.props.handleNameChange} 
                             placeholder='enter a location'/>
                            <span className='input-group-addon' onClick={this.props.handleSubmitButton}> 
                                <p className='fa fa-search'></p>
                            </span>
                 </div> 
               </form>
               
               </div>
    }

}
