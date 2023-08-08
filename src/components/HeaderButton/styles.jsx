import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
export const ViewText = styled.View`
  width: 65%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.Black};
`;
