import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Styled from './styles';

export function HeaderButton({
  LeftIcon, iconName, iconSize, name, onPress, RightIcon,
  iconNameR, iconSizeR
}) {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      {LeftIcon && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name={iconName}
            size={iconSize}
            color="#2D2D2D"
          />
        </TouchableOpacity>
      )}
      <Styled.ViewText>
        <Styled.Title>{name}</Styled.Title>
      </Styled.ViewText>
      {RightIcon && (
        <TouchableOpacity onPress={onPress}>
          <Ionicons
            name={iconNameR}
            size={iconSizeR}
            color="#2D2D2D"
          />
        </TouchableOpacity>
      )}
    </Styled.Container>
  );
}
