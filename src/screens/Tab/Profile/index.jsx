import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import * as Styled from './styles';
import { HeaderButton } from '../../../components/HeaderButton'
import { Title } from '../../../components/Title'
import { ButtonUser } from '../../../components/ButtonUser'
import { Button } from '../../../components/Button';
import api from '../../../services/api';

export default function Profile() {
  const [profile, setProfile] = useState([])

  async function getProfile() {
    const response = await api.get('/users/?populate=*');
    setProfile(response.data);
  }

  useEffect(() => {
    getProfile();
  }, []);

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
            {/* <Styled.User>{profile[0].username}</Styled.User> */}
            {/* <Styled.Email>{profile[0].email}</Styled.Email> */}
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
        />

      </Styled.Container>

    </SafeAreaView>
  );
}
