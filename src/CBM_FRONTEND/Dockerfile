FROM node:20-alpine AS build
WORKDIR /app
COPY CBM_FRONTEND/package*.json ./
RUN npm install
COPY CBM_FRONTEND/. .
RUN npm run build

FROM nginx:alpine AS production
COPY --from=build /app/dist/app/browser /usr/share/nginx/html
COPY CBM_FRONTEND/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
