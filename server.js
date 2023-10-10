const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.log('uncaught Exception : 🔥  Shutting down,,,');
  console.log(err.name, err.message);
  process.exit(1);
});
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connected successfully');
  });

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server is started at port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION : 🔥  Shutting down,,,');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
