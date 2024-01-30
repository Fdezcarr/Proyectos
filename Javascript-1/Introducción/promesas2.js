// fetch significa petición

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ['post1', 'post2', 'post3', 'post4'];
      const error = true;
      if (error) {
        reject('Hubo un error al intentar obtener los posts');
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};

fetchPosts().then((posts) => {
  console.log(posts);
});

fetchPosts()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

// const miVariable = fetchPosts(); --> pending
// console.log(miVariable);
