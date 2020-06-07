import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const ProspectsPage = (props) => { 

  // useEffect()

  return (
    <div classnamee='container'>
    <div classnamee='ui top attached buttons'>
      <Link className="ui button " to={'/addprospect'}>+ NEW PROSPECT</Link>
      <Link to="" className="ui button " onClick={props.handleLogout}>BACK</Link>
      <h1>MY PROSPECTS</h1>
    </div>
      <div>
        {props.prospect.map( (p, i) => 
          <div className='container ui basic vertical buttons' key={i}>
            <Link 
              className='ui basic button' 
              to={`/prospects/${i}`}>{p.firstName}{p.lastName}
              ►
            </Link> 
            <Link className="ui button" to={{pathname: '/editprospect', state: {p, i} }}>EDIT</Link>
            <button
                className='ui button'
                onClick={() => props.handleDeleteProspect(p._id)}
                >
                DELETE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProspectsPage;