FROM amazonlinux

ADD etc/nodesource.gpg.key /etc

WORKDIR /tmp

RUN yum -y install gcc-c++ && \
    rpm --import /etc/nodesource.gpg.key && \
    curl --location --output ns.rpm https://https://rpm.nodesource.com/pub_12.x/el/8/x86_64/nodejs-12.16.1-1nodesource.x86_64.rpm && \
    rpm --checksig ns.rpm && \
    rpm --install --force ns.rpm && \
    npm install -g npm@latest && \
    npm cache clean --force && \
    yum clean all && \
    rm --force ns.rpm

WORKDIR /build
