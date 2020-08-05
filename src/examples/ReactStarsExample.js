import React, { useState } from 'react';
import ReactStarsRating from '../lib';

function ReactStarsExample() {
  const [{ value, isEdit, selectedValue }, setState] = useState({
    value: 3.2,
    isEdit: true,
    selectedValue: null,
  });

  function onChange(value) {
    setState({ value, isEdit: false, selectedValue: value });
  }

  return (
    <section>
      <ReactStarsRating
        onChange={onChange}
        isEdit={isEdit}
        value={value}
        isHalf
        selectedValue={selectedValue}
        id="simple"
      />

      <div>Selected value: {selectedValue}</div>
    </section>
  );
}

export default ReactStarsExample;
