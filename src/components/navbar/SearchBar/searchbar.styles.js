import styled, { css, keyframes } from "styled-components";
import SearchIcon from "./search";
import ArrowRightIcon from "./arrowRight";

export const Container = styled.form`
  position: relative;  
  width: 50px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 3px solid #330D71;
  padding: 3px;
  background: #330D71;
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-self:center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 30%;
      -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      ${'' /* border: 2px solid rgba(0, 0, 0, 0.74); */}

      @media (max-width: 768px) {
        width: 100%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;  
  top: 5;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1rem;
  width: 1rem;
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
  
`;

export const SearchButton = styled.button`
  border: none;
  color:#393e46;
  background-color:transparent;
  align-self: flex-end;
  cursor: pointer;
  ${'' /* height: 1rem;
  width: 1rem; */}
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear; 
`;
