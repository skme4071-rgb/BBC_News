import { Server } from "socket.io";
const envFile =
    process.env.NODE_ENV === "production"
        ? ".env.production"
        : ".env";

export default (server) => {

    const io = new Server(server, {
        cors: {
            origin: "*",
        }
    });

    io.on("connection", (socket) => {
        console.log("A user connected");

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });

}