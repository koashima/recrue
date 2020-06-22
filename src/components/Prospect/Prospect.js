  
// import React, { useState, useEffect }from 'react';
import Info from '../Info/Info';
import Interaction from '../Interaction/Interaction';
import Notes from '../Notes/Notes';
import { Link } from 'react-router-dom';


import React from 'react';

class Prospect extends React.Component {
  constructor() { 
    super()
    this.state = {
    };
  }

  componentDidMount() {
    console.log('compenentDidMount')
    const id = this.props.match.params.id;

    this.setState( (prevState) => ({
      firstName: this.props.prospect[id].firstName,
      lastName: this.props.prospect[id].lastName,
      position: this.props.prospect[id].position,
      year: this.props.prospect[id].year,
      phone: this.props.prospect[id].phone,
      email: this.props.prospect[id].email,
      city: this.props.prospect[id].city,
      state: this.props.prospect[id].state,
    }));
  }

  render() { 
    return(
      <>
      <Link className="ui left floated button" to={'/prospects'}>◄ MY PROSPECTS</Link>
      <br/>
      <br/>
        <h1>{this.state.firstName}</h1>
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




// const Prospect = (props) =>  {

//   const [p, setP] = useState()

//   useEffect( () => {
//     const id = props.match.params.id;
//     console.log(id)
//     console.log(p[id])
//     setP(
//       firstName: props.prospect[id].firstName,
//       lastName: props.prospect[id].lastName,
//       position: props.prospect[id].position,
//       year: props.prospect[id].year,
//       phone: props.prospect[id].phone,
//       email: props.prospect[id].email,
//       city: props.prospect[id].city,
//       state: props.prospect[id].state,
//   )}, []);   
  
//   return(
//       <div className="App">
//         <Link className="ui left floated button" to={'/prospects'}>◄ MY PROSPECTS</Link>
//         <br/>
       

//         <Info />
//         <Interaction />
//         <Notes />
//       </div>  
//     );
//   }

// export default Prospect;