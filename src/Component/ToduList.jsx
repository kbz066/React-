import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Input, Button ,List} from 'antd';
import store from "../store/index"
import axios from "axios"


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class ToduList extends React.Component {

    constructor() {
        super();
        this.state=store.getState();

        store.subscribe(this.handleSubscribe);
        console.log(this.state);
 
    }
    render() {


        return <Fragment >
            <div style={{ marginLeft: "100px", marginTop: "10px" }}>
                <Input onChange={this.handleInputChange} value={this.state.inputValue} style={{ width: "300px" }}></Input> <Button onClick={this.handleAdditem} type="primary">Primary</Button>
                <List
                style={{width : "300px"}}
             
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>{this.handleDeleteItem(index)}}>{item}</List.Item>)}
                />


            </div>
        </Fragment>
    }

    handleDeleteItem=(index)=>{
        let action={
            type : "action_delete_item",
            index
        }
        store.dispatch(action);
    }
    handleSubscribe=()=>{

        this.setState(store.getState());
    }

    handleAdditem=()=>{
        let action={
            type : "action_add_item",
        }
        store.dispatch(action);
    }
    handleInputChange=(e)=>{
        let inputValue=e.target.value;
        let action={
            type : "action_change_item",
            inputValue
        }
        store.dispatch(action);
    }
    handleAddList= (list)=>{

        console.log(list);
        let action={
            type : "action_add_list",
            list
        }
        store.dispatch(action);
    }


    componentDidMount(){



        store.dispatch((dispatch)=>{
            axios.get("./getlist").then((res)=>{
                let action={
                    type : "action_add_list",
                    list:res.data
                }
                dispatch(action)
            })
        });

    
    }
}

export default ToduList