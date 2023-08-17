import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';

export function Header(props) {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.ContentHeader onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/Icons/arrowLeft.png')} />
      </Styled.ContentHeader>
      <Styled.Title>{props?.title}</Styled.Title>
    </Styled.Container>
  );
}
