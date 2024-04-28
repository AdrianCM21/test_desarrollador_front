// pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../store/index'
import RootLayout from './layout';
import './globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
      
    </Provider>
  );
}

export default MyApp;