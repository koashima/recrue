import React from 'react';
import { Link } from 'react-router-dom';
import Prospect from '../../components/Prospect/Prospect';
function ProspectsPage(props) {
  return (
    <div classnamee="container">
      <div classnamee="ui top attached buttons">
        <Link to="" className="ui button " onClick={props.handleLogout}>
          BACK
        </Link>
        <h1>MY PROSPECTS</h1>
      </div>
      <div className="container ui basic vertical buttons">
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
