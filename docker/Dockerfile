FROM node:18-alpine AS base

ARG APP_PORT=3000
ARG APP_NAME=portfolio
ARG VERSION=1.0.0
ARG MAINTAINER_EMAIL=your-email@example.com

LABEL maintainer="${MAINTAINER_EMAIL}"
LABEL project="${APP_NAME}"
LABEL version="${VERSION}"
LABEL description="Astro Portfolio Application"

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
# Install all dependencies, including devDependencies, for building Astro
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

ARG APP_PORT=3000

ENV NODE_ENV production

RUN apk add --no-cache wget && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 astro

# Copy Astro's static build output
COPY --from=builder /app/dist ./dist

RUN npm install -g serve

USER astro

EXPOSE ${APP_PORT}

ENV PORT=${APP_PORT}

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:${APP_PORT} || exit 1

CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
