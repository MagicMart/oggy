import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  } */

    button {
    font-size: 2rem;
    text-align: center;
    color: black;
    outline: none;
    padding: 0.6rem 1rem;
    background-color: rgb(255, 178, 56);
    border-radius: 6px;
    cursor: pointer;
    letter-spacing: 1.5px;
    box-shadow: 0 8px #999;
    &:hover {
        background-color: bisque;
    }
    &:active {
        background-color: #3e8e41;
        color: white;
        box-shadow: 0 3px #666;
        transform: translateY(5px);
    }
  }

  /* button:hover {
    background-color: bisque;
    cursor: pointer;
  } */

  /* button:active {
    background-color: #3e8e41;
    color: white;
    box-shadow: 0 3px #666;
    transform: translateY(5px);
  } */

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`

export default GlobalStyles
