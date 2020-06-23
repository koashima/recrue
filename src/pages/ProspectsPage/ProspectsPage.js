import React from 'react';
import { Link } from 'react-router-dom';
import Prospect from '../../components/Prospect/Prospect';
function ProspectsPage(props) {
  return (
    <div classnamee="container">
      <div classnamee="ui top attached buttons">
        <Link className="ui button " onClick={props.handleLogout}>
          LOGOUT
        </Link>{' '}
        <Link className="ui button" to="/addprospect">
          + PROSPECT
        </Link>
        <h1>MY PROSPECTS</h1>
      </div>
      <div className="ui container">
        {props.prospects.map((prospect) => (
          <Prospect
            key={prospect._id}
            prospect={prospect}
            user={props.user}
            handleDeleteProspect={props.handleDeleteProspect}
          />
        ))}
      </div>
    </div>
  );
}

export default ProspectsPage;
