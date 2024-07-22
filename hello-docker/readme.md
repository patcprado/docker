#Inicialize um novo projeto no Node.js:
npm init -y
#Instale o Express.js:
npm install express

docker build -t img-volume-log .

#Guarda log da aplocação!
docker run -d --name container-volume-log -p 3000:3000 -v D:\\Users\\Patricia\\desen\\_BootCamping\\docker\\hello-docker\\logs:/usr/src/app/logs img-volume-log

docker stop container-volume-log
docker rm container-volume-log

docker ps
winpty docker exec -it container-volume-log bash
cat /usr/src/app/logs/app.logs

http://localhost:3000/
