// backend.js
import express from "express";
import cors from "cors";
import userServices from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("go to /users chat");
});

//get user mongoose
app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  userServices.getUsers(name, job)
  .then((result) => {res.send({ users_list: result});
  })
  .catch((error) => {res.status(500).send(error);
  });
});

//get user id mongoose
app.get("/users/:id", (req, res) => {
  userServices.findUserById(req.params.id)
  .then((result) => {
    if (result === null) {
      res.status(404).send("not found")
    } else {
      res.send(result);
    }
  }).catch((error) => {
    res.status(500).send(error);
  });
});

//post user mongoose
app.post("/users", (req, res) => {
  userServices.addUser(req.body)
  .then((result) => {
    res.status(201).send(result);
  }).catch((error) => {
    res.status(500).send(error);
  });
});

//delete user mongoose
app.delete("/users/:id", (req, res) => {
  userServices.deleteUserById(req.params.id)
  .then((result) => {
    if (result === null) {
      res.status(404).send("resource not found");
    } else {
      res.status(200).send(result);
    }
  }).catch((error) => {
    res.status(500).send(error);
  });
})

//listen
app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
);
});