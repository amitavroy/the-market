FROM node:latest

WORKDIR /home/app
# USER node
ENV PORT 3000

RUN pwd
RUN npm install next

EXPOSE 3000

ENTRYPOINT /bin/bash
