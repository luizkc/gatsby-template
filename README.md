# Website Alpha

## Requirements

This project utilizes:

- `npm`
- `node`
- `git`
- `gatsby-cli`

### Installation

Install `npm` and `node` [here](https://nodejs.org)

Once installed, run `npm i -g gatsby-cli` in your terminal to instal the Gatsby CLI.

### Setup

- clone this repo with git
- run `npm i` to install necessary packages

## Environment Configuration

_coming soon_

## Structure

```
.
│
├── src/                    # Component and page sourcing
│   ├── assets/             # SVGs, images, fonts, etc
│   ├── components/         # React components
│   │   └── componentName/  # component folder
│   │   |   └── styles.jsx  # styled-components styling of component
│   │   |   └── index.jsx   # component function
|   |   └── Layout.jsx      # Layout component that includes navigation
│   ├── pages/              # Each file here is a page in the router
│   └──
├── static/                 # Static files (public folder)
│   └──
├── gatsby-config.js        # Gatsby config file including plugins and rules
└──
```

## Styling with Tailwind and Styled Components

You can use the tw function to apply Tailwind classes to components. It is optional to use Tailwind's prebuilt classes, however, it does speed things up on the responsiveness implementation. This approach also let's use you style your components with regular CSS and/or Tailwind classes for ultimate flexibility.

### Example

```js
import tw from 'twin.macro';
import styled from 'styled-components';
import React from 'react';

// style components with css-in-js
// use the tw function to apply tailwind classes
const HeaderContainer = styled.div`
  ${tw`bg-red-300`}
  width: 100vw;
  height: 500px;
  position: fixed;
`;

const Header = styled.h1`
  ${tw`text-5xl lg:text-6xl`}
  color: #fff;
`;

const Component = () => {
  return (
    <HeaderContainer>
      <Header>Greetings from Tailwind & Styled Components!</Header>
    </HeaderContainer>
  );
};
```
