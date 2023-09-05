console.info("\nstarting!\n");
console.info(
  "\n🧰 NOTE: Deno does not have a global error handler.  Like Golang, must handle/check for an error wherever one could occur\n",
);

// deno-lint-ignore no-explicit-any
const dict: any | undefined = undefined;

try {
  console.info(dict["age"]);
} catch (e) {
  console.error("caught error:", e);
}

console.info("\nfinished!\n");
