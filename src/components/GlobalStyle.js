import { createGlobalStyle } from "styled-components";
import token from "./DesignToken";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
  }
  body {
  margin: 0;
  padding: 0;
  font-family: century-gothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  font-size: 16px;
  color: white;
  background-color: ${token.colours.primary};
  }
  h1 {}
  small {
    text-transform: uppercase;
    font-weight: 900;
    color: ${token.colours.accent};
  }

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
`;

export default GlobalStyle;
