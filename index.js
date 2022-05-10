const express = require('express');
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const categoryRoutes = require('./routes/categoryRoute');
const blogPostRoutes = require('./routes/blogPostRoute');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(categoryRoutes);
app.use(userRoute);
app.use(loginRoute);
app.use(blogPostRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
