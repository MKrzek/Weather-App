import React from 'react';
import FetchData from './FetchData.jsx';

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cityName:'',
        }
    }
    handleCityNameChange=()=>{
        const cityName= event.target.value.replace(/\d/g,'');
        this.setState({
            cityName:cityName,
        })
    }

    render(){
        return <div>
                <form>
                  <label>
                      <input type='text' value={this.state.name} onChange={this.handleCityNameChange}/>
                  </label>
               </form>
               <FetchData cityName={this.state.cityName}/>
               </div>
    }
}