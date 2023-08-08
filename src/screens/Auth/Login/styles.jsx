import styled from 'styled-components/native';

export const Container = styled.View`
`;
export const ViewInput = styled.View`
  margin-top: 50px;
`;
export const Footer = styled.View`
  width: 95%;
  flex-direction: row;
  margin-top: 20px;
  justify-content: flex-end;
`;
export const TextFooter = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const ViewButton = styled.View`
  margin-top: 20px;
`;
