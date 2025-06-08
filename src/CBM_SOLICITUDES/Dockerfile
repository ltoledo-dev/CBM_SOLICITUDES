FROM node:22-alpine AS build
WORKDIR /app
COPY CBM_SOLICITUDES/package*.json CBM_SOLICITUDES/tsconfig.json ./
RUN npm install
COPY CBM_SOLICITUDES/. ./
RUN npx tsc

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["node", "dist/index.js"]