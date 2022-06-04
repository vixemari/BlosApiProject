# Boas vindas ao repositório do API de Blogs

---
# Habilidades 

Nesse projeto, construi um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`
Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utilização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.
 
---
# Requisitos

  1 - Sua aplicação deve ter o endpoint POST /user
  2 - Sua aplicação deve ter o endpoint POST /login
  3 - Sua aplicação deve ter o endpoint GET /user
  4 - Sua aplicação deve ter o endpoint GET /user/:id
  5 - Sua aplicação deve ter o endpoint POST /categories
  6 - Sua aplicação deve ter o endpoint GET /categories
  7 - Sua aplicação deve ter o endpoint POST /post
  8 - Sua aplicação deve ter o endpoint GET /post
