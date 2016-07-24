import React from 'react'

export default class AddUser extends React.Component {
    _submitForm(event) {
        event.preventDefault();
        if(this._name.value.length) {
            const user = {
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg",
                name: this._name.value,
                status: "Lorem ipsum dolor sit amet"
            }

            firebase.database().ref().child('users').push(user).then(() => {
                this._name.value= '';
            });
        }
    }

    render(){
        return(
            <form className="add-user" onSubmit={this._submitForm.bind(this)}>
                <input type="text" placeholder="Add new user" ref={input => this._name = input}/>
                <button type="submit" value="">Add</button>
            </form>
        )
    }
}
