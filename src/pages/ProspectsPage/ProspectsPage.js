import React from 'react';
import Prospect from '../../components/Prospects/Prospects';
import { Container } from 'semantic-ui-react';

const ProspectsPage = () => { 

  return(
    <div className="App">
        <h1>MY PROSPECTS</h1>
        <Prospect/>
        <Prospect/>
        <Prospect/>
        <Prospect/>
        <Prospect/>
    </div>
  )
}

export default ProspectsPage;