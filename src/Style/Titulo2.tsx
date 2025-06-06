import React from 'react';
import styled from 'styled-components';

const Loader2 = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span>M</span>
        <span>I</span>
        <span>C</span>
        <span>H</span>
        <span>A</span>
        <span>E</span>
        <span>L</span>
      </div>
      <div className="loader">
        <span>J</span>
        <span>A</span>
        <span>C</span>
        <span>K</span>
        <span>S</span>
        <span>O</span>
        <span>N</span>
      </div>
    </StyledWrapper>
  );
}
//Michael Jackson
const StyledWrapper = styled.div`
  .loader {
    -webkit-perspective: 700px;
    perspective: 700px;
    background: red;
    padding: 10px 20px;
  }

  .loader>span {
    font-size: 20px;
    font-family: "franklin gothic medium",sans-serif;
    display: inline-block;
    animation: flip 2.6s infinite linear;
    transform-origin: 0 70%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }

  @keyframes flip {
    35% {
      transform: rotatex(360deg);
    }

    100% {
      transform: rotatex(360deg);
    }
  }

  .loader>span:nth-child(even) {
    color: white;
  }

  .loader>span:nth-child(2) {
    animation-delay: 0.3s;
  }

  .loader>span:nth-child(3) {
    animation-delay: 0.6s;
  }

  .loader>span:nth-child(4) {
    animation-delay: 0.9s;
  }

  .loader>span:nth-child(5) {
    animation-delay: 1.2s;
  }

  .loader>span:nth-child(6) {
    animation-delay: 1.5s
  }

  .loader>span:nth-child(7) {
    animation-delay: 1.8s
  }`;

export default Loader2;