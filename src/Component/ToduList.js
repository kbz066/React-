import React ,{Fragment} from 'react'
import ReactDOM from 'react-dom'



class ToduList extends React.Component {
    render() {
        return (
            <Fragment>
                <div><input></input> <button>提交</button> </div>
                <ul>
                    <li>java</li>
                    <li>c++</li>
                </ul>
            </Fragment>

        )
    }


}

export default ToduList;