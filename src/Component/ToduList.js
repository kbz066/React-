import React ,{Fragment} from 'react'
import ReactDOM from 'react-dom'
import ToduItem from "../Component/ToduItem"



class ToduList extends React.Component {

    constructor(){
        super();
        this.state={
            inputValue :"",
            list:[111,2222]

        }
    }

    render() {
        return (
            <Fragment>
                <div><input value={this.state.inputValue} onChange={this.handleInputOnChange}></input> <button onClick={this.handleBtnClick.bind(this)}>提交</button> </div>
                <ul>
                    {

                        // this.state.list.forEach((item,index)=>{
                            
                        // })

                        this.state.list.map((item,index)=>{
                            return <ToduItem item= {item} index={index} itemDelete={this.handleItemDelete}/>
                        })
                       
                        
                    }
                </ul>
            </Fragment>

        )
    }
    handleInputOnChange = (e)=>{
        this.setState({
            inputValue : e.target.value
        })
    
    }

    handleBtnClick(){
        this.setState({
            list: this.state.list.concat(this.state.inputValue)
        })
    }
    handleItemDelete= (index)=>{
        const list = [... this.state.list];
        list.splice(index,1);
        this.setState((prevstate)=>{
            return {
                list : list
            }
        })
    }

}

export default ToduList;