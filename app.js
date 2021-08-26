const Express = require('express');
const app = Express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

connectDB();

// Body Parser
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

// Server Setup
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
