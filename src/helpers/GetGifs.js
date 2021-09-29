export const getGifs = async( category ) => {
    const API_KEY = 'rMWC6XqKW07y3WP7Er0aIyrn4nNkwJ2X';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${ encodeURI(category)}&limit=${limit}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img =>{
        return (
            {
                id: img.id,
                title: img.title,
                image: img.images?.original,
            });
    } );
    return gifs;
};