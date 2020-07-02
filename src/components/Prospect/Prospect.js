import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Prospect(props) {
  const [prospect, setProspect] = useState(props.location.state.p);

  return (
    <div>
      <div className="prospect-name">
        <h1>{prospect.firstName} {prospect.lastName}</h1>

      </div>
      <div className="prospect-info">
        {prospect.profile}
        {prospect.year}
        {prospect.position}
        {prospect.height}
        {prospect.weight}
        {prospect.highSchool}
        {prospect.clubTeam}
      </div>

      {prospect.phone}
      {prospect.email}
      {prospect.street}
      {prospect.city}
      {prospect.state}
      {prospect.zipcode}
      {prospect.interaction}
      {prospect.notes}
    </div>
  );
}

export default Prospect;