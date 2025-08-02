// src/index.ts
import Fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';
import fastifyJWT from '@fastify/jwt';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const fastify = Fastify({ logger: true });

// Register Postgres plugin
fastify.register(fastifyPostgres, {
  connectionString: process.env.DATABASE_URL,
});

// Register JWT plugin
fastify.register(fastifyJWT, {
  secret: process.env.JWT_SECRET!,
});

// Simple health check endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'ok' };
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: Number(process.env.PORT) || 3000, host: '0.0.0.0' });
    fastify.log.info(`Server listening on ${fastify.server.address()}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
