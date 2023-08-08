import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { HeaderButton } from '../../../components/HeaderButton';
import { Button } from '../../../components/Button';
import api from '../../../services/api';

export default function Shop() {
  const navigation = useNavigation();

  function handleCategRender(item) {
    navigation.navigate('CategoryRender', { id: item });
  }

  const [category, setCategory] = useState([]);

  async function getCategoria() {
    try {
      const response = await api.get('/categorias/?populate=*');
      const category = response.data.data;
      setCategory(category);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategoria();
  }, []);

  return (
    <SafeAreaView>
      <Styled.Container>
        <HeaderButton
          name="Categories"
          LeftIcon
          iconName="chevron-left"
          iconSize={30}
          RightIcon
          iconNameR="search"
          iconSizeR={26}
        />

        <Styled.ViewButton>
          <Button
            name="VIEW ALL ITEMS"
            Bck="#DB3022"
            Color="#FFF"
          />
        </Styled.ViewButton>

        <Styled.TextChoose>Choose category</Styled.TextChoose>

        <FlatList
          data={category}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <Styled.Button
                onPress={() => handleCategRender(item.id)}
              >
                <Styled.Title>{item?.attributes.name}</Styled.Title>
              </Styled.Button>
              <Styled.Line />
            </>
          )}
        />
      </Styled.Container>
    </SafeAreaView>
  );
}
