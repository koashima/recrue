import React from 'react';

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
      </>  
    );
  }
}

export default Prospect;