import React from 'react-native';
import * as Styled from './styles';

export function Button({
  name, onPress, Bck, Border, Color,
}) {
  return (
    <Styled.TouchableContainer onPress={onPress} Bck={Bck} Border={Border}>
      <Styled.TouchableText Color={Color}>{name}</Styled.TouchableText>
    </Styled.TouchableContainer>
  );
}
