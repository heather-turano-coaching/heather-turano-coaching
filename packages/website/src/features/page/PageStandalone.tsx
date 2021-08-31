import styled from "styled-components";

export const PageStandalone = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;
