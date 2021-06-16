define({ "api": [
  {
    "type": "post",
    "url": "api/addFunction",
    "title": "function to add function from user",
    "name": "addFunction",
    "group": "Funtions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "Name",
            "description": "<p>of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "description",
            "optional": false,
            "field": "function",
            "description": "<p>description</p>"
          },
          {
            "group": "Parameter",
            "type": "category",
            "optional": false,
            "field": "category",
            "description": "<p>of the function</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "inserted",
            "description": "<p>return true if sucessfully registered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"inserted\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>response:</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"inserted\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/functions_controllers.js",
    "groupTitle": "Funtions"
  },
  {
    "type": "post",
    "url": "api/getFunction",
    "title": "function that receives the function name and returns ir",
    "name": "getFunction",
    "group": "Funtions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "function",
            "description": "<p>'s name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "an",
            "description": "<p>object with the function</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    name: \"sumar\",\n    js: \"function sumar(a,b){return (a+b)}\"\n    description: \"hace sumas\"\n    category: \"matematicas\"\n    user: \"andreileonsalas\"\n    id: \"NMM2Sr6zawhNcaafX7yM\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "it",
            "description": "<p>returns an empty array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/functions_controllers.js",
    "groupTitle": "Funtions"
  },
  {
    "type": "post",
    "url": "api/getUserFunctions",
    "title": "function that receives a username and returns all his functions",
    "name": "getUserFunctions",
    "group": "Funtions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "user",
            "optional": false,
            "field": "user",
            "description": "<p>of the function</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "found",
            "description": "<p>the functions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n Object { user: \"ronaldhg\", id: \"0z48ebUNsvsVL3eDduVm\", js: \"\", … }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>repsonse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/functions_controllers.js",
    "groupTitle": "Funtions"
  },
  {
    "type": "get",
    "url": "api/getCategoryFunctions",
    "title": "function that receives the category and returns all functions",
    "name": "getUserFunctions",
    "group": "Funtions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "req",
            "description": "<p>es donde vienen los datos a pedir, el request</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "res",
            "description": "<p>es donde viene la respuesta de la base de datos, el response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/functions_controllers.js",
    "groupTitle": "Funtions"
  },
  {
    "type": "post",
    "url": "/api/addUser",
    "title": "Get User information",
    "name": "AddUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "Name",
            "description": "<p>of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "lastname",
            "optional": false,
            "field": "Lastname",
            "description": "<p>of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "user",
            "optional": false,
            "field": "Username",
            "description": "<p>of the user, normally their email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "pass",
            "optional": false,
            "field": "password",
            "description": "<p>of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"inserted\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"inserted\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users_controllers.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/validateUser",
    "title": "function to validate user credentials for login",
    "name": "AddUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "Name",
            "description": "<p>of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "lastname",
            "optional": false,
            "field": "Lastname",
            "description": "<p>of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "user",
            "optional": false,
            "field": "Username",
            "description": "<p>of the user, normally their email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "pass",
            "optional": false,
            "field": "password",
            "description": "<p>of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "inserted",
            "description": "<p>return true if sucessfully registered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"inserted\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"inserted\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users_controllers.js",
    "groupTitle": "User"
  }
] });
