import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Interaction from '../Interaction/Interaction'
function Prospect(props) {
  const [prospect, setProspect] = useState(props.location.state.p);

  return (
    <div>
      <Link className="ui top attached button" to={'/prospects'}>
        ◄ MY PROSPECTS
      </Link>

      <div className="prospect-name ui segment">
        <h1>
          {prospect.firstName} {prospect.lastName}
        </h1>
        <div class="ui section divider"></div>
        <div
          className="prospect-info"
          style={{ display: `flex`, flexDirection: `column` }}
        >
          <p>PROFILE: {prospect.profile}</p>
          <p>YEAR: {prospect.year}</p>
          <p>POSITION: {prospect.position}</p>
          <p>HEIGHT: {prospect.height}</p>
          <p>WEIGHT: {prospect.weight}</p>
          <p>HIGH SCHOOL: {prospect.highSchool}</p>
          <p>CLUB TEAM: {prospect.clubTeam}</p>
        </div>
      </div>

      {prospect.phone}
      {prospect.email}
      {prospect.street}
      {prospect.city}
      {prospect.state}
      {prospect.zipcode}
      {prospect.interaction}
      {prospect.notes}
      <Interaction />
    </div>
  );
}

export default Prospect;
