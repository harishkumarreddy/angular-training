# get linux ubuntu distribution
FROM ubuntu:latest
USER root

# install nodejs16 and @angular/cli13
RUN apt update -y && apt install -y curl wget
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - 
RUN apt install -y nodejs
# RUN apt install npm -y
RUN npm config rm proxy
RUN npm config rm https-proxy
RUN npm install -g @angular/cli@13 -y

# install chrome to run e2e tests
# RUN apt-get install -y wget && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && apt-get install -y ./google-chrome-stable_current_amd64.deb

# install git
RUN apt install -y git

# print the angular version
RUN ng version

# setup working directory as /project
WORKDIR /project


# make this as a interactive shell
CMD ["/bin/bash"]

# you need to run the comando below to build the image
# docker build --pull --rm -f "Dockerfile" -t dng13:latest "."