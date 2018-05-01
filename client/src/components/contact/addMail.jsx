import React from 'react';

/*Style*/
import TextField from 'material-ui/TextField';

class AddMail extends React.Component {
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
    this.updateName = this.updateName.bind(this)
    this.updateCompanyName = this.updateCompanyName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateDueDate = this.updateDueDate.bind(this);
    this.updatePhone =this.updatePhone.bind(this);
    this.updateEmail= this.updateEmail.bind(this);
    this.add = this.add.bind(this);
  }
  updateName(e){
    this.setState({
      name: e.target.value
    })
  }
  updateCompanyName(e){
    this.setState({
      companyName: e.target.value
    })
  }
  updateDescription(e){
    this.setState({
      description: e.target.value
    })
  }
  updateDueDate(e){
    this.setState({
      dueDate: e.target.value
    })
  }
  updatePhone(e){
    this.setState({
      phone: e.target.value
    })
  }  updateEmail(e){
      this.setState({
        email: e.target.value
      })
    }
    add(){
      this.props.addMessage(this.state.name, this.state.companyName, this.state.description, this.state.dateDue, this.state.phone, this.state.email);
      this.setState({
        name: '',
        companyName: '',
        description: '',
        dueDate: '',
        phone: '',
        email: ''
      })
    }

  render() {
    return(
      <form>
      <div id="Contact-Form">
      <h1>Platicame de tu Proyecto!</h1><br />
      <h3>Llena el formato para saber un poco mas sobre ti y tu proyecto.</h3><br />
      <h2>Hola!</h2><p>Mi nombre es <input onChange={this.updateName} value={this.state.name} placeholder="Nombre completo"/> y soy
      parte de <input onChange={this.updateCompanyName} value={this.state.companyName} placeholder="Nombre de Empresa"/>,
      <br /> estoy buscando alguien que me ayude con un proyecto:
      <br /> <textarea onChange={this.updateDescription} value={this.state.description} name="Description" placeholder="Pequeña descripcion del trabajo"/>.
      <br /> Este proyecto tengo un objetivo de completarlo en o cerca de <input onChange={this.updateDueDate} value={this.state.dueDate} placeholder='dd/mm/yy' />.
      <br /> Pueden contactarme por telefono: <input onChange={this.updatePhone} value={this.state.phone} placeholder="Numero de telefono" />
      o al correo electronico: <br /><input onChange={this.updateEmail} value={this.state.email} placeholder="Correo electronico"/> para hablar mas.
      <br />
      Gracias!
      </p>
      <br />
      <button onClick={this.add}>Enviar!</button>
      </div>
      </form>
    )
  }
}

export default AddMail
