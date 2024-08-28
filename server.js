const express = require('express');
const app = express();
const port = 3000;

app.use('/api/goals', require('./backEnd/routes/goalRoutes'));

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));