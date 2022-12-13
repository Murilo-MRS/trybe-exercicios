// src/server.js
const app = require('./app');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});
