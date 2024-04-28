import UsuarioSlice from './UsuarioSlice';
import {configureStore}from 'redux';

export const store = configureStore({
  reducer: {
   usuarios:UsuarioSlice
  },
  middleware: function(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
