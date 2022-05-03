const express = require('express');
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(userRoute);
app.use(loginRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
