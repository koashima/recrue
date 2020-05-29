import React from 'react';
import Prospect from '../../components/Prospect/Prospect';
import { Container } from 'semantic-ui-react';

const ProspectsPage = () => { 

  return(
    <div className="">
      <Container style={{backgroundColor: 'whitesmoke'}}>
        <h1>MY PROSPECTS</h1>
        <Prospect/>
        <Prospect/>
        <Prospect/>
        <Prospect/>
        <Prospect/>
      </Container>

    </div>
  )
}

export default ProspectsPage;