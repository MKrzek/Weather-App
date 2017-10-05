import React from 'react';

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
        }
    }
    handleNameChange=()=>{
        const name= event.target.value.replace(/\d/g,'');
        this.setState({
            name:name,
        })
    }

    render(){
        return <form>
                  <label>
                      <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                  </label>
               </form>
    }
}