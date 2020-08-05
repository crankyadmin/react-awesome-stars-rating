import React, { useState } from 'react';
import Form from './form';

function FormContainer() {
  const [{ isEdit, selectedValue }, setState] = useState({
    isEdit: true,
    selectedValue: null,
  });
  const initialValues = { reactStarsRating: 0 };

  function handleChange(value) {
    setState({ isEdit: false, selectedValue: value });
  }

  return (
    <Form
      initialValues={initialValues}
      isEdit={isEdit}
      selectedValue={selectedValue}
      handleChange={handleChange}
    />
  );
}

export default FormContainer;
