import React, { useState } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const Note = (props) => { 

  const [notes, setNotes]= useState("")

  const handleChange = (e) => {
    e.persist()
    setNotes(e.target.value)
  }

  return(
    <Form>
      <TextArea onChange={handleChange} placeholder='PROSPECT NOTES' />
    </Form>
  )
}

export default Note;