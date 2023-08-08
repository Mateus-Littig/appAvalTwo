import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StackRoutes } from './src/routes/index';
import "./ignoreWarnings";

import { Theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StackRoutes />
    </ThemeProvider>
  );
}
