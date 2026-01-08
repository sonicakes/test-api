const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'Online', message: 'Welcome to my free API!' });
});

app.get('/api/data', (req, res) => {
  res.json({ id: 1, item: 'Sample Data', price: 100 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));