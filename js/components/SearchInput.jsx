import React from 'react';
import FetchData from './FetchData.jsx';

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cityName:'',
            render: false,
           
        }
    }
    handleNameChange=(event)=>{ 
       this.setState({
            cityName:event.target.value,
            render:false})
      
    }
   
    handleSubmitButton=(event)=>{
        event.preventDefault();
        this.setState({
           render:true,
        })
       
    }

    render(){
        console.log (this.state.render)
        console.log (this.state.cityName)
        return <div>
                <form >
                  <label>
                      <input type='text' 
                             value={this.state.cityName} 
                             onChange={this.handleNameChange} 
                             placeholder='check the weather by city name'/>
                  </label>
                  <input type='submit' onClick={this.handleSubmitButton}/>
               </form>
               <FetchData cityName={this.state.cityName} render={this.state.render}/>
               </div>
    }

}
