const { v4: uuidv4 } = require("uuid");
const express = require("express");
const apiRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const login = require("../middleware/login");

const endpoint = "/";
const knex = require("knex")({
  client: "pg",
  debug: true,
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
});

apiRouter.get(endpoint + "produtos", login, (req, res) => {
  knex
    .select("*")
    .from("produto")
    .then((produtos) => res.status(200).json(produtos))
    .catch((err) => {
      res.status(500).json({
        message: "Error to get products - " + err.message,
      });
    });
});

apiRouter.get(endpoint + "produtos/:id", login, (req, res) => {
  if (req.params.id) {
    knex
      .select("*")
      .from("produto")
      .where("id", req.params.id)
      .then((produto) => {
        if (produto.length > 0) {
          res.status(200).json(produto);
        } else {
          res.status(404).json({ message: "Not Found" });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error to get products - " + err.message,
        });
      });
  } else {
    res.json({ message: "Id is required" });
  }
});

apiRouter.post(endpoint + "produtos", login, (req, res) => {
  const { id, descricao, valor, marca } = req.body;

  if (id && descricao && valor && marca) {
    knex("produto")
      .insert({
        id: id,
        descricao: descricao,
        valor: valor,
        marca: marca,
      })
      .then(() => {
        res.status(200).json({ message: "Success" });
      })
      .catch((err) => {
        res.status(400).json({ message: err.detail });
      });
  }
});

apiRouter.put(endpoint + "produtos/:id", login, (req, res) => {
  const { descricao, valor, marca } = req.body;

  knex("produto")
    .update({
      descricao: descricao ? descricao : null,
      valor: valor ? valor : null,
      marca: marca ? marca : null,
    })
    .where("id", req.params.id)
    .then((row) => {
      if (row) {
        res.status(200).json({ message: "Success update" });
      } else {
        res.status(400).json({ message: "Id does not exists" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.detail });
    });
});

apiRouter.delete(endpoint + "produtos/:id", login, (req, res) => {
  knex("produto")
    .where("id", req.params.id)
    .del()
    .then((row) => {
      if (row) {
        res.status(200).json({ message: "Success to delete", product: row });
      } else {
        res.status(400).json({ message: "Id does not exists" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.detail });
    });
});

apiRouter.post("/register", async (req, res) => {
  let userCheck = false;
  const { username, password } = req.body;
  console.log(username, password);
  await knex
    .select("username")
    .from("user")
    .where("username", username)
    .then((user) => {
      if (user.length > 0) {
        userCheck = true;
        res.status(404).json({ message: "Usuario ja cadastrado" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error " + err.message,
      });
    });

  if (!userCheck) {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      knex("user")
        .insert({
          id: uuidv4(),
          username: username,
          password: hash,
        })
        .then(() => {
          res.status(200).json({ message: "Success" });
        })
        .catch((err) => {
          res.status(400).json({ message: err.detail });
        });
    });
  }
});

apiRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  await knex
    .select("*")
    .from("user")
    .where("username", username)
    .then((user) => {
      console.log(user);
      if (user.length < 1) {
        userCheck = true;
        return res.status(401).json({ message: "Falha na autenticação" });
      }

      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: "Falha na autenticação" });
        }
        if (result) {
          const token = jwt.sign(
            {
              userId: user[0].id,
              username: user[0].username,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res
            .status(200)
            .send({ message: "Autenticado com sucesso!", token: token });
        }
        return res.status(401).json({ message: "Falha na autenticação" });
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error " + err.message,
      });
    });
});

module.exports = apiRouter;
