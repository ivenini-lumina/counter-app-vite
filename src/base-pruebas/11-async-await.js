export const getImagen = async() => {

    try {
        // API key incorreta a proposito para que falle
        // Borrar la Z al inicio para obtener api key correcta
        const apiKey = 'ZapFuGEEMQHLCoy9y8R8KU1WO1i1nz4Gs'; 
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        //console.error(error);
        return 'No se ha encontrado la imagen';
    }    
}
