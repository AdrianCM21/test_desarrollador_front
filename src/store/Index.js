import ModalSlice from './ModalSlice';
import UsuarioSlice from './UsuarioSlice';
import { configureStore }from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
   usuarios:UsuarioSlice,
   modals:ModalSlice
  },
  middleware: function(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
