import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import prospectService from '../../utils/prospectService';
import Prospect from '../../components/Prospect/Prospect';

function ProspectsPage (props) { 

  const [prospect, setProspect] = useState([]);

  useEffect( () => {
    async function getProspects () {
      let prospects = await prospectService.getAll();
      setProspect(prospects);
    } 
    getProspects()
  }, [setProspect]);

  async function handleDeleteProspect (id) {
    await prospectService.deleteOne(id);
    setProspect(({
      prospect: prospect.filter(p => p._id !== id)
    }),
    props.history.push('/'));
  }

  return (
    <div classnamee='container'>
    <div classnamee='ui top attached buttons'>
      <Link className="ui button " to={'/addprospect'}>+ NEW PROSPECT</Link>
      <Link to="" className="ui button " onClick={props.handleLogout}>BACK</Link>
      <h1>MY PROSPECTS</h1>
    </div>
      <div>
        {prospect.map( (entry) => 
         
          <Prospect 
            prospect={prospect}
            handleDeleteEntry={props.handleDeleteEntry}
            key={entry._id}
            handleUpdateEntry={props.handleUpdateEntry}
          />
        )}
      </div>
    </div>
  );
}

export default ProspectsPage;