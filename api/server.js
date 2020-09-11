const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { mongoDBUrl, PORT } = require("./constants");
const policemanRouter = require("./policeman/policeman.router");
const storyRouter = require("./story/story.router");

class Server {
  constructor() {
    this.server = null;
  }
  async start() {
    this.initServer();
    await this.initDatabase();
    this.initMiddlewares();
    this.initRoutes();
    this.startListening();
    this.server.use(express.static("some random text"));
  }

  initServer() {
    this.server = express();
  }

  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(
      cors({
        origin: ["http://localhost:3001", "https://sampleforklok.netlify.app"],
      })
    );
  }

  initRoutes() {
    this.server.use("/last-duty", policemanRouter);
    this.server.use("/response", storyRouter);
  }

  async initDatabase() {
    try {
      await mongoose.connect(mongoDBUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
      console.log("db connected");
    } catch (error) {
      console.error(error);
    }
  }

  startListening() {
    return this.server.listen(PORT, (err) => {
      err
        ? console.error("port listening error", err)
        : console.log("server listening at port", PORT);
    });
  }
}

module.exports = new Server();
