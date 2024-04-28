import UsuarioSlice from './UsuarioSlice';
import * as redux from 'redux';

export const store = redux.configureStore({
  reducer: {
   usuarios:UsuarioSlice
  },
  middleware: function(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
