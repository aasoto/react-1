export const getGifs = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=3KyFL3Y0S76tOoaQ235z5uGHsMvZgi0P&q=${category}&limit=10`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map( img => {
    const {id, title, images} = img;
    return ({
      id: id,
      title: title,
      url: images.downsized_medium.url
    });
  });

  return gifs;
}