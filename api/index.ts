import serverless from "serverless-http";
import app from "../src/api/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = serverless(app as any);

export default handler;
