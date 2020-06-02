import React from 'react';
import Info from '../Info/Info';
import Interaction from '../Interaction/Interaction';
import Note from '../Note/Note';


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
      <>        
        <h1>{this.state.firstName}</h1>
        <p>{this.state.lastName}</p>
        <Info />
        <Interaction />
        <Note />

      </>  
    );
  }
}

export default Prospect;