require('dotenv').config();

const app = require('./app');
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

