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

    console.log(`Feched id#${id}`)
    this.setState( (prevState) => ({
      firstName: this.props.prospect[id].firstName,
      lastName: this.props.prospect[id].lastName
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
//     setP(
//       props.prospect[id]
//     )
//   });   
  
//   return(
//       <div className="App">
//         <Link className="ui left floated button" to={'/prospects'}>◄ MY PROSPECTS</Link>
//         <br/>
       

//         <Info />
//         <Interaction />
//         <Note />
//       </div>  
//     );
//   }

// export default Prospect;