define({ "api": [  {    "type": "POST",    "url": "/bookshelfs/delect",    "title": "取消订阅",    "version": "1.0.0",    "name": "____",    "group": "Bookshelfs",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET localhost:5000/bookshelfs/delect",        "type": "json"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>小说ID.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "filename": "src/modules/bookshelves.js/controller.js",    "groupTitle": "Bookshelfs"  },  {    "type": "POST",    "url": "/bookshelfs/order",    "title": "订阅小说",    "permission": [      {        "name": "User"      }    ],    "version": "1.0.0",    "name": "____",    "group": "Bookshelfs",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" \"authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjhmZDRkODUyYTE1YzliNmYyNjI3MSIsImlhdCI6MTQ4ODU1MTc2N30.IEgYwmgyqOBft9s38ool7cmuC2yIlWYVLf4WQzcbqAI\" -X GET localhost:5000/bookshelfs/order",        "type": "json"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>小说ID.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "filename": "src/modules/bookshelves.js/controller.js",    "groupTitle": "Bookshelfs"  },  {    "type": "GET",    "url": "/bookshelfs",    "title": "获取书架列表",    "permission": [      {        "name": "User"      }    ],    "version": "1.0.0",    "name": "______",    "group": "Bookshelfs",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" \"authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjhmZDRkODUyYTE1YzliNmYyNjI3MSIsImlhdCI6MTQ4ODU1MTc2N30.IEgYwmgyqOBft9s38ool7cmuC2yIlWYVLf4WQzcbqAI\" -X GET localhost:5000/bookshelfs",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n   \"list\": [\n      {\n       \"_id\": \"58c949c5d18e2024b66360fc\",\n       \"user\": \"58c94997d18e2024b66360fb\",\n       \"novel\": {\n         \"_id\": \"58c4cb509e4dad30f80d2f84\",\n         \"url\": \"http://www.37zw.com/3/3960/\",\n         \"name\": \"1852铁血中华\",\n         \"author\": \"绯红之月\",\n         \"updateTime\": \"2017-03-12\",\n         \"introduction\": \"    1852,是革命，或者是一场该改朝换代的改良。燃烧的铁与血，最终能创造一个什么样的未来？\\n\",\n         \"countChapter\": \"1377\",\n         \"lastChapterTitle\": \"第644章 剪影 3\",\n         \"img\": \"http://www.37zw.com/d/image/3/3960/3960s.jpg\"\n       },\n       \"chapter\": {\n           \"_id\": \"58c4cb509e4dad30f80d2f85\",\n           \"number\": 0\n       },\n     }\n  ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "filename": "src/modules/bookshelves.js/controller.js",    "groupTitle": "Bookshelfs"  },  {    "type": "GET",    "url": "/chapters/:id",    "title": "获取章节信息",    "permission": [      {        "name": "@apiVersion 1.0.0"      }    ],    "name": "______",    "group": "Chapters",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/chapters/58c4cbce9e4dad30f80d34e7",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/modules/chapters.js/controller.js",    "groupTitle": "Chapters"  },  {    "type": "GET",    "url": "/chapter/next/:id",    "title": "获取下一章信息",    "permission": [      {        "name": "@apiVersion 1.0.0"      }    ],    "name": "_______",    "group": "Chapters",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/chapters/next/58bc1ec43f9cdc31b9bea8dc",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/modules/chapters.js/controller.js",    "groupTitle": "Chapters"  },  {    "type": "GET",    "url": "/chapter/last/:id",    "title": "获取上一章信息",    "permission": [      {        "name": "@apiVersion 1.0.0"      }    ],    "name": "_______",    "group": "Chapters",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/chapters/last/58bc1ec43f9cdc31b9bea8dc",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/modules/chapters.js/controller.js",    "groupTitle": "Chapters"  },  {    "type": "POST",    "url": "/bookshelfs/delect",    "title": "爬取小说",    "permission": [      {        "name": "User"      }    ],    "version": "1.0.0",    "name": "____",    "group": "Novels",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/novels/acquire",        "type": "json"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "novel",            "description": "<p>User object (required)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "novel.name",            "description": "<p>小说名称.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "novel.url",            "description": "<p>爬取网站url.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "filename": "src/modules/novels.js/controller.js",    "groupTitle": "Novels"  },  {    "type": "GET",    "url": "/bookshelfs/delect",    "title": "获取小说目录",    "permission": [      {        "name": "@apiVersion 1.0.0"      }    ],    "name": "______",    "group": "Novels",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/novels/directory/58c4cbce9e4dad30f80d34e7?order=1",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/modules/novels.js/controller.js",    "groupTitle": "Novels"  },  {    "type": "GET",    "url": "/bookshelfs/delect",    "title": "搜索小说名称",    "permission": [      {        "name": "@apiVersion 1.0.0"      }    ],    "name": "______",    "group": "Novels",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/novels/search/zh?keyword=永夜",        "type": "json"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "keyword",            "description": "<p>搜索词.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"response\": {\n      \"q\": \"yongye\",\n      \"r\": [\n        {\n          \"word\": \"永夜君王\"\n        }\n      ]\n   }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/modules/novels.js/controller.js",    "groupTitle": "Novels"  },  {    "type": "GET",    "url": "/bookshelfs/delect",    "title": "搜索小说(笔趣库)",    "permission": [      {        "name": "@apiVersion 1.0.0"      }    ],    "name": "_________",    "group": "Novels",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/novels/search/bqk?name=永夜",        "type": "json"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>小说名称.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"response\": [\n    {\n      \"title\": \"永夜君王\",\n      \"img\": \"http://www.37zw.com/d/image/2/2790/2790s.jpg\",\n      \"url\": \"http://www.37zw.com/2/2790/\",\n      \"introduction\": \"千夜自困苦中崛起，在背叛中坠落。自此一个人，一把枪，行在永夜与黎明之间，却走出一段传奇。若永夜注定是他的命运，那他也要成为主宰的王。\",\n      \"author\": \"烟雨江南\",\n      \"type\": \"玄幻小说\"\n    }\n  ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/modules/novels.js/controller.js",    "groupTitle": "Novels"  },  {    "type": "GET",    "url": "/users/tourists",    "title": "新增游客",    "permission": [      {        "name": "@apiVersion 1.0.0"      }    ],    "name": "____",    "group": "Users",    "examples": [      {        "title": "Example usage:",        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:5000/users/tourists",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n   \"token\": *\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4Yzk0OTk3ZDE4ZTIwMjRiNjYzNjBmYiIsImlhdCI6MTQ4OTU4OTg4OX0.JFkxoGJsx6T9WduGm1E2Ca83zPSMbhuDxVdhqa-Khfc\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/modules/users/controller.js",    "groupTitle": "Users"  }] });
