import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usuarios: [],
    usuario: [],
    albumes:[],
    fotos:[],
    posts:[]
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
        setAlbumes(state, action) {
            state.albumes = action.payload
        },
        setFotos(state, action) {
            state.fotos = action.payload
        },
        setPosts(state, action) {
            state.posts = action.payload
        },
        resetUsuario(state) {
            state.usuario = null
        },
    }
})

export const {
    resetUsuario,
    setUsuario,
    setUsuarios,
    setAlbumes,
    setFotos,
    setPosts
} = UsuarioSlice.actions

export default UsuarioSlice.reducer