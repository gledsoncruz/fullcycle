FROM node:15

# WORKDIR /usr/src/app
# COPY package.json /tmp/

# RUN cd /tmp && npm install
# RUN cp -R /tmp/node_modules /usr/src/app

# COPY . .

RUN ["mkdir", "/install"]

ADD ["./package.json", "/install"]
WORKDIR /install
RUN npm install --verbose
ENV NODE_PATH=/install/node_modules

WORKDIR /usr/src/app
# COPY wait-for-it.sh /wait-for-it.sh
COPY . .
RUN chmod +x /usr/src/app/wait-for-it.sh

# CMD [ "node", "index.js" ]
