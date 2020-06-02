import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
const ProspectsPage = (props) => { 

  return (
    <div classnamee='container'>
    <div classnamee='ui top attached buttons'>
      <Link className="ui button " to={'/addprospect'}>+ NEW PROSPECT</Link>
      <Link to="" className="ui button " onClick={props.handleLogout}>LOG OUT</Link>
      <h1>MY PROSPECTS</h1>
    </div>
      <div>
        {props.swag.map( (p, i) => 
            <div className='container ui basic vertical buttons' key={i}>
              <Link className='ui basic button' to={`/prospects/${i}`}>{p.firstName}{p.lastName}►</Link> 
            </div>
        )}
      </div>
    </div>
  );
}

export default ProspectsPage;