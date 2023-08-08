import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation  } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';
import * as Styled from './styles';
import { HeaderButton } from '../../../components/HeaderButton'
import { Button } from '../../../components/Button';
import api from '../../../services/api';

export function DetailProduct() {
  const navigation = useNavigation();
  const route = useRoute();
  const [product, setProduct] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [categ, setCateg] = useState([]);
  const [qtdProd, setQtdProd] = useState(1);
  const [price, setPrice] = useState(1);

  useEffect(() => {
    getProductId();
  }, []);

  async function getProductId() {
    try {
      const response = await api.get(`/produtos/${route?.params?.id}/?populate=*`);
      setProduct(response?.data.data.attributes);
      setPrice(response?.data.data.attributes.sale);
      setCateg(response?.data.data.attributes.categoria?.data.attributes.name);
      const images = response?.data.data.attributes.image?.data.map(item => item.attributes.url);
      setImageUrls(images);
      // console.log(response.data.data.attributes.categoria?.data.attributes.name);
    } catch (error) {
      console.log('Erro ao buscar produto', error);
    }
  }

  const handleMore = () => {
    setQtdProd(qtdProd + 1);
  };
  const handleLess = () => {
    if (qtdProd >= 2) {
      setQtdProd(qtdProd - 1);
    }
  };
  const result = price * qtdProd;
  const formattedResult = result.toFixed(2);
  // formatando o resultado para que tenha apenas dois dígitos após a vírgula

  const handleAddToCart = async () => {
    try {
      // Obter dados já existentes no AsyncStorage (se houver)
      const cartItems = await AsyncStorage.getItem('cartItems');
      const existingItems = cartItems ? JSON.parse(cartItems) : [];
      const existingItemIndex = existingItems.findIndex(item => item.product === product.name);
      // Adicionar o novo item ao array existente
      if (existingItemIndex !== -1) {
        // Se o produto já existir, atualize a quantidade e o valor
        existingItems[existingItemIndex].quantity += qtdProd;
        existingItems[existingItemIndex].totalValue = (parseFloat(existingItems[existingItemIndex].totalValue) + parseFloat(formattedResult)).toFixed(2);
      } else {
        // Se o produto não existir, adicione como um novo item
        const newItem = {
          product: product.name,
          quantity: qtdProd,
          category: categ,
          image: imageUrls,
          value: price,
          totalValue: formattedResult,
        };
        existingItems.push(newItem);
      }
      // Armazenar o array atualizado no AsyncStorage
      await AsyncStorage.setItem('cartItems', JSON.stringify(existingItems));
      navigation.navigate('Bag');
    } catch (error) {
      console.log('Erro ao adicionar ao carrinho', error);
    }
  };

  function renderItem(item) {
    // console.log(item);
    return (
      <Styled.ContentHeader>
        <Styled.Img source={{ uri: `http://192.168.1.38:1337${item?.item}` }} />
      </Styled.ContentHeader>
    )
  }
 

  

  return (
    <SafeAreaView>
      <Styled.Container>

        <HeaderButton
          name={product?.categoria?.data.attributes.name}
          LeftIcon
          iconName="chevron-left"
          iconSize={30}
          RightIcon
          iconNameR="share-social"
          iconSizeR={26}
        />

        <Carousel 
          data={imageUrls}
          sliderWidth={350}
          itemWidth={270}
          renderItem={renderItem}
        />

        <Styled.ContentIcons>
          <Styled.ViewQuantity>
            <Styled.ViewIcones>
              <TouchableOpacity onPress={handleLess}>
                <Styled.ViewIcon>
                  <Feather
                    name='minus'
                    size={24}
                    color={'#A3A3A3'}
                  />
                </Styled.ViewIcon>
              </TouchableOpacity>
              <Styled.Value>{qtdProd}</Styled.Value>
              <TouchableOpacity onPress={handleMore}>
                <Styled.ViewIcon>
                  <Feather 
                    name='plus'
                    size={24}
                    color={'#A3A3A3'}
                  />
                </Styled.ViewIcon>
              </TouchableOpacity>
            </Styled.ViewIcones>
            <TouchableOpacity>
              <Styled.ViewHeart>
                <Ionicons 
                  name='heart-outline'
                  size={20}
                />
              </Styled.ViewHeart>
            </TouchableOpacity>
          </Styled.ViewQuantity>
        </Styled.ContentIcons>

        <Styled.ViewTitle>
          <Styled.ViewProduct>
            <Styled.Title>{product?.name}</Styled.Title>
            <Styled.Sub>{product?.categoria?.data.attributes.name}</Styled.Sub>
            <Styled.Stars source={require('../../../assets/stars.png')} />
          </Styled.ViewProduct>
          <Styled.ViewSub>
            <Styled.Price>
              R$
              {' '}
              {formattedResult}
            </Styled.Price>
          </Styled.ViewSub>
        </Styled.ViewTitle>

        <Styled.ViewDesc>
          <Styled.Desc>{product?.description}</Styled.Desc>
        </Styled.ViewDesc>

        <Styled.ViewButton>
          <Button
            name="ADD TO CART"
            Bck="#DB3022"
            Color="#FFF"
            onPress={handleAddToCart}
          />
        </Styled.ViewButton>

      </Styled.Container>
    </SafeAreaView>
  );
}
