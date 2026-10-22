async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");

    const posts = await res.json();

    lista.innerHTML = posts
      .map(post => `<li>${post.title}</li>`)
      .join("");

  } catch (error) {
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPosts();