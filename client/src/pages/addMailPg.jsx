import React from 'react'
import Paper from 'material-ui/Paper';
import axios from 'axios';

/*AddMail*/
import AddMail from '../components/contact/addMail.jsx'

class AddMailPg extends React.Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      companyName: '',
      description: '',
      dueDate: '',
      phone: '',
      email: ''
    }
  }

  addMessage(name, companyName, description, dueDate, phone, email) {
      axios.post('/contactUs', {
        name: this.state.name,
        companyName: this.state.companyName,
        description: this.state.description,
        dueDate: this.state.dateDue,
        phone: this.state.phone,
        email: this.state.email
      })
    }

    render() {
      return (
        <div className="contacr">
         <h2></h2>
         <AddMail addMessage={this.addMessage} />
       </div>
      )
    }
}

export default AddMailPg;
