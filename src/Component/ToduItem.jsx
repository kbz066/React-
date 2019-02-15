import React from 'react'
import ReactDOM from 'react-dom'


class ToduItem extends React.Component{
    constructor(){
        super();

        
    }

    render(){
        const index =this.props.index;

        return <li onClick ={()=>{this.props.itemDelete(index)}}> {this.props.item}</li>
    }
}

export default ToduItem