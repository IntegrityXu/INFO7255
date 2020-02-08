const redis = require("redis");
const client = redis.createClient();
const validator = require("jsonschema").Validator;

var userSchema = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "name",
      "sex",
      "age"
    ],
    "properties": {
      "name": {
        "$id": "#/properties/name",
        "type": "string",
        "title": "The Name Schema",
        "default": "",
        "examples": [
          "ab"
        ],
        "pattern": "^(.*)$"
      },
      "sex": {
        "$id": "#/properties/sex",
        "type": "string",
        "title": "The Sex Schema",
        "default": "",
        "examples": [
          "male"
        ],
        "pattern": "^(.*)$"
      },
      "age": {
        "$id": "#/properties/age",
        "type": "integer",
        "title": "The Age Schema",
        "default": 0,
        "examples": [
          16
        ]
      }
    }
  };


exports.userCreate = (req, res) => {
    console.log(req.body);
    let v = new validator();
    let result= v.validate(req.body, userSchema);
    if (result.errors.length != 0) {
        return res.status(400).send({message: "wrong json schema."});
    };
    console.log(result.errors.length == 0);
    client.get(req.body.name, function (err, reply) {
        if (err) {
            console.log("the user has existed.");
            throw err;
        }
        let user_json = {
            "name": req.body.name,
            "sex": req.body.sex,
            "age": req.body.age
        };
        client.set(req.body.name, JSON.stringify(user_json), (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log("successfully");
            return res.status(200).send({
                message: "create successfully"
            });
        });

    });
};

exports.userGet = (req, res) => {
    client.get(req.params.name, function(err, reply) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(reply);
        if (reply == null) {
            return res.status(404).send ({
                message: "not found user."
            });
        }
        return res.status(200).send (reply);
    });
};

exports.userDelete = (req, res) => {
    client.del(req.params.name, (err,reply) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (reply == 0) {
            console.log("delete fail.");
            return res.status(400).send({
                message: "delete fail."
            });
        }
        return res.status(200).send({
            message: "delete successfully."
        });
    });
};

