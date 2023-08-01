const express = require('express');
const session = require('express-session');
const sequelize = require('./db/index');
const sessionStore = require('./middleware/session');
const config = require('./config/config.json');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { maxAge: config.session.maxAge },
  })
);

app.set('view engine', 'handlebars');
app.engine('handlebars', require('express-handlebars')({ defaultLayout: 'main' }));

const routes = require('./routes/index');
app.use(routes);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
