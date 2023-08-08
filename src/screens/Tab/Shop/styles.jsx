import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;
export const ViewButton = styled.View`
  margin-top: 20px;
`;
export const TextChoose = styled.Text`
  width: 90%;
  margin: auto;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.Gray};
  margin-bottom: 20px;
`;
export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 47px;
  justify-content: center;
  margin: auto;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.LightGray};
`;
