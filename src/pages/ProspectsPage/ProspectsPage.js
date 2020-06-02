import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
const ProspectsPage = (props) => { 

  return (
    <div>
      <h1>MY PROSPECTS</h1>
      <Link className="ui button" to={'/addprospect'}>+ NEW PROSPECT</Link>
      <div>
        {props.swag.map( (p, i) => 
            <Container key={i}>
              <Link className='ui button large' to={`/prospects/${i}`}>{p.firstName}{p.lastName}►</Link> 
            </Container>
        )}
      </div>
    </div>
  );
}

export default ProspectsPage;