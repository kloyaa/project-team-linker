{
	"info": {
		"_postman_id": "5b3f247d-d182-48df-89e4-7c638d4ea3e8",
		"name": "DEVIANCE_COLLECTION",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Authentication, Authorization & Registration",
			"item": [
				{
					"name": "AUTHENTICATION",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjA3Mjg1OCwiZXhwIjoxNjAyNDMyODU4fQ.-09fZxCgbmaaVcKF5VrayXvN0MnuRwX4F6a4KIe7ooo",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/auth",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"auth"
							]
						}
					},
					"response": []
				},
				{
					"name": "SIGN IN",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\": \"nik01@yahoo.com\",\r\n    \"password\": \"password01\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/api/auth",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"auth"
							]
						}
					},
					"response": []
				},
				{
					"name": "REGISTRATION",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"Nikolai Madridano\",\r\n    \"email\": \"nik01@yahoo.com\",\r\n    \"password\": \"password01\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/api/users",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"users"
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "Profile",
			"item": [
				{
					"name": "Profile Experience",
					"item": [
						{
							"name": "PUT_PROFILE_EXPERIENCE",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "x-auth-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjA2ODk1MCwiZXhwIjoxNjAyNDI4OTUwfQ.ScOB3j2tk4PD2FqG1Ts6gczLqImmGRQakRUGjekeIbU",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"title\": \"Web Developerx\",\r\n    \"company\": \"Upwork\",\r\n    \"location\": \"Orlando, Florida USA\",\r\n    \"from\": \"october 01, 2020\",\r\n    \"to\": \"\",\r\n    \"current\": true,\r\n    \"description\": \"Sideline\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:5000/api/profile/experience",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"profile",
										"experience"
									]
								}
							},
							"response": []
						},
						{
							"name": "DELETE_PROFILE_EXPERIENCE",
							"request": {
								"method": "DELETE",
								"header": [
									{
										"key": "x-auth-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjA3NDg4NCwiZXhwIjoxNjAyNDM0ODg0fQ.sZ63kNWSdriWFCvtwcyNC1U7Xf0RrtpTWMFKM9zzenA",
										"description": "Nikolai",
										"type": "text"
									}
								],
								"url": {
									"raw": "http://localhost:5000/api/profile/experience/5f7dc3f6fd6fb81fa8e7d32c",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"profile",
										"experience",
										"5f7dc3f6fd6fb81fa8e7d32c"
									]
								}
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Profile Education",
					"item": [
						{
							"name": "PUT_PROFILE_EDUCATION",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "x-auth-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjA3MjA0MiwiZXhwIjoxNjAyNDMyMDQyfQ.YDzi0tPLIEIWpjGl6C1ipebxeZWJozyj2kjFDPxBwfo",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"school\": \"Lourdess College\",\r\n    \"fieldOfStudy\": \"Philosophy\",\r\n    \"degree\": \"AB Philosophy\",\r\n    \"from\": \"october 01, 2020\",\r\n    \"to\": \"\",\r\n    \"current\": true,\r\n    \"description\": \"My new school\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:5000/api/profile/education",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"profile",
										"education"
									]
								}
							},
							"response": []
						},
						{
							"name": "DELETE_PROFILE_EDUCATION",
							"request": {
								"method": "DELETE",
								"header": [
									{
										"key": "x-auth-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjA3Mjg1OCwiZXhwIjoxNjAyNDMyODU4fQ.-09fZxCgbmaaVcKF5VrayXvN0MnuRwX4F6a4KIe7ooo",
										"type": "text"
									}
								],
								"url": {
									"raw": "http://localhost:5000/api/profile/education/5f7db23bf9b80d1be0fd6c4d",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"profile",
										"education",
										"5f7db23bf9b80d1be0fd6c4d"
									]
								}
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Profile Github",
					"item": [
						{
							"name": "GET_GITHUB_PROFILE",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": ""
								}
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "GET_MY_PROFILE",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjA2ODkzMywiZXhwIjoxNjAyNDI4OTMzfQ.6mYHPLmEGechaD90iv3J6OOBPvgpC2FdCw6ruDWeoFw",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/profile/me",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"profile",
								"me"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET_PROFILE_ALL",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/api/profile/all",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"profile",
								"all"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET_PROFILE_BY_ID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/api/profile/5f7da1c5926bd91de4cc9fb2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"profile",
								"5f7da1c5926bd91de4cc9fb2"
							]
						}
					},
					"response": []
				},
				{
					"name": "POST_PROFILE",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjA2ODk1MCwiZXhwIjoxNjAyNDI4OTUwfQ.ScOB3j2tk4PD2FqG1Ts6gczLqImmGRQakRUGjekeIbU",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"status\": \"Software Engineer\",\r\n    \"skills\": \"Javascript, Next, React, Redux, Typescript, GraphQL , MongoDb, Node & Express\",\r\n    \"experience\": {\r\n        \"title\": \"Software Engineer\",\r\n        \"company\": \"Google\",\r\n        \"location\": \"New york\",\r\n        \"from\": \"october 06, 2020\",\r\n        \"to\": \"october 06, 2020\",\r\n        \"current\": true,\r\n        \"description\": \"How I wish I'm smart enough to work at google lol XD\"\r\n    },\r\n    \"education\": {\r\n        \"school\": \"Cagayan de Oro College\",\r\n        \"degree\": \"Bachelor of Science in Information Technology\",\r\n        \"fieldOfStudy\": \"Information Technology\",\r\n        \"from\": \"06/21/2000\",\r\n        \"to\": \"06/21/2000\",\r\n        \"current\": false,\r\n        \"description\": \"A GOOD SCHOOL!\"\r\n    },\r\n    \"social\": {\r\n        \"youtube\": \"https://youtube.com/profile/0xlgpso92\"\r\n    }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/api/profile/new",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"profile",
								"new"
							],
							"query": [
								{
									"key": "",
									"value": null,
									"disabled": true
								}
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "User",
			"item": [
				{
					"name": "GET_USER_ALL",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/api/users/all",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"users",
								"all"
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "General",
			"item": [
				{
					"name": "DELETE_ACCOUNT",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3YzNlYzU4MTY5ZjAyYjI4MjIwNjc0In0sImlhdCI6MTYwMTk4NzYwNywiZXhwIjoxNjAyMzQ3NjA3fQ.pjeqlsZKCKUanyhRJp8uWvmb69HwUJoXLX1og5pILfk",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/profile/deleteaccount",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"profile",
								"deleteaccount"
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "Posts",
			"item": [
				{
					"name": "POST_NEW_POST",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/api/posts",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"posts"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET_POSTS_ALL",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjIxMzE1NywiZXhwIjoxNjAyNTczMTU3fQ.N2YXdAmY-iiqjvhaObZGBtsYW5bTvnEBQjDgH2v20-s",
								"description": "Nikolai",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/posts",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"posts"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET_POST_BY_ID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/api/posts/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"posts",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "DELETE_POST_BY_ID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": ""
						}
					},
					"response": []
				},
				{
					"name": "PUT_POST_LIKE",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjIxMzE1NywiZXhwIjoxNjAyNTczMTU3fQ.N2YXdAmY-iiqjvhaObZGBtsYW5bTvnEBQjDgH2v20-s",
								"description": "Nikolai",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/posts/like/5f7ff2c290ee0229ccf9a26f",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"posts",
								"like",
								"5f7ff2c290ee0229ccf9a26f"
							]
						}
					},
					"response": []
				},
				{
					"name": "PUT_POST_UNLIKE",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZGExYzU5MjZiZDkxZGU0Y2M5ZmIyIn0sImlhdCI6MTYwMjIxMzE1NywiZXhwIjoxNjAyNTczMTU3fQ.N2YXdAmY-iiqjvhaObZGBtsYW5bTvnEBQjDgH2v20-s",
								"description": "Nikolai",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/posts/unlike/5f7ff36290ee0229ccf9a271",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"posts",
								"unlike",
								"5f7ff36290ee0229ccf9a271"
							]
						}
					},
					"response": []
				},
				{
					"name": "POST_COMMENT",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/api/posts/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"posts",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "DELETE_COMMENT_BY_ID",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/api/posts/comment/5f7ff2c290ee0229ccf9a26f/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"posts",
								"comment",
								"5f7ff2c290ee0229ccf9a26f",
								""
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		}
	],
	"protocolProfileBehavior": {}
}