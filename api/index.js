import { createServer } from "http";
import directus from "../directus";

const server = createServer(directus);

export default server;
