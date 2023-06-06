const express = require('express')
const app = express()
const axios = require('axios');
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', async (req, res) => {
  const url = "http://localhost:4000/";
  try {
    const response = await axios.get(url);
    const result = response.data;
    res.json({
      status: "200",
      data: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

