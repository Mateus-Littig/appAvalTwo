import React from 'react';
import { 
  ScrollView, 
  FlatList, 
  TouchableOpacity, 
  StatusBar, 
  SafeAreaView 
} from 'react-native';
import * as Styled from './styles';
import { CardProduct } from '../../../components/CardProduct';

export default function Home() {

  return (
    <SafeAreaView>
      <Styled.Container>
        <StatusBar 
          translucent
          backgroundColor="transparent"
        />
        <Styled.Banner source={require('../../../assets/bannerHome.png')}/>
        <Styled.HeaderText>Street clothes</Styled.HeaderText>

        <ScrollView showsVerticalScrollIndicator={false}>

          <Styled.Body>
            <Styled.ViewSale>
              <Styled.Sale>Sale</Styled.Sale>
              <Styled.Sub>Super summer sale</Styled.Sub>
            </Styled.ViewSale>
            <TouchableOpacity>
              <Styled.ViewAll>View all</Styled.ViewAll>
            </TouchableOpacity>
          </Styled.Body>

          <CardProduct />

          <Styled.Body>
            <Styled.ViewSale>
              <Styled.Sale>New</Styled.Sale>
              <Styled.Sub>You've never seen it before!</Styled.Sub>
            </Styled.ViewSale>
            <TouchableOpacity>
              <Styled.ViewAll>View all</Styled.ViewAll>
            </TouchableOpacity>
          </Styled.Body>

          <CardProduct />

        </ScrollView>
        
      </Styled.Container>
    </SafeAreaView>
  );
}
