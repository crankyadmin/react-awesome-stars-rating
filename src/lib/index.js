import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Star from './star';
import styles from './styles';

function ReactAwesomeStarsRating({
  isEdit,
  className,
  isArrowSubmit,
  id,
  primaryColor,
  secondaryColor,
  starGap,
  isHalf,
  size,
  count,
  value: defaultValue,
  onChange,
}) {
  let [{ value, isSubmitted }, setState] = useState({
    value: defaultValue,
    isSubmitted: false,
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, value: defaultValue }));
  }, [defaultValue]);

  function isMoreThanHalf(event) {
    const point = event.clientX - event.target.getBoundingClientRect().left;

    return point > size / 2;
  }

  function onMouseMove(event) {
    let newValue = Number(event.target.getAttribute('data-stars'));

    if (isHalf && !isMoreThanHalf(event)) {
      newValue -= 0.5;
    }

    setState((prevState) => ({ ...prevState, value: newValue }));
  }

  function onMouseLeave() {
    setState((prevState) => ({ ...prevState, value: defaultValue || 0 }));
  }

  function onBlur() {
    onChange(value);
    setState((prevState) => ({ ...prevState, isSubmitted: true }));
  }

  function handleChange(event) {
    let newValue = Number(event.target.getAttribute('data-stars'));

    if (isHalf && !isMoreThanHalf(event)) {
      newValue -= 0.5;
    }

    onChange(newValue);
  }

  function onChangeStars(newValue) {
    if (value > 0 || value < count) {
      if ((value > 0 && newValue < 0) || (value < count && newValue > 0)) {
        value = (value % 1 === 0.5 ? value : Math.round(value)) + newValue;
      }

      setState((prevState) => ({ ...prevState, value }));

      if (isArrowSubmit) {
        onChange(value);
      }
    }
  }

  function onKeyDown(event) {
    const { keyCode } = event;

    switch (keyCode) {
      case 37:
        onChangeStars(isHalf ? -0.5 : -1);
        break;
      case 39:
        onChangeStars(isHalf ? 0.5 : 1);
        break;
      case 13:
        onChange(value);
        break;
      default:
        break;
    }
  }

  function renderStars() {
    const starsList = [];
    let props = { primaryColor, secondaryColor };
    const fullId = `fullId-${id}`;
    const halfId = `halfId-${id}`;
    const noneId = `noneId-${id}`;

    if (isEdit) {
      props = { ...props, onMouseMove, onMouseLeave, onChange: handleChange };
    }

    for (let i = 1; i <= count; i++) {
      const style = i !== count ? { paddingRight: starGap } : null;

      starsList.push(
        <span
          key={`react-stars-rating-char${i}`}
          className={`star star-${i}`}
          style={style}
        >
          <Star
            index={i}
            value={value}
            size={size}
            isHalf={isHalf}
            fullId={fullId}
            halfId={halfId}
            noneId={noneId}
            {...props}
          />
        </span>,
      );
    }

    return starsList;
  }

  function getProps() {
    let props = { tabIndex: -1 };

    if ((isEdit || isArrowSubmit) && !isSubmitted) {
      props = { onKeyDown, onBlur, tabIndex: 0 };
    }

    return props;
  }

  return (
    <span
      id={id}
      role="button"
      className={className}
      {...getProps()}
      style={isEdit ? styles.activeContainer : styles.inActiveContainer}
    >
      {renderStars()}
    </span>
  );
}

ReactAwesomeStarsRating.propTypes = {
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  isHalf: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  starGap: PropTypes.number.isRequired,
  isArrowSubmit: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

ReactAwesomeStarsRating.defaultProps = {
  isEdit: true,
  isHalf: true,
  count: 5,
  value: 0,
  size: 25,
  primaryColor: 'orange',
  secondaryColor: 'grey',
  className: '',
  starGap: 0,
  isArrowSubmit: false,
  onChange: () => {},
  id: `${Date.now()}`,
};

export default ReactAwesomeStarsRating;
