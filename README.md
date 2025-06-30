# ToDo Project

- REST API for auth & todos (Node.js, Express, MongoDB)

## Setup

- `npm install --prefix "Project 1"`
- Add `.env` in `Project 1`:
  - `MONGO_URI=...`
  - `JWT_SECRET=...`
  - `REFRESH_TOKEN_SECRET=...`
  - `PORT=3000`
- Run: `npm start --prefix "Project 1"`

## Endpoints

- Auth: `/api/auth/register`, `/login`, `/refresh`, `/logout`
- Todos (JWT): `/api/todos/`, `/api/todos/:id`

## License

ISC
