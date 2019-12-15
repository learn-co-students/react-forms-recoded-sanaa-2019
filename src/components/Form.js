import React from 'react';
import DisplayData from './DisplayData';

class Form extends React.Component {
    render() {
        return (
            <div>
            <form>
            <input
            type="text"
            name="firstName"
            onChange={event => this.props.handlerChange(event)}
            value={this.props.formData.firstName}
            />
            <input
            type="text"
            name="lastName"
            onChange={event => this.props.handlerChange(event)}
            value={this.props.formData.lastName}
            />
            </form>
            <DisplayData firstName={this.props.formData.firstName} lastName={this.props.formData.lastName}/>
            </div>
            )
        }
    }
    
    export default Form;