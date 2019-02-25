
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios"

function* getList(){

    let res=yield axios.get("./getlist");
    let action = {
        type: "action_add_list",
        list: res.data
    }
    
    yield put(action)

}


function* mySaga() {
    yield takeLatest("action_add_list", getList);
  }
  
  export default mySaga;