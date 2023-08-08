import styled from 'styled-components/native';

export const Container = styled.View`
`;
export const Banner = styled.Image`
  width: 100%;
`;
export const HeaderText = styled.Text`
  width: 90%;
  margin: auto;
  position: relative;
  font-size: 38px;
  color: ${({ theme }) => theme.COLORS.White};
  font-weight: bold;
  bottom: 80px;
`;
export const Body = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const ViewSale = styled.View`
  width: 55%;
  flex-direction: column;
  justify-content: space-between;
`;
export const Sale = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const Sub = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.Gray};
`;
export const ViewAll = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.Black};
`;
