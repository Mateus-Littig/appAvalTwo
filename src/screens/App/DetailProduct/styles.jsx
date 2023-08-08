import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
`;
export const ContentHeader = styled.View`
  margin-top: 20px;
`;
export const Img = styled.Image`
  width: 275px;
  height: 413px;
`;
export const ContentIcons = styled.View`
`;
export const ViewQuantity = styled.View`
  width: 90%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  border-radius: 20px;
`;
export const ViewIcones = styled.View`
  width: 35%;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  justify-content: space-between;
`;
export const ViewIcon = styled.View`
  width: 38px;
  height: 38px;
  margin-left: auto;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.LightGray};
`;
export const Value = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
export const ViewHeart = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.LightGray};
`;
export const ViewTitle = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
export const ViewProduct = styled.View`
  width: 62%;
  margin-left: auto;
  margin-right: auto;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const Sub = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const Stars = styled.Image`
  margin-top: 5px;
`;
export const ViewSub = styled.View`
  width: 40%;
`;
export const Price = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const ViewDesc = styled.View`
  margin-top: 20px;
`;
export const Desc = styled.Text`
  width: 90%;
  font-size: 17px;
  font-weight: 500;
  margin: auto;
  color: gray;
`;
export const ViewButton = styled.View`
  margin-top: 15px;
`;
