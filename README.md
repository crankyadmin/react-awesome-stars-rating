# React Awesome Stars Rating &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/fedoryakubovich/react-awesome-stars-rating/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-awesome-stars-rating.svg?style=flat)](https://www.npmjs.com/package/react-awesome-stars-rating) [![Build Status](https://img.shields.io/travis/fedoryakubovich/react-awesome-stars-rating/release/v0.1.8.svg)](https://travis-ci.org/)

```{r, echo=FALSE, eval=TRUE, results="asis"}
travis_url <- "https://travis-ci.org/RevolutionAnalytics/miniCRAN.svg?branch="
shield <- paste0("[![Build Status](",
                 travis_url,
                 system("git rev-parse --abbrev-ref HEAD", intern = TRUE),
                 ")](https://travis-ci.org/RevolutionAnalytics/miniCRAN)")
cat(shield)
```

React Awesome Stars Rating is a simple star component with easy integration for your React applications.

## Table of Contents

- [Previews](#previews)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Documentation](#documentation)

## Previews

![react-awesome-stars-rating preview](https://github.com/fedoryakubovich/react-awesome-stars-rating/blob/release/v0.1.8/images/gifs/react-awesome-stars-rating.gif)

## Features

- Half stars
- Custom size and color
- Value shows with high precision
- Easy integration with Redux
- Accessibility
- SVG Icons

## Installation

`npm install react-awesome-stars-rating`

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import ReactStarsRating from 'react-awesome-stars-rating';

const onChange = (value) => {
  console.log(`React Stars Rating value is ${value}`);
};

const ReactStarsExample = ({ value }) => {
  return <ReactStarsRating onChange={onChange} value={value} />;
};

ReactDOM.render(<ReactStarsExample />, document.getElementById('root'));
```

## Documentation

| Name           | Description                                              | Type     | Default  |
| :------------- | :------------------------------------------------------- | :------- | :------- |
| value          | Value                                                    | Number   | 0        |
| onChange       | A function, that will be invoked when value have changed | Function | null     |
| isEdit         | If `true` the rating is in editing mode                  | Boolean  | true     |
| isHalf         | If `true` half stars are available                       | Boolean  | true     |
| count          | Count of the stars                                       | Number   | 5        |
| size           | Size of the stars                                        | Number   | 25       |
| starGap        | Gap between the stars                                    | Number   | 0        |
| className      | Class name for button container                          | String   | ''       |
| primaryColor   | Star's color when star is active                         | String   | 'orange' |
| secondaryColor | Star's color when star isn't active                      | String   | 'grey'   |
| isArrowSubmit  | Left arrow or right arrow click onvokes onChange         | Boolean  | false    |

## Examples

You can see live examples by below links:

- [Simple Example](https://repl.it/@fedoryakubovich/React-Awesome-Stars-Rating-Simple-Example)
- [Integration](https://repl.it/@fedoryakubovich/React-Awesome-Stars-Rating-Redux-Form-Example) with [redux-form](https://github.com/erikras/redux-form)
