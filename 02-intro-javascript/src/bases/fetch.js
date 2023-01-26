const apiKey = '3KyFL3Y0S76tOoaQ235z5uGHsMvZgi0P';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( resp => {
  return resp.json();
}).then( resp => {
  const {data} = resp;
  const {url} = data.images.original;

  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);
}).catch( error => {
  console.error(error);
});