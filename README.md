# Users API

This is an experiment to use [TypeScript](https://github.com/Microsoft/TypeScript) with [NodeJS](https://github.com/nodejs/node).

## Setup

### Install node

Install nvm

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Install Node

```shell
nvm install node
```

### Install TypeScript

```shell
npm install -g typescript
```

### Install MongoDB

```shell
brew install mongodb
brew services start mongodb
```

### Create Database
```shell
$ mongo
> use users
> exit
```

### Install dependencies
```shell
npm install
```

### Compile and run
```
tsc
node build/app.js
```

## Endpoints

### GET /users

```
http://localhost:8080/api/users
```

### GET /users/:id

```
http://localhost:8080/api/users/:id
```

### POST /users

```
http://localhost:8080/api/users
```

Body:

```json
{
    "first_name": "John",
    "last_name": "Doe",
    "age": 27,
    "email": "john.doe@email.com"
}
```

### PATCH /users/:id

```
http://localhost:8080/api/users/:id
```

Body:

```json
{
    "first_name": "Johnny"
}
```

### DELETE /users/:id

```
http://localhost:8080/api/users/:id
```
