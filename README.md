# RECURSOS HUMANOS

Sistema de Gestion de informacion relacionada con recursos humanos.

## RECURSOS

* API 
    * Metodos Http para consumirlo desde las vistas de usuario.
* Aplicaciones
    * Perfiles necesarios para el sistema.
    * En ./server/routes se encuentran el codigo de la API. (area,cargos,etc.) 
* Iconos
    * Iconos utilizados.
* Imagenes
    * Imagenes utilizadas.
* Guias
    * Guia - Arquitectura de Software basada en Microservicios para Desarrollo de Aplicaciones Web.pdf

    * INFORME TECNICO JUL2018.pdf

## DESPLEGAR APLICACION

Es necesario instalar las dependencias y se creara un folder "node_modules/" a la altura de server, perfil1, perfil2 ...

```shell
$ cd Aplicaciones/
Aplicaciones$ node server/server.js 
```

como node se encuentra el archivo package.json necesitamos ejecutar el comando de arriba.

para ejecutar todas las aplicaciones debera tener instalado PM2 ubicarse altura de server.

```shell
Aplicaciones$ pm2 start settings.pm2.json
```

Deberan estar ejecutandose los siguientes aplicativos.

### API  
    127.0.0.1:3377
### PERFIL1 SERVIDOR PUBLICO 
    127.0.0.1:5100
### PERFIL2 INMEDIATO SUPERIOR 
    127.0.0.1:5200
### PERFIL3 ADMINISTRACION DE PERSONAL 
    127.0.0.1:5300
### PERFIL4 CONTROL BIOMETRICO 
    127.0.0.1:5400
### PERFIL5 CONTRATACIONES 
    127.0.0.1:5500
### PERFIL6 SUPERVISION GENERAL 
    127.0.0.1:5600
### PERFIL7 SISTEMAS
    127.0.0.1:5700


por lo que es necesario que los puertos en el sistema no esten siendo utilizados, aunque pueden ser modificados en los directorios "dist" y "server" dentro de cada perfil

> dist>assets>config.json

> server>config.yml

<hr>
alanwalter45@gmail.com
