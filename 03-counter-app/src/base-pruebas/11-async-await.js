
export const getImagen = async() => {

    try {

        const apiKey = '3KyFL3Y0S76tOoaQ235z5uGHsMvZgi0P';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No se encontró la imagen.';
    }
    
}