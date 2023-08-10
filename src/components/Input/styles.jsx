import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;
export const TitleInput = styled.Text`
  width: 75%;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  color:  ${({ theme }) => theme.COLORS.Gray};
  font-weight: bold;
`;
export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const InputText = styled.TextInput`
  width: 90%;
  flex-direction: row;
  background-color: #E0E0E0;
  height: 64px;
  border-radius: 10px;
  margin-top: 5px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  justify-content: space-around;
`;
export const Button = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 20px;
`;
export const LabelError = styled.Text`
  width: 90%;
  font-size: 12px;
  color: red;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;
