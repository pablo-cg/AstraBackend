const express = require('express');
const cors = require('cors');
const subscriptions = require('./api/subscriptions')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use("/api/subscriptions", subscriptions);

app.listen(
    PORT,
    () => { console.log(`Backend corriendo en puerto ${PORT}`); }
)