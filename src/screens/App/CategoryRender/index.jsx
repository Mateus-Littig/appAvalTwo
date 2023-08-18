import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Title } from '../../../components/Title';
import { HeaderButton } from '../../../components/HeaderButton';
import api from '../../../services/api';
import * as Styled from './styles';

export function CategoryRender() {
  const route = useRoute();
  const navigation = useNavigation();

  const [categ, setCateg] = useState([]);
  const [produtos, setProdutos] = useState([]);

  function handleGoDetail(item) {
    navigation.navigate('DetailProduct', { id: item });
  }

  useEffect(() => {
    getCategId();
    if (categ.attributes?.name.length > 0) {
      getProdutos();
    }
  }, [categ]);

  async function getCategId() {
    try {
      const response = await api.get(`/categorias/${route?.params?.id}/?populate=*`);
      setCateg(response.data.data);
    } catch (error) {
      console.log('Erro ao buscar produto', error);
    }
  }

  async function getProdutos() {
    try {
      const response = await api.get(`/produtos/?populate=*&filters[categoria][name][$contains]=${categ?.attributes?.name}`);
      setProdutos(response.data.data);
    } catch (error) {
      console.log('Erro ao obter os produtos:', error);
    }
  }

  return (
    <SafeAreaView>

      <Styled.Container>

        <HeaderButton
          LeftIcon
          iconName="chevron-left"
          iconSize={30}
          RightIcon
          iconNameR="search"
          iconSizeR={26}
        />

        <Styled.ViewTitle>
          <Title name={categ.attributes?.name} />
        </Styled.ViewTitle>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Styled.ViewCateg>
            <Styled.TextCateg>{categ.attributes?.name}</Styled.TextCateg>
          </Styled.ViewCateg>
        </TouchableOpacity>

        {produtos.length === 0 ? (
          <Styled.Text>Não existe produtos para esta categoria!</Styled.Text>
        ) : (
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Styled.Card>
                <Styled.ViewImg>
                  <TouchableOpacity onPress={() => handleGoDetail(item.id)}>
                    <Styled.Image source={{ uri: `http://192.168.1.38:1337${item.attributes.image.data[0].attributes.url}` }} />
                  </TouchableOpacity>
                </Styled.ViewImg>
                <Styled.ViewText>
                  <Styled.Name>{item.attributes.name.slice(0, 10)}</Styled.Name>
                  <Styled.Categ>{categ.attributes?.name}</Styled.Categ>
                  <Styled.Icon source={require('../../../assets/stars.png')} />
                  <Styled.Price>
                    R$
                    {item.attributes.sale}
                  </Styled.Price>
                </Styled.ViewText>
                <TouchableOpacity>
                  <Styled.ViewHeart>
                    <Ionicons
                      name="heart-outline"
                      size={20}
                    />
                  </Styled.ViewHeart>
                </TouchableOpacity>
              </Styled.Card>
            )}
          />
        )}
      </Styled.Container>
    </SafeAreaView>
  );
}
