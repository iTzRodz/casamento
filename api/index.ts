// api/index.ts

import app from "./server";


export default async function handler(req: unknown, res: unknown) {
  await app.ready();
  app.server.emit("request", req, res);
}
