import React from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import prospectService from '../../utils/prospectService';


class EditProspect extends React.Component {
  state = {
    formData: this.props.location.state.prospect
    }
    

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateProspect(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, 
    [e.target.name]: e.target.value};
    this.setState({
        formData,
    });
  };

  render () {
  return (
    <div className="add-formProspect-page ui container">
      {/* <h1>{this.formData.firstName}</h1>
      <h4>{this.formData.lastName}</h4> */}
      <Link className="ui top attached button" to={'/prospects'}>◄ MY PROSPECTS</Link>
      <Form onSubmit={this.handleSubmit} >
        <Form.Group widths='equal'>
          <Form.Input 
            placeholder='FIRST NAME' 
            name='firstName' 
            onChange={this.handleChange}
          />
          <Form.Input 
            placeholder='LAST NAME' 
            name='lastName' 
            onChange={this.handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input 
            placeholder='PROFILE' 
            name='profile' 
            onChange={this.handleChange}
          />
          <Form.Input  
            placeholder='YEAR' 
            name='year' 
            onChange={this.handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='POSITION' 
            name='position' 
            onChange={this.handleChange}
          />
          <Form.Input  
            placeholder='HEIGHT' 
            name='height' 
            onChange={this.handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='WEIGHT' 
            name='weight' 
            onChange={this.handleChange}
          />
          <Form.Input  
            placeholder='HIGH SCHOOL' 
            name='highSchool' 
            onChange={this.handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='CLUB TEAM' 
            name='clubTeam' 
            onChange={this.handleChange}
          />
          <Form.Input  
            placeholder='PHONE' 
            name='phone' 
            onChange={this.handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='EMAIL' 
            name='email' 
            onChange={this.handleChange}
          />
          <Form.Input  
            placeholder='CITY' 
            name='city' 
            onChange={this.handleChange}
          />        
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input  
            placeholder='STATE' 
            name='state' 
            onChange={this.handleChange}
          />
          <Form.Input  
            placeholder='SCORE' 
            name='score' 
            onChange={this.handleChange}
          />        
        </Form.Group>
        <Form.Button className="ui bottom attached button">SUBMIT</Form.Button>
      </Form>
    </div>
  )
  }
}

export default EditProspect;