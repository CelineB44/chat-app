
import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        };
    }
    render() {
        return (
            <figure className="Contact">
                <img src={this.props.avatar} alt={this.props.name} className="avatar" />
                <figcaption
                    className="status"
                    onClick={event => this.setState({ online: !this.state.online })}>
                    <h3 className="name">{this.props.name}</h3>
                    <div className={this.state.online ? "status-online" : "status-offline"}></div>
                    <span className="status-text">{this.state.online ? "Online" : "Offline"}</span>
                </figcaption>
            </figure>
        );
    }
}

export default Contact;