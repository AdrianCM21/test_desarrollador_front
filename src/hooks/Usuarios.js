import * as usuarioSlice from "@/store/UsuarioSlice"
import { useDispatch, useSelector } from "react-redux"

export const useUsuarios = () => {
    const dispatch = useDispatch()

    const usuarios = useSelector((state) => state.usuarios.usuarios)

    const usuario = useSelector((state) => state.usuarios.usuario)

    const setUsuarios = (usuarios) => dispatch(usuarioSlice.setUsuarios(usuarios))

    const setUsuario = (usuario) => dispatch(usuarioSlice.setUsuario(usuario))

    const resetUsuario = () => dispatch(usuarioSlice.resetUsuario())
    
    return { 
        usuarios, 
        usuario, 
        setUsuarios, 
        setUsuario, 
        resetUsuario 
    }
}