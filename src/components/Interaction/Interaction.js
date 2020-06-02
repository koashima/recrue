import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';


const Interaction = () => { 

  const [checkedItems, setCheckedItems] = useState({});


  const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  
    return (
      <input type={type} name={name} checked={checked} onChange={onChange} />
    );
  };
  
  
  const handleChange = e => {
    e.persist()
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked
    });
  };
  
  const checkboxes = [
    {
      name: "email",
      key: "checkBox1",
      label: "email"
    },
    {
      name: "call",
      key: "checkBox2",
      label: "call"
    },
    {
      name: "text",
      key: "checkBox3",
      label: "text"
    },
    {
      name: "instagram",
      key: "checkBox4",
      label: "instagram"
    }
  ];

  return (
    <Container textAlign="center">
      {checkboxes.map(item => (
        <label key={item.key}>
          {item.label}
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
        </label>
      ))}
    </Container>
  );
};

export default Interaction;