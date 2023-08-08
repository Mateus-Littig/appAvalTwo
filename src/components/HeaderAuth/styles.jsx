import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 20px;
  top: 20px;
`;
export const ContentHeader = styled.TouchableOpacity`
  position: absolute;
  padding: 10px 16px;
`;
export const Title = styled.Text`
  font-size: 35px;
  font-weight: 600;
  margin-top: 55px;
  color: ${({ theme }) => theme.COLORS.Black};
;
`;
