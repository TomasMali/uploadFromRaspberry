#FROM nginx:1.17.1-alpine

#COPY /demo/dist/upload  /usr/share/nginx/html

 #Stage 1
 


 #Stage 2 only extract the runable


 FROM nginx:alpine

 COPY /demo/dist /usr/share/nginx/html