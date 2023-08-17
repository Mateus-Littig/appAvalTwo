import React from 'react';
import * as Styled from './styles';

export function Title({
  name,
}) {
  return (
    <Styled.Container>
      <Styled.Title>{name}</Styled.Title>
    </Styled.Container>
  );
}
