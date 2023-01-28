
export const getImagen = async() => {
    // const apiKey = '3KyFL3Y0S76tOoaQ235z5uGHsMvZgi0P';

    // await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    // .then(resp => {
    //     const {data} = resp.json();
    //     console.log('imagen: ', data);
    //     return data;
    // }).then(data => {
    //     return data.images.original;
    // }).catch( error => {
    //     return 'No se encontró la imagen.';
    // });

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