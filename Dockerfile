FROM node:22.13.1

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /dev-tech-blog-ui

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN npm i -g @angular/cli@19.1.5

RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]