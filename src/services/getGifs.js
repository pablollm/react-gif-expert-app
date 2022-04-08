    export const getGifs = async(category) => { 
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=TuN3lL2Tgd6VgW66ApIsJFVSYqKbFrNc&limit=10`;
        const resp= await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }));
       return gifs;
    }