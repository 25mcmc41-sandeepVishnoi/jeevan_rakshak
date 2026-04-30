import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => ({ status: "ok", service: "api-server" }));

app.get("/api/v1/admin/dashboard", async () => ({
  activeTrips: 0,
  onlineDrivers: 0,
  avgResponseTimeMinutes: 0
}));

app.post("/api/v1/auth/login", async () => ({
  message: "OTP requested"
}));

app.post("/api/v1/auth/verify-otp", async () => ({
  accessToken: "replace-in-implementation",
  refreshToken: "replace-in-implementation"
}));

app.post("/api/v1/bookings/book", async () => ({
  bookingId: "replace-in-implementation",
  status: "REQUESTED"
}));

const bootstrap = async () => {
  await app.listen({ host: "0.0.0.0", port: Number(process.env.PORT ?? 4000) });
};

bootstrap().catch((err) => {
  app.log.error(err);
  process.exit(1);
});
