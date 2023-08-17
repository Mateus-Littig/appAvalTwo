import React from 'react';
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

export function SignUp() {
  const navigation = useNavigation();

  const schema = yup.object({
    username: yup.string().min(6, '* Seu nome deve conter pelo menos 6 digitos').required('* Informe seu nome completo'),
    email: yup.string().email('* Email inválido').required('* Informe seu email'),
    password: yup.string().min(6, '* A senha deve conter pelo menos 6 digitos').required('* Informe sua senha'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  async function onSubmit(input) {
    try {
      obj = {
        username: input.username,
        email: input.email,
        password: input.password,
      };
      const response = await api.post('/auth/local/register', obj);
      navigation.navigate('Login');
    } catch (error) {
    }
  }

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Styled.Container>
      <Header title="Sign up" />

      <Styled.ViewInput>
        <Input
          title="Name"
          name="username"
          placeholder="Your username"
          control={control}
          errors={errors}
        />

        <Input
          title="Email"
          name="email"
          placeholder="mateus@email.com"
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
        <Styled.TextFooter>Already have an account?</Styled.TextFooter>
        <TouchableOpacity onPress={handleLogin}>
          <Image source={require('../../../assets/Icons/arrowRight.png')} />
        </TouchableOpacity>
      </Styled.Footer>

      <Styled.ViewButton>
        <Button
          name="SIGN UP"
          Bck="#DB3022"
          Color="#FFF"
          onPress={handleSubmit(onSubmit)}
        />
      </Styled.ViewButton>

    </Styled.Container>
  );
}
