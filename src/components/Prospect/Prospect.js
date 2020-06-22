import React from 'react';
import { Link } from 'react-router-dom';
import Interaction from '../Interaction/Interaction';
import Notes from '../Notes/Notes';

function Prospect({ prospect, handleDeleteProspect, user }) {
  return (
    <div className="panel">
      <div className="panel-heading">
        <h4 className="panel-title2">{prospect.firstName}</h4>
      </div>
      <div >
        <Interaction />
        <Notes />
      </div>
      <br />
      <div className="panel-footer">
        {prospect.user === user._id ? (
          <Link
            className="ui left floated button"
            to={{
              pathname: '/editprospect',
              state: { prospect },
            }}
          >
            EDIT
          </Link>
        ) : (
          <></>
        )}
        {prospect.user === user._id ? (
          <button onClick={() => handleDeleteProspect(prospect._id)}>
            DELETE
          </button>
        ) : (
          <></>
        )}
      </div>
      <br />
    </div>
  );
}

export default Prospect;
