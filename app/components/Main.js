import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList.js';
import AddUser from './AddUser.js';
import firebase from 'firebase';

var config = {
    apiKey: 'DFDwBB3ftEOAOpF1g7izn190AQR9HE98IwZvapht',
    databaseURL: 'https://sizzling-torch-5976.firebaseio.com/'
}

firebase.initializeApp(config);

class MainComponent extends React.Component {
    render(){
        return (
            <div className="container">
                <UserList />
                <AddUser />
            </div>
        )
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('app')
)
