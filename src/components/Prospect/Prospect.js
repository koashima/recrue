import React from 'react';
import Info from '../Info/Info';
import Interaction from '../Interaction/Interaction';
import Note from '../Notes/Notes';
import { Link } from 'react-router-dom';

class Prospect extends React.Component {
  constructor() { 
    super()
    this.state = { 
      firstName: 'some swag',
      lastName: 'some deswag'
    };
  }

  componentDidMount() {
    console.log('compenentDidMount')
    const id = this.props.match.params.id;
  }

  render() { 
    return(
      <div className="App">
        <Link className="ui left floated button" to={'/prospects'}>◄ MY PROSPECTS</Link>
        <br/>
        <br/>
        <h1>{this.state.firstName}</h1>
        <p>{this.state.lastName}</p>
        <Info />
        <Interaction />
        <Note />
      </div>  
    );
  }
}

export default Prospect;