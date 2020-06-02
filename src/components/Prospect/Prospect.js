import React from 'react';
import Info from '../Info/Info';
import Interaction from '../Interaction/Interaction';
import Note from '../Note/Note';
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
        <Link className="ui button fluid" to={'/prospects'}>◄ MY PROSPECTS</Link>
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