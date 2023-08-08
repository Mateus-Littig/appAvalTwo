import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import * as Styled from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Title } from '../../../components/Title'
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../../services/api';
import { HeaderButton } from '../../../components/HeaderButton';

export function CategoryRender() {
  const route = useRoute();
  const navigation = useNavigation();

  const [categ, setCateg] = useState([]);
  const [valid, setValid] = useState(true);
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
      if (response.data.data.length > 0) {
        setValid(false)
      }
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
      {valid ? (
        <>
          <Styled.Text>Não existe produtos para esta categoria!</Styled.Text>
        </>
        ) : (
        <>
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id} // ao passar o index, estou criando uma chave exclusiva para cada produto.
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
                      name='heart-outline'
                      size={20}
                    />
                  </Styled.ViewHeart>
                </TouchableOpacity>
              </Styled.Card>
            )}
          />
        </>
      )}
      </Styled.Container>
    </SafeAreaView>
  );
}
