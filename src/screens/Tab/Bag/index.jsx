import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Styled from './styles';
import { Title } from '../../../components/Title';
import { HeaderButton } from '../../../components/HeaderButton';
import { Button } from '../../../components/Button';

export default function Bag() {
  const [cartItems, setCartItems] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchCartItems();
    }, [])
  );

  async function fetchCartItems() {
    try {
      const response = await AsyncStorage.getItem('cartItems');
      if (response) {
        setCartItems(JSON.parse(response));
      }
      console.log(response);
    } catch (error) {
      console.log('Erro ao buscar itens do carrinho', error)
    }
  }

  const handleRemoveItem = async (index) => {
    try {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      // remove o item na posição index do cartItems
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      // atualizando o AsyncStorage
    } catch (error) {
      console.log('Error ao remover item do carrinho', error);
    }
  };

  const handleMore = async (index) => {
    const upCartItems = [...cartItems];
    upCartItems[index].quantity += 1;
    upCartItems[index].totalValue = (upCartItems[index].quantity * upCartItems[index].value).toFixed(2);
    setCartItems(upCartItems)
    await AsyncStorage.setItem('cartItems', JSON.stringify(upCartItems));
  };

  const handleLess = async (index) => {
    const upCartItems = [...cartItems];
    if (upCartItems[index].quantity > 1) {
      upCartItems[index].quantity -= 1;
      upCartItems[index].totalValue = (upCartItems[index].quantity * upCartItems[index].value).toFixed(2);
      setCartItems(upCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(upCartItems));
    }
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + parseFloat(item.totalValue), 0).toFixed(2);


  return (
    <Styled.Container>
      <HeaderButton 
        RightIcon
        iconNameR="search"
        iconSizeR={26}
      />
      <Title name="My Bag"/>

      <ScrollView>
        {cartItems.map((item, index) => (
          <Styled.Card key={index}>
            <Styled.ViewImg>
              <TouchableOpacity>
                <Styled.Image source={{ uri: `http://192.168.1.38:1337${item.image[0]}` }} />
              </TouchableOpacity>
            </Styled.ViewImg>
            <Styled.ViewText>
              <Styled.Name>{item.product.slice(0, 15)}</Styled.Name>
              <Styled.Categ>{item.category}</Styled.Categ>
              <Styled.ContentIcons>
                <Styled.ViewQuantity>
                  <Styled.ViewIcones>
                    <TouchableOpacity onPress={() => handleLess(index)}>
                      <Styled.ViewIcon>
                        <Feather
                          name='minus'
                          size={24}
                          color={'#A3A3A3'}
                        />
                      </Styled.ViewIcon>
                    </TouchableOpacity>
                    <Styled.Qtd>{item.quantity}</Styled.Qtd>
                    <TouchableOpacity onPress={() => handleMore(index)}>
                      <Styled.ViewIcon>
                        <Feather 
                          name='plus'
                          size={24}
                          color={'#A3A3A3'}
                        />
                      </Styled.ViewIcon>
                    </TouchableOpacity>
                  </Styled.ViewIcones>
                </Styled.ViewQuantity>
              </Styled.ContentIcons>
            </Styled.ViewText>

            <TouchableOpacity onPress={() => handleRemoveItem(index)}>
              <Styled.Icon>
                <Feather
                  name='trash-2'
                  size={24}
                  color={'#FF4D4F'}
                />
              </Styled.Icon>
            </TouchableOpacity>

            <Styled.Price>
              R$
              {item.totalValue}
            </Styled.Price>
          </Styled.Card>
        ))}
      </ScrollView>
        
      <Styled.ViewInput>
        <Styled.Input
          placeholder="Enter your promo code"
        />
        <Styled.ContentIcon>
          <MaterialIcons
            name='arrow-circle-right'
            size={42}
            color={'#222222'}
          />
        </Styled.ContentIcon>
      </Styled.ViewInput>

      <Styled.ViewAmount>
        <Styled.Total>Total amount:</Styled.Total>
        <Styled.Amount>R$ {totalAmount}</Styled.Amount>
      </Styled.ViewAmount>
      
      <Styled.Footer>
        <Button
          name="CHECK OUT"
          Bck="#DB3022"
          Color="#FFF"
        />
      </Styled.Footer>

    </Styled.Container>
  );
}
