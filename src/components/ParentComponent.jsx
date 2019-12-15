import React from 'react';
import Form from './Form'

class ParentComponent extends React.Component {
    state = {
        firstName: "Mohammed",
        lastName: "Abdulaziz",
    }
    
handlerChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
    show(){
        console.log(this.state.firstName,this.state.lastName);
    }
    render() {
        return (
            <div>
                <Form
            formData={this.state}
            handlerChange={this.handlerChange}
            />
            {this.show()}
            </div>
            
            )
        }
    }
    
    export default ParentComponent;