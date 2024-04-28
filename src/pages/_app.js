// pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../store/Index'
import {RootLayout} from '../layouts/layout';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from '@/config/themes/MainTheme';

const MyApp=({ Component, pageProps })=> {
  const Layout = Component.layout || RootLayout;

  return (
    <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
    </Provider>
  );
}

export default MyApp;