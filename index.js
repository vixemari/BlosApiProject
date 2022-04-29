const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(userRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
