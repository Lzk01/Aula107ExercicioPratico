var livro1 = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
  };
  
  var livro2 = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949,
  };
  
  
  function Livro(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
  
  var livro3 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937);
  var livro4 = new Livro("Apanhador no Campo de Centeio", "J.D. Salinger", 1951);
  
 
  var livros = [livro1, livro2, livro3, livro4];
  
  for (var i = 0; i < livros.length; i++) {
    console.log("Livro #" + (i + 1));
    console.log("Título: " + livros[i].titulo);
    console.log("Autor: " + livros[i].autor);
    console.log("Ano de Publicação: " + livros[i].anoPublicacao);
    console.log("--------------------------");
  }
  
  
  console.log("Acesso direto a propriedades:");
  console.log("Título do livro 1: " + livro1.titulo);
  console.log("Autor do livro 2: " + livro2.autor);