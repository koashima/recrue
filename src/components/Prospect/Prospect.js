import React, { Component } from 'react';

class Prospect extends Component {
    state = {
        isEditing: null,
        formData:  {
          firstName: this.props.prospect.firstName,
          lastName: this.props.prospect.lastName,
          position: this.props.prospect.position,
          year: this.props.prospect.year,
          phone: this.props.prospect.phone,
          email: this.props.prospect.email,
          city: this.props.prospect.city,
          state: this.props.prospect.state,
        }
    }

    handleEditing = (prosId) => {
        this.setState({isEditing: prosId})
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData
        })
    }

    handleSubmit = e => {
        this.props.handleUpdateEntry(this.state.formData, this.props.prospect._id)
    }

    render() {

        let prospect;

        if (this.state.isEditing === this.props.prospect._id) {
            prospect = <div>editing!</div>
        } else {
            prospect =      
            <>
            <br/>
            <br/>
              <h1>{this.state.formData.firstName}</h1>
              <p>{this.state.formData.lastName}</p>
              <p>{this.state.formData.position}</p>
              <p>{this.state.formData.year}</p>
              <p>{this.state.formData.phone}</p>
              <p>{this.state.formData.email}</p>
              <p>{this.state.formData.city}</p>
              <p>{this.state.formData.state}</p>
              <p>{this.state.formData.city}</p>
              <button onClick={() => this.handleEditing(this.props.prospect._id)}>Edit</button>
              
            </>  
        }
        return (
            [prospect]
        )
    }
}

export default Prospect;