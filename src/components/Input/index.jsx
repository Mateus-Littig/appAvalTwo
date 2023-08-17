import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Styled from './styles';

export function Input({
  title, placeholder, inputRef, control, errors,
  name, onSubmit, RightIcon, iconSize,
}) {
  const [secury, setSecury] = useState(false);

  return (
    <Styled.Container>

      <Styled.TitleInput>{title}</Styled.TitleInput>

      <Styled.ViewInput>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Styled.InputText
              placeholder={placeholder}
              placeholderTextColor="#828282"
              secureTextEntry={secury}
              onChangeText={onChange}
              ref={inputRef}
              placeholderStyle={{ marginLeft: 15 }}
              onSubmit={onSubmit}
              onBlur={onBlur}
              value={value}
              style={{
                borderColor: value ? (errors[name] ? 'red' : 'green') : 'black',
                borderWidth: 1,
              }}
            />
          )}
        />
        {RightIcon && (
          <Styled.Button onPress={() => setSecury(!secury)}>
            <Ionicons
              name={secury ? 'eye-off' : 'eye'}
              size={iconSize}
              color="#2D2D2D"
              style={{ padding: 5, right: 8 }}
            />
          </Styled.Button>
        )}
      </Styled.ViewInput>
      {errors[name] && <Styled.LabelError>{errors[name].message}</Styled.LabelError>}
    </Styled.Container>
  );
}
