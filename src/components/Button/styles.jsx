import styled from 'styled-components/native';

export const TouchableContainer = styled.TouchableOpacity`
  width: 90%;
  height: 48px;
  margin: auto;
  margin-top: 20px;
  background-color: ${(props) => props.Bck};
  border: ${(props) => props.Border || 'transparent'};
  border-width: 2px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  bottom: 15px;
`;

export const TouchableText = styled.Text`
  color:${(props) => props.Color || '#FFF'};
  font-size: 17px;
  font-weight: 500;
`;
