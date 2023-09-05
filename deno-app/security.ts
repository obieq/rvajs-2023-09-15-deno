import { sleep } from "https://deno.land/x/sleep/mod.ts";

console.info("\n🥁 getting environment variable");
console.info(Deno.env.get("GOPATH")); // --allow-env

console.info("\n🥁 making system call");
console.info(Deno.osRelease()); // --allow-sys

// console.warn(Date.now()); // --deny-hrtime
// await sleep(1);
// console.warn(Date.now());

console.info("\n🥁 read file ./deno-app/logger/enums.ts");
const file = await Deno.open("./deno-app/logger/enums.ts"); // --allow-read
await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });

console.info("\n🥁 child proc");
const proc = await new Deno.Command("echo", { args: ["hello", "world"] })
  .output();
const td = new TextDecoder();
const out = td.decode(proc.stdout).trim();
console.info(`STDOUT ==> '${out}'`);
