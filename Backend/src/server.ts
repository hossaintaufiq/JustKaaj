import { Server } from 'http';
import app from './app';
import config from './app/config';
const port = config.port || 5000;

let server: Server;

const main = async () => {
  try {
    server = app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
