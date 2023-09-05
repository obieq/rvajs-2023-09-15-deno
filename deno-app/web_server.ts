// start web server
console.debug("\n🦀 starting web server\n");
let numRequests = 0;

Deno.serve((req: Request) => {
  numRequests++;
  const responseBody = JSON.stringify({
    userAgent: req.headers.get('User-Agent'),
    requestNum: numRequests
});

  return new Response(`${responseBody}\n`, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
});
