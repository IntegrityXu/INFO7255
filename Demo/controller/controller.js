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
      "planCostShares",
      "linkedPlanServices",
      "_org",
      "objectId",
      "objectType",
      "planType",
      "creationDate"
    ],
    "properties": {
      "planCostShares": {
        "$id": "#/properties/planCostShares",
        "type": "object",
        "title": "The Plancostshares Schema",
        "required": [
          "deductible",
          "_org",
          "copay",
          "objectId",
          "objectType"
        ],
        "properties": {
          "deductible": {
            "$id": "#/properties/planCostShares/properties/deductible",
            "type": "integer",
            "title": "The Deductible Schema",
            "default": 0,
            "examples": [
              2000
            ]
          },
          "_org": {
            "$id": "#/properties/planCostShares/properties/_org",
            "type": "string",
            "title": "The _org Schema",
            "default": "",
            "examples": [
              "example.com"
            ],
            "pattern": "^(.*)$"
          },
          "copay": {
            "$id": "#/properties/planCostShares/properties/copay",
            "type": "integer",
            "title": "The Copay Schema",
            "default": 0,
            "examples": [
              23
            ]
          },
          "objectId": {
            "$id": "#/properties/planCostShares/properties/objectId",
            "type": "string",
            "title": "The Objectid Schema",
            "default": "",
            "examples": [
              "1234vxc2324sdf-501"
            ],
            "pattern": "^(.*)$"
          },
          "objectType": {
            "$id": "#/properties/planCostShares/properties/objectType",
            "type": "string",
            "title": "The Objecttype Schema",
            "default": "",
            "examples": [
              "membercostshare"
            ],
            "pattern": "^(.*)$"
          }
        }
      },
      "linkedPlanServices": {
        "$id": "#/properties/linkedPlanServices",
        "type": "array",
        "title": "The Linkedplanservices Schema",
        "items": {
          "$id": "#/properties/linkedPlanServices/items",
          "type": "object",
          "title": "The Items Schema",
          "required": [
            "linkedService",
            "planserviceCostShares",
            "_org",
            "objectId",
            "objectType"
          ],
          "properties": {
            "linkedService": {
              "$id": "#/properties/linkedPlanServices/items/properties/linkedService",
              "type": "object",
              "title": "The Linkedservice Schema",
              "required": [
                "_org",
                "objectId",
                "objectType",
                "name"
              ],
              "properties": {
                "_org": {
                  "$id": "#/properties/linkedPlanServices/items/properties/linkedService/properties/_org",
                  "type": "string",
                  "title": "The _org Schema",
                  "default": "",
                  "examples": [
                    "example.com"
                  ],
                  "pattern": "^(.*)$"
                },
                "objectId": {
                  "$id": "#/properties/linkedPlanServices/items/properties/linkedService/properties/objectId",
                  "type": "string",
                  "title": "The Objectid Schema",
                  "default": "",
                  "examples": [
                    "1234520xvc30asdf-502"
                  ],
                  "pattern": "^(.*)$"
                },
                "objectType": {
                  "$id": "#/properties/linkedPlanServices/items/properties/linkedService/properties/objectType",
                  "type": "string",
                  "title": "The Objecttype Schema",
                  "default": "",
                  "examples": [
                    "service"
                  ],
                  "pattern": "^(.*)$"
                },
                "name": {
                  "$id": "#/properties/linkedPlanServices/items/properties/linkedService/properties/name",
                  "type": "string",
                  "title": "The Name Schema",
                  "default": "",
                  "examples": [
                    "Yearly physical"
                  ],
                  "pattern": "^(.*)$"
                }
              }
            },
            "planserviceCostShares": {
              "$id": "#/properties/linkedPlanServices/items/properties/planserviceCostShares",
              "type": "object",
              "title": "The Planservicecostshares Schema",
              "required": [
                "deductible",
                "_org",
                "copay",
                "objectId",
                "objectType"
              ],
              "properties": {
                "deductible": {
                  "$id": "#/properties/linkedPlanServices/items/properties/planserviceCostShares/properties/deductible",
                  "type": "integer",
                  "title": "The Deductible Schema",
                  "default": 0,
                  "examples": [
                    10
                  ]
                },
                "_org": {
                  "$id": "#/properties/linkedPlanServices/items/properties/planserviceCostShares/properties/_org",
                  "type": "string",
                  "title": "The _org Schema",
                  "default": "",
                  "examples": [
                    "example.com"
                  ],
                  "pattern": "^(.*)$"
                },
                "copay": {
                  "$id": "#/properties/linkedPlanServices/items/properties/planserviceCostShares/properties/copay",
                  "type": "integer",
                  "title": "The Copay Schema",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "objectId": {
                  "$id": "#/properties/linkedPlanServices/items/properties/planserviceCostShares/properties/objectId",
                  "type": "string",
                  "title": "The Objectid Schema",
                  "default": "",
                  "examples": [
                    "1234512xvc1314asdfs-503"
                  ],
                  "pattern": "^(.*)$"
                },
                "objectType": {
                  "$id": "#/properties/linkedPlanServices/items/properties/planserviceCostShares/properties/objectType",
                  "type": "string",
                  "title": "The Objecttype Schema",
                  "default": "",
                  "examples": [
                    "membercostshare"
                  ],
                  "pattern": "^(.*)$"
                }
              }
            },
            "_org": {
              "$id": "#/properties/linkedPlanServices/items/properties/_org",
              "type": "string",
              "title": "The _org Schema",
              "default": "",
              "examples": [
                "example.com"
              ],
              "pattern": "^(.*)$"
            },
            "objectId": {
              "$id": "#/properties/linkedPlanServices/items/properties/objectId",
              "type": "string",
              "title": "The Objectid Schema",
              "default": "",
              "examples": [
                "27283xvx9asdff-504"
              ],
              "pattern": "^(.*)$"
            },
            "objectType": {
              "$id": "#/properties/linkedPlanServices/items/properties/objectType",
              "type": "string",
              "title": "The Objecttype Schema",
              "default": "",
              "examples": [
                "planservice"
              ],
              "pattern": "^(.*)$"
            }
          }
        }
      },
      "_org": {
        "$id": "#/properties/_org",
        "type": "string",
        "title": "The _org Schema",
        "default": "",
        "examples": [
          "example.com"
        ],
        "pattern": "^(.*)$"
      },
      "objectId": {
        "$id": "#/properties/objectId",
        "type": "string",
        "title": "The Objectid Schema",
        "default": "",
        "examples": [
          "12xvxc345ssdsds-508"
        ],
        "pattern": "^(.*)$"
      },
      "objectType": {
        "$id": "#/properties/objectType",
        "type": "string",
        "title": "The Objecttype Schema",
        "default": "",
        "examples": [
          "plan"
        ],
        "pattern": "^(.*)$"
      },
      "planType": {
        "$id": "#/properties/planType",
        "type": "string",
        "title": "The Plantype Schema",
        "default": "",
        "examples": [
          "inNetwork"
        ],
        "pattern": "^(.*)$"
      },
      "creationDate": {
        "$id": "#/properties/creationDate",
        "type": "string",
        "title": "The Creationdate Schema",
        "default": "",
        "examples": [
          "12-12-2017"
        ],
        "pattern": "^(.*)$"
      }
    }
  };


exports.userCreate = (req, res) => {
    // console.log(req.body);
    let v = new validator();
    let result= v.validate(req.body, userSchema);
    if (result.errors.length != 0) {
        console.log(result.errors);
        return res.status(400).send({message: "wrong json schema."});
    }
    console.log(result.errors.length == 0);
    client.get(req.body.objectId, function (err, reply) {
        if (err) {
            console.log("the user has existed.");
            throw err;
        }
        if (reply != null) {
            return res.send({message:"exist"});
        }
        client.set(req.body.objectId, JSON.stringify(req.body), (err) => {
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
    client.get(req.params.objectId, function(err, reply) {
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
    client.del(req.params.objectId, (err,reply) => {
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

