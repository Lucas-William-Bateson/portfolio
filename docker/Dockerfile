# Multi-stage build for production optimization
FROM node:18-alpine AS base

# Define build arguments
ARG APP_PORT=3000
ARG APP_NAME=portfolio
ARG VERSION=1.0.0
ARG MAINTAINER_EMAIL=your-email@example.com

# Add metadata labels
LABEL maintainer="${MAINTAINER_EMAIL}"
LABEL project="${APP_NAME}"
LABEL version="${VERSION}"
LABEL description="Next.js Portfolio Application"

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Install wget for health check and create non-root user
RUN apk add --no-cache wget && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy the static export output
COPY --from=builder /app/out ./out

# Create a simple server to serve static files
RUN npm install -g serve

USER nextjs

# Expose port 3000 (internal container port)
EXPOSE 3000

# Set the port environment variable
ENV PORT=3000

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000 || exit 1

# Start the application
CMD ["serve", "-s", "out", "-l", "3000"]