import React from 'react';

export default class User extends React.Component {
    _removeUser(userId, event) {
        if(confirm('Are you sure you want to delete this item?')) {
            firebase.database().ref().child('users').child(userId).remove();
        }
    }

    render() {
        return (
            <li>
                <img src={this.props.img} alt="avatar" />
                <div className="about">
                    <i className="fa fa-trash-o" onClick={this._removeUser.bind(this, this.props.id)}></i>
                    <div className="name">{this.props.name}</div>
                    <div className="status">
                        <i className="fa fa-circle"></i> {this.props.status}
                    </div>
                </div>
            </li>
        )
    }
}
