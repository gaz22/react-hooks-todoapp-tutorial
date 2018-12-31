import React, { Component } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:60px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 2px 0 rgba(0,0,0,0.2);
  background-color: white;
  z-index: 999999;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
      </Container>
    );
  };
}
