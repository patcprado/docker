FROM ubuntu:latest

# Atualize o sistema e instale dependências básicas
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    lsb-release \
    software-properties-common

# Instale Node.js (última versão)
RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash - && \
    apt-get install -y nodejs

# Instale Git
RUN apt-get install -y git

# Instale Docker
RUN curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh

# Defina o diretório de trabalho
WORKDIR /app

# Copie o código da aplicação para o contêiner
COPY . .

# Comando padrão para iniciar o contêiner
CMD ["bash"]