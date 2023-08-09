import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import * as Styled from './styles';

export function Input({
  title, placeholder, inputRef, control, errors, 
  name, onSubmit
}) {

  return (
    <Styled.Container>

      <Styled.TitleInput>{title}</Styled.TitleInput>

      <Styled.ViewInput>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState: { isDirty } }) => (
            <Styled.InputText
              placeholder={placeholder}
              placeholderTextColor="#828282"
              onChangeText={onChange}
              ref={inputRef}
              placeholderStyle={{ marginLeft: 15 }}
              onSubmit={onSubmit}
              onBlur={onBlur} // É chamado quando o TextInput é tocado.
              value={value}
              style={{
                borderColor: errors[name] ? '#FF0000' : isDirty ? '#00FF00' : '#828282', borderWidth: 1
              }}
            />
          )}
        />
      {errors[name] && <Styled.LabelError>{errors[name].message}</Styled.LabelError>}
      </Styled.ViewInput>
    </Styled.Container>
  );
}
