import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import api from '../../services/api';
import * as Styled from './styles';

export function CardAllProd() {
  const navigation = useNavigation();
  const theme = useTheme();
  const productsPerLoad = 10;
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsToShow, setProductsToShow] = useState(10);

  function handleGoDetail(item) {
    navigation.navigate('DetailProduct', { id: item });
  }

  async function getProduto() {
    const response = await api.get('/produtos/?populate=*&articles?pagination[page]=1&pagination[pageSize]=30');
    setProdutos(response.data.data);
  }

  async function loadMoreProducts() {
    setLoading(true);
    const moreResponse = await api.get('/produtos/?populate=*&articles?pagination[page]=1&pagination[pageSize]=30');
    const moreProducts = moreResponse.data.data;

    // Gere chaves únicas para os novos produtos
    const newProducts = moreProducts.map((product, index) => ({
      ...product,
      id: `${product.id}_${index}`, // Crie uma chave única com base no ID do produto e no índice
    }));

    setProdutos((prevProducts) => [...prevProducts, ...newProducts]);
    setProductsToShow((prevProductsToShow) => prevProductsToShow + productsPerLoad);
    setLoading(false);
  }

  useEffect(() => {
    getProduto();
  }, []);

  return (

    <Styled.Container>

      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        showsVerticalScrollIndicator={false}
        data={produtos.slice(0, productsToShow)}
        keyExtractor={(item) => item.id}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.1} // quando chega no final da flatlist a função loadMore é chamada
          // atualiza o estado do loading e exibe o activityIndicator, buscando mais 10 produtos na API
          // definida no productsPerLoad
        renderItem={({ item }) => (
          <Styled.Card>
            <TouchableOpacity onPress={() => handleGoDetail(item.id)}>
              <Styled.Image source={{ uri: `http://192.168.1.38:1337${item.attributes.image.data[0].attributes.url}` }} />
            </TouchableOpacity>
            <Styled.Icon source={require('../../assets/stars.png')} />
            <TouchableOpacity>
              <Styled.ViewHeart>
                <Ionicons
                  name="heart-outline"
                  size={20}
                />
              </Styled.ViewHeart>
            </TouchableOpacity>
            <Styled.Name>{item.attributes.name.slice(0, 10)}</Styled.Name>
            <Styled.ViewAdd>
              <Styled.Price>
                R$
                {item.attributes.value}
              </Styled.Price>
              <Styled.Sale>
                R$
                {item.attributes.sale}
              </Styled.Sale>
            </Styled.ViewAdd>
          </Styled.Card>
        )}
      />
      {loading && <ActivityIndicator size="large" color={theme.COLORS.Blue} />}
    </Styled.Container>
  );
}
