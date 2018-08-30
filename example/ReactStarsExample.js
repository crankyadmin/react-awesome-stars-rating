import React, { PureComponent } from 'react';

import ReactStarsRating from '../dist/index';

class ReactStarsExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      isEdit: true,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      value,
      isEdit: false,
      selectedValue: value,
    });
  }

  render() {
    const { isEdit, value, selectedValue } = this.state;

    return (
      <section>
        <ReactStarsRating
          onChange={this.onChange}
          isEdit={isEdit}
          value={value}
          selectedValue={selectedValue}
        />

        <div>Selected value: {selectedValue}</div>
      </section>
    );
  }
}

export default ReactStarsExample;
