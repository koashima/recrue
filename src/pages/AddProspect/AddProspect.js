import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import prospectService from '../../utils/prospectService';


const AddProspect = (props) => { 

  const [prospect, setProspect] = useState({
    firstName: "",
    lastName: "",
    profile: "",
    year: "",
    position: "",
    height: "",
    weight: "",
    highSchool: "",
    clubTeam: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    gpaW: "",
    gpaU: "",
    score: "",
  });


  function handleChange(e) {
    e.persist()
    setProspect({
      ...prospect,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
     await prospectService.create(prospect);
      // let App know a user has signed up
      props.handleNew();
      // Successfully signed up - show HomePage
      props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err)
    }
  }

  return (
    <div className="add-prospect-page ui container">
      <h1>ADD PROSPECT</h1>
      <Link className="ui top attached button" to={'/prospects'}>◄ MY PROSPECTS</Link>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths='equal'>
          <Form.Input 
            placeholder='FIRST NAME' 
            name='firstName' 
            onChange={handleChange}
          />
          <Form.Input 
            placeholder='LAST NAME' 
            name='lastName' 
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input 
            placeholder='PROFILE' 
            name='profile' 
            onChange={handleChange}
          />
          <Form.Input  
            placeholder='YEAR' 
            name='year' 
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='POSITION' 
            name='position' 
            onChange={handleChange}
          />
          <Form.Input  
            placeholder='HEIGHT' 
            name='height' 
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='WEIGHT' 
            name='weight' 
            onChange={handleChange}
          />
          <Form.Input  
            placeholder='HIGH SCHOOL' 
            name='highSchool' 
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='CLUB TEAM' 
            name='clubTeam' 
            onChange={handleChange}
          />
          <Form.Input  
            placeholder='PHONE' 
            name='phone' 
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='EMAIL' 
            name='email' 
            onChange={handleChange}
          />
          <Form.Input  
            placeholder='CITY' 
            name='city' 
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='STATE' 
            name='state' 
            onChange={handleChange}
          />
          <Form.Input  
            placeholder='SCORE' 
            name='score' 
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Button className="ui bottom attached button">SUBMIT</Form.Button>
      </Form>
    </div>
  )
}

export default AddProspect;