// make async http request
console.debug("\n🥕 making http request via top-level await\n");

const res = await fetch("https://swapi.dev/api/people/1");
const body: Record<string | number | symbol, never> = await res.json();

// console.info("http response:", JSON.stringify(body).slice(0, 52), "... }");
console.info("http response:", body);
