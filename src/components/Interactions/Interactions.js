import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';


const Interactions = () => { 

  const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  
    return (
      <input type={type} name={name} checked={checked} onChange={onChange} />
    );
  };
  
  
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
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
      label: "phone"
    },
    {
      name: "text",
      key: "checkBox3",
      label: "phone"
    },
    {
      name: "social media",
      key: "checkBox4",
      label: "phone"
    }
  ];

  return (
    <Container textAlign="center">
      <label>Checked item name : {checkedItems["email"]} </label> <br />
      {checkboxes.map(item => (
        <label key={item.key}>
          {item.name}
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

export default Interactions;