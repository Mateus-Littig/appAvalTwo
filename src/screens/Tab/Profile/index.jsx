import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Styled from './styles';
import { HeaderButton } from '../../../components/HeaderButton'
import { Title } from '../../../components/Title'
import { ButtonUser } from '../../../components/ButtonUser'
import { Button } from '../../../components/Button';

export default function Profile() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('Token');
      console.log('Logout realizado com sucesso.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
    }
  };

  return (
    <SafeAreaView>

      <Styled.Container>

        <HeaderButton 
          RightIcon
          iconNameR="search"
          iconSizeR={26}
        />

        <Title name="My profile" />

        <Styled.ContentUser>
          <Styled.Avatar source={{ uri: 'https://github.com/Mateus-littig.png' }} />
          <Styled.ViewUser>
            <Styled.User>Mateus Littig</Styled.User>
            <Styled.Email>mateus.littig@gmail.com</Styled.Email>
          </Styled.ViewUser>
        </Styled.ContentUser>

        <ButtonUser 
          title="My orders"
          subTitle="Already have 12 orders"
        />
        <ButtonUser 
          title="Shipping addresses"
          subTitle="3 ddresses"
        />
        <ButtonUser 
          title="Payment methods"
          subTitle="Visa **34"
        />
        <ButtonUser 
          title="Promocodes"
          subTitle="You have specias promocodes"
        />
        <ButtonUser 
          title="My reviews"
          subTitle="Reviews for 4 items"
        />

        <Button
          name="Log Out"
          Bck="#DB3022"
          Color="#FFF"
          onPress={handleLogout}
        />

      </Styled.Container>

    </SafeAreaView>
  );
}
