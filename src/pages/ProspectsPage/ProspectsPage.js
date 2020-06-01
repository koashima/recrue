import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const ProspectsPage = (props) => { 

  return (
    <div>
      <h1>MY PROSPECTS</h1>
      <ul>
        {props.swag.map( (p, i) => 
          <li key={i}>
            <Link to={`/prospects/${i}`}>{p.firstName}{p.lastName}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProspectsPage;