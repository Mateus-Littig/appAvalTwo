import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import * as Styled from './styles';

export function ButtonUser({
  title, subTitle
}) {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>
      </Styled.Content>
      <Feather
        name="chevron-right"
        size={26}
        color="#A3A3A3"
      />
    </Styled.Container>
  );
}
