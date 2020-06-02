import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
const ProspectsPage = (props) => { 

  return (
    <div>
      <h1>MY PROSPECTS</h1>
      <Link className="ui top attached button" to={'/addprospect'}>+ NEW PROSPECT</Link>
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