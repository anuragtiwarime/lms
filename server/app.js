import cookieParser from "cookie-parser";
config();
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

// Middlewares
// Built-In
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());

// Server Status Check Route
app.get("/ping", (_req, res) => {
  res.send("Pong");
});

// Import all routes
import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/payments", paymentRoutes);

// Default catch all route - 404
<<<<<<< HEAD
app.all("*", (_req, res) => {
  res.send("OOPS!!! 404 Page Not Found");
=======
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!! 404 Page Not Found');
>>>>>>> d633b4d5ee50ba336ee8cbb135ed4ae13d65ebbe
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;
