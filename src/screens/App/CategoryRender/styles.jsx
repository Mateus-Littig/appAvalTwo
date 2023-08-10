import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
`;
export const ViewTitle = styled.View`
  width: 95%;
  top: 20px;
  margin: auto;
`;
export const ViewCateg = styled.View`
  width: 100px;
  min-height: 30px;
  border-radius: 30px;
  margin-left: 30px;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.Black};
`;
export const TextCateg = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.White};
`;
export const Text = styled.Text`
  width: 82%;
  margin: auto;
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.Black};
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
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const Categ = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.Gray};
  top: 3px;
`;
export const Icon = styled.Image`
  top: 3px;
`;
export const Price = styled.Text`
  font-size: 14px;
  font-weight: bold;
  top: 5px;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const ViewHeart = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  align-items: center;
  top: 80px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.Light};
`;
