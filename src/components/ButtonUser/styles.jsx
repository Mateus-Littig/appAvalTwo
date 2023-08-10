import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 72px;
  flex-direction: row;
  margin: auto;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.View`
  width: 90%;
  margin: auto;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.Gray};
`;
