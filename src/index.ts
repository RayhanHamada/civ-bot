import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.post('/civ', (req, res) => {
  console.log(req.body);
});

app.listen(80, () => console.log(`running on port ${80}`));
