import React from 'react';
import styled from 'styled-components';
import CardContainer from '../CardContainer';

const Container = styled.div`
  background-color: #141313;
  `
export default function Main() {
  return (
    <Container className="content">
      <CardContainer/>
    </Container>
  )
}
