import express from "npm:express@4.18.2";

const port = 8000;
const app = express();

// deno-lint-ignore no-unused-vars
app.get("/", (req: Request, res: { send: (arg0: string) => void; }) => {
  res.send("Hello World.\n\n❗no npm/yarn install required and still no node_modules directory or package.json file❗\n\n");
});

app.listen(port);
console.log(`🚀 listening on http://localhost:${port}0/`);