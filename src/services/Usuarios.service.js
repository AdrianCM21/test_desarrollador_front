import axios from "axios";

export const listarUsuarios = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }

}

export const listarAlbumes = async (id) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id+'/albums');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const listarFotos = async (idAlbum) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums'+'/'+idAlbum+'/photos');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }

}

export const listarPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}