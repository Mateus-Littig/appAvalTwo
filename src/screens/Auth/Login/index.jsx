import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';
import * as Styled from './styles';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/HeaderAuth';
import { Input } from '../../../components/Input';
import api from '../../../services/api';

export function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    handleToken();
  }, []);

  async function handleToken() {
    const loadToken = await AsyncStorage.getItem('Token');
    if (loadToken) {
      navigation.navigate('TabRoutes');
    } else {
      navigation.navigate('Login');
    }
  }

  const schema = yup.object({
    identifier: yup.string().min(6, '* Seu nome deve conter pelo menos 6 digitos').required('* Informe seu nome completo'),
    password: yup.string().min(6, '* A senha deve conter pelo menos 6 digitos').required('* Informe sua senha'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm(
    {
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  async function onSubmit(input) {
   try {
      obj = {
        identifier: input.identifier,
        password: input.password,
      };
      const response = await api.post('/auth/local', obj);
      console.log('ola', response.data.user.id);
      const token = response.data.jwt;
      const ID = JSON.stringify(response.data.user.id);
      console.log(obj);
      await AsyncStorage.setItem('ID', ID);
      await AsyncStorage.setItem('Token', token);
      navigation.navigate('TabRoutes');
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Styled.Container>
      <Header title="Login" />

      {/* <ActivityIndicator size="large" color="#2e39d4" /> */}

      <Styled.ViewInput>

        <Input
          title="Username"
          name="identifier"
          placeholder="Your username"
          control={control}
          errors={errors}
        />

        <Input
          title="Password"
          name="password"
          placeholder="Password"
          RightIcon
          iconSize={24}
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
