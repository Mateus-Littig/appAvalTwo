import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
`;
export const ContentUser = styled.View`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  flex-direction: row;
`;
export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;
export const ViewUser = styled.View`
  margin-left: 20px;
`;
export const User = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const Email = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.Gray};
`;
