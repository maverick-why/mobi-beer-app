const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('移动酒车服务已启动 🍻');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('服务运行中:', PORT);
});
