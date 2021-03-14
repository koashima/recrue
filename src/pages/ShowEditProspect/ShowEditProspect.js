import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ShowEditProspect = (props) => {
  const [prospect, setProspect] = useState(props.location.state.p);

  function handleChange(e) {
    e.persist();
    setProspect({
      ...prospect,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateProspect(prospect);
    props.history.push('/');
  }

  return (
    <div className="add-prospect-page ui container">
      <h1>{prospect.firstName}</h1>
      <h4>{prospect.lastName}</h4>
      <Link className="ui top attached button" to={'/prospects'}>
        ◄ MY PROSPECTS
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            value={prospect.firstName}
            name="firstName"
            placeholder=""
            onChange={handleChange}
          />
          <Form.Input
            value={prospect.lastName}
            name="lastName"
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            value={prospect.profile}
            name="profile"
            placeholder=""
            onChange={handleChange}
          />
          <Form.Input
            value={prospect.year}
            name="year"
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            value={prospect.position}
            name="position"
            placeholder=""
            onChange={handleChange}
          />
          <Form.Input
            value={prospect.height}
            placeholder="HEIGHT"
            name="height"
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            value="WEIGHT"
            name="weight"
            placeholder=""
            onChange={handleChange}
          />
          <Form.Input
            value="HIGH SCHOOL"
            name="highSchool"
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            value="CLUB TEAM"
            name="clubTeam"
            placeholder=""
            onChange={handleChange}
          />
          <Form.Input
            value="PHONE"
            name="phone"
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            value="EMAIL"
            name="email"
            placeholder=""
            onChange={handleChange}
          />
          <Form.Input
            value="CITY"
            name="city"
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            value="STATE"
            name="state"
            placeholder=""
            onChange={handleChange}
          />
          <Form.Input
            value="SCORE"
            name="score"
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button className="ui bottom attached button">SUBMIT</Form.Button>
      </Form>
    </div>
  );
};

export default ShowEditProspect;
