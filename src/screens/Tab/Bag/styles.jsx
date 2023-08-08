import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;
export const Card = styled.View`
  width: 90%;
  height: 104px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  border-radius: 20px;
  padding: 10px;
  margin-top: 26px;
  margin-bottom: 10px;
`;
export const ViewImg = styled.View`
  width: 115px;
  height: 104px;
`;
export const Image = styled.Image`
  width: 107px;
  height: 104px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;
export const ViewText = styled.View`
  margin-right: auto;
`;
export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const Categ = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.Gray};
  top: 3px;
`;
export const ContentIcons = styled.View`
`;
export const ViewQuantity = styled.View`
  width: 90%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  justify-content: space-between;
  border-radius: 20px;
`;
export const ViewIcones = styled.View`
  width: 38%;
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
export const Qtd = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
export const Icon = styled.View`
  left: 80px;
`;
export const Price = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-top: auto;
  top: 5px;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const ViewInput = styled.View`
  width: 85%;
  height: 40px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.LightGray};
`;
export const ContentIcon = styled.View`
`;
export const Input = styled.TextInput`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;
export const ViewAmount = styled.View`
  width: 85%;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  flex-direction: row;
`;
export const Total = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.Gray};
  top: 3px;
`;
export const Amount = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
  top: 5px;
  color: ${({ theme }) => theme.COLORS.Black};  
`;
export const Footer = styled.View`
  margin-top: 20px;
`;
