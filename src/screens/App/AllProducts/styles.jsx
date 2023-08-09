import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
`;
export const Card = styled.View`
  width: 150px;
  height: 260px;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 20px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.Light};
`;
export const Image = styled.Image`
  width: 150px;
  height: 157px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const Icon = styled.Image`
  margin-top: 5px;
  margin-left: 5px;
`;
export const ViewHeart = styled.View`
  width: 36px;
  height: 36px;
  margin-left: auto;
  bottom: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.Light};
`;
export const Name = styled.Text`
  width: 90%;
  font-size: 18px;
  font-weight: 600;
  margin: auto;
  bottom: 7px;
  color: ${({ theme }) => theme.COLORS.Black};
`;
export const ViewAdd = styled.View`
  width: 85%;
  margin: auto;
  flex-direction: row;
  gap: 5px;
`;
export const Price = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.Gray};
  text-decoration-line: line-through;
`;
export const Sale = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.RedPrimary};
`;
