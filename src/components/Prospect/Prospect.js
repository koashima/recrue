import React from 'react';
import Info from '../Info/Info';
import Interaction from '../Interaction/Interaction';
import Notes from '../Notes/Notes';
import { Link } from 'react-router-dom';

class Prospect extends React.Component {
  constructor() { 
    super()
    this.state = {
    };
  }

  componentDidMount() {
    console.log('compenentDidMount')
    const id = this.props.match.params.id;

    this.setState( () => ({
      firstName: this.props.prospect[id].firstName,
      lastName: this.props.prospect[id].lastName,
      position: this.props.prospect[id].position,
      year: this.props.prospect[id].year,
      phone: this.props.prospect[id].phone,
      email: this.props.prospect[id].email,
      city: this.props.prospect[id].city,
      state: this.props.prospect[id].state,
      id: this.props.prospect[id]._id
    }));
  }

  render() { 
    return(
      <>
      <Link className="ui left floated button" to={'/prospects'}>◄ MY PROSPECTS</Link>
      <br/>
      <br/>
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.id}</h1>
        <p>{this.state.lastName}</p>
        <p>{this.state.position}</p>
        <p>{this.state.year}</p>
        <p>{this.state.phone}</p>
        <p>{this.state.email}</p>
        <p>{this.state.city}</p>
        <p>{this.state.state}</p>
        <p>{this.state.city}</p>
        <Info />
        <Interaction />
        <Notes />

      </>  
    );
  }
}
export default Prospect;