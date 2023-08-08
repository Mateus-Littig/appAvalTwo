import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Styled from './styles';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/HeaderAuth';
import { Input } from '../../../components/Input';
import api from '../../../services/api';

export function Login() {
  const navigation = useNavigation();

  const schema = yup.object({
    identifier: yup.string().email('* Email inválido').required('* Informe seu email'),
    password: yup.string().min(6, '* A senha deve conter pelo menos 6 digitos').required('* Informe sua senha'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  async function onSubmit(input) {
    try {
      obj = {
        identifier: input.email,
        password: input.password,
      };
      const response = await api.post('/auth/local', obj);
      // navigation.navigate('TabRoutes');
    } catch (error) {
    }
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Styled.Container>
      <Header title="Login" />

      <Styled.ViewInput>

        <Input
          title="Email"
          name="identifier"
          placeholder="mateus@email.com"
          control={control}
          errors={errors}
        />

        <Input
          title="Password"
          name="password"
          placeholder="Password"
          control={control}
          errors={errors}
        />

      </Styled.ViewInput>

      <Styled.Footer>
        <Styled.TextFooter>Forgot your password?</Styled.TextFooter>
        <TouchableOpacity onPress={handleSignUp}>
          <Image source={require('../../../assets/Icons/arrowRight.png')}/>
        </TouchableOpacity>
      </Styled.Footer>

      <Styled.ViewButton>
        <Button
          name="LOGIN"
          Bck="#DB3022"
          Color="#FFF"
          onPress={handleSubmit(onSubmit)}
        />
      </Styled.ViewButton>

    </Styled.Container>
  );
}
