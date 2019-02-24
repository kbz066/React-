let defaulState={
    inputValue : "aaa",
    list : []
}

export default (state=defaulState,action)=>{

    if(action.type==="action_delete_item"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)

        return newState;

    }
    if(action.type==="action_add_item"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue)
        newState.inputValue="";
        return newState;

    }
    if(action.type==="action_change_item"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.inputValue;

        return newState;

    }
    
    if(action.type==="action_add_list"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list=action.list;

        return newState;

    }
    return state;
}