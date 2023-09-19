---
sidebar_position: 11
---

# Local Dev Setup

### Local Debian Setup

##### 1: Update the apt package index and install packages to allow apt to use a repository over HTTPS:

```
$ sudo apt-get update
$ sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

##### 2: Add Docker’s official GPG key:

```
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

##### 3: Adding docker apt repository:

```
$ echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

##### 4: Installing docker package using apt:

```
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

##### 5. Giving permission to user for docker and reboot the system

```
$ sudo usermod -aG docker $USER
$ reboot
```

##### 6: Verifying docker installation and working:

```
$ sudo docker run hello-world
```

### Docker install on Ubuntu

##### 1: Update the apt package index and install packages to allow apt to use a repository over HTTPS:

```
$ sudo apt-get update
$ sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

##### 2: Add Docker’s official GPG key:

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

##### 3: Adding docker apt repository:

```
$ echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

##### 4: Installing docker package using apt:

```
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

##### 5. Giving permission to user for docker and reboot the system

```
$ sudo usermod -aG docker $USER
$ reboot
```

##### 6: Verifying docker installation and working:

```
$ sudo docker run hello-world
```

### Install docker on windows

##### To download docker binary [Click here](https://docs.docker.com/desktop/windows/install/)

### Install docker on Mac

##### To download docker binary [Click here](https://docs.docker.com/desktop/mac/install/)

# Install docker compose

##### To download docker binary [Click here](https://docs.docker.com/compose/install/)

# creating folder under home directory:-

example: supports-app

```
copy docker compose file in directory:-
version: "3.0"
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.0.1
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - 2181:2181

  kafka:
    image: confluentinc/cp-kafka:7.0.1
    depends_on:
      - zookeeper
    ports:
      - 29092:29092
      - 9092:9092
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,PLAINTEXT_HOST://localhost:29092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  elasticsearch:
    container_name: es01
    image: elasticsearch:7.4.2
    environment:
      - node.name=es01
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - /home/gurjot/elasticsearch/es-data:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
      - 9300:9300
    networks:
      - elastic
    restart: always

networks:
  elastic:
    driver: bridge
```

```
create a folder under file with name:
es-data
```

```
edit the path of esdata:-
 ~/support-apps/es-data.
```
