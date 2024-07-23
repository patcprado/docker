#Inicialize um novo projeto no Node.js:
npm init -y
#Instale o Express.js:
npm install express

docker build -t img-volume-log .

#Comando para ver as images
docker images

#Guarda log da aplocação!
docker run -d --name container-volume-log -p 3000:3000 -v D:\\Users\\Patricia\\desen\\_BootCamping\\docker\\hello-docker\\logs:/usr/src/app/logs img-volume-log

#Para o container
docker stop container-volume-log

#Remove o container
docker rm container-volume-log

#Visualiza os caontainer que estão rodando
docker ps

#Entra no container
winpty      - ass vezes pede para inserir
docker exec -it container-volume-log bash
cat /usr/src/app/logs/app.logs

http://localhost:3000/
