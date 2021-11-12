import { setupServer } from "msw/node";

const server = setupServer();

server.listen({ onUnhandledRequest: "warn" });
console.info("🔶 Mock server running");

process.once("SIGINT", 