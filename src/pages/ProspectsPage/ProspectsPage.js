import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
const ProspectsPage = (props) => { 

  return (
    <div>
      <h1>MY PROSPECTS</h1>
      <ul>
        {props.swag.map( (p, i) => 
          <div>
            <Container key={i}>
              <Link className='ui button large' to={`/prospects/${i}`}>{p.firstName}{p.lastName}</Link> 
            </Container>
          </div>
        )}
      </ul>
    </div>
  );
}

export default ProspectsPage;