import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usuarios: [],
    usuario: null,
}

const UsuarioSlice = createSlice({
    name: 'usuarios',
    initialState,
    reducers: {
        setUsuarios(state, action) {
            state.usuarios = action.payload
        },
        setUsuario(state, action) {
            state.usuario = action.payload
        },
        resetUsuario(state) {
            state.usuario = null
        },
    }
})

export const {
    resetUsuario,
    setUsuario,
    setUsuarios
} = UsuarioSlice.actions

export default UsuarioSlice.reducer