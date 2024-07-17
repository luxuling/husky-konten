import { Hono } from "hono";

const app = new Hono();

interface IUser {
  id: number;
  name: string;
}

const users: IUser[] = [
  {
    id: 1,
    name: "Dwi",
  },
  {
    id: 2,
    name: "Angga",
  },
];

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/users", (c) => {
  c.status(200);
  return c.json(users);
});

export default app;
