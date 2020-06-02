import React, { useState } from 'react';
import { Form, Button} from 'semantic-ui-react';
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
      await prospectService.signup();
      // let App know a user has signed up
      props.handleSignupOrLo();
      // Successfully signed up - show HomePage
      props.history.push('/prospects');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  }

  return (
    <div className="add-prospect-page ui container">
      <h1>ADD PROSPECT</h1>
      <Button className="ui justified container" onClick={() => props.history.push('/prospects')}>BACK</Button>
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
        <Form.Button className="ui ">SUBMIT</Form.Button>
      </Form>
    </div>
  )
}

export default AddProspect;