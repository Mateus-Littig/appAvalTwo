import React from 'react';
import { SafeAreaView } from 'react-native';
import { HeaderButton } from '../../../components/HeaderButton';
import { CardAllProd } from '../../../components/CardAllProd';
import * as Styled from './styles';

export function AllProducts() {
  return (

    <SafeAreaView>
      <Styled.Container>

        <HeaderButton
          name="All Products"
          LeftIcon
          iconName="chevron-left"
          iconSize={30}
          RightIcon
          iconNameR="search"
          iconSizeR={26}
        />

        <CardAllProd />

      </Styled.Container>
    </SafeAreaView>
  );
}
