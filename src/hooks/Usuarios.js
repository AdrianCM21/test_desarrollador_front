import * as usuarioSlice from "@/store/UsuarioSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as usuarioServices from "../services/Usuarios.service"

export const useUsuarios = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const usuarios = useSelector((state) => state.usuarios.usuarios)
    const usuario = useSelector((state) => state.usuarios.usuario)
    const albumes = useSelector((state) => state.usuarios.albumes)
    const fotos = useSelector((state) => state.usuarios.fotos)
    const posts = useSelector((state) => state.usuarios.posts)

    const setUsuarios = (usuarios) => dispatch(usuarioSlice.setUsuarios(usuarios))

    const setUsuario = async (usuario) => {
        try {
            setLoading(true)
            dispatch(usuarioSlice.setUsuario(usuario))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading([])
            setLoading(false)
        }
    }

    const getAlbums = async (id) => {
        try {
            setLoading(true)
            const albumes = await usuarioServices.listarAlbumes(id)
            dispatch(usuarioSlice.setAlbumes(albumes))
            setLoading(false)
        } catch (error) {
            dispatch(usuarioSlice.setAlbumes([]))
            setLoading(false)
        }
    }

    const getFotos = async (idAlbum) => {
        try {
            setLoading(true)
            const fotos = await usuarioServices.listarFotos(idAlbum)
            dispatch(usuarioSlice.setFotos(fotos))
            setLoading(false)
        } catch (error) {
            dispatch(usuarioSlice.setFotos([]))
            setLoading(false)
        }
    }

    const resetUsuario = () => dispatch(usuarioSlice.resetUsuario())

    const listar = async () => {
        setLoading(true)
        try {
            const response = await usuarioServices.listarUsuarios()
            dispatch(usuarioSlice.setUsuarios(response))
            const posts = await usuarioServices.listarPosts()
            dispatch(usuarioSlice.setPosts(posts))
        } catch (error) {
            dispatch(usuarioSlice.setUsuarios([]))
        }
        setLoading(false)
    }

    useEffect(() => {
        listar()
    }, [])

    return {
        usuarios,
        usuario,
        albumes,
        fotos,
        posts,
        loading,
        setUsuarios,
        setUsuario,
        resetUsuario,
        listar,
        getAlbums,
        getFotos
    }
}