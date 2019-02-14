import React ,{Fragment} from 'react'
import ReactDOM from 'react-dom'



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
                <div><input value={this.state.inputValue} onChange={this.handleInputOnChange.bind(this)}></input> <button onClick={this.handleBtnClick.bind(this)}>提交</button> </div>
                <ul>
                    {

                        
                        this.state.list.map((item)=>{
                            return <li> {item} </li>
                        })
                       
                        
                    }
                </ul>
            </Fragment>

        )
    }
    handleInputOnChange(e){
        this.setState({
            inputValue : e.target.value
        })
        console.log(this);
    }

    handleBtnClick(){
        this.setState({
            list: this.state.list.concat(this.state.inputValue)
        })
    }

}

export default ToduList;