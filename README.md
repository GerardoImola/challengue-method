# challengue-method


¡Bienvenido al repositorio de nuestra aplicación web Method!

## Descripción del proyecto


En la estructura del proyecto se encontrará un directorio llamado "pages", donde cada una de las páginas del proyecto estará organizada. Luego, habrá otro directorio denominado "components", donde se encontrarán los componentes utilizados en la aplicación. Estos componentes fueron creados de manera modular, cada uno con una funcionalidad detallada.

Además, existe una carpeta llamada "interfaces" que contiene las interfaces utilizadas en el proyecto, y otra llamada "services" donde se encuentran los servicios utilizados en la aplicación. En este caso, el servicio utilizado es el de "movie", el cual realiza consultas a la base de datos de Firebase. Esta base de datos contiene películas que han sido extraídas de la API https://api.themoviedb.org/3/movie/.

También se encuentra el directorio "router", donde se encuentran las rutas de la página. En este directorio, se renderiza inicialmente la página principal "home", y luego se renderizan otras páginas dependiendo de la película que se seleccione.

Siguiendo el diseño establecido, se ha integrado Angular Material para gestionar el diseño de la aplicación. Esto permite renderizar una tabla con un buscador que permite filtrar por título de manera efectiva.

##Características

- Inicio: los usuarios pueden buscar películas por título. Una interfaz de usuario intuitiva impulsada por Material-UI hace que la navegación sea sencilla.
- Lista de detalles: los usuarios pueden ver los detalles de cada película.
- Diseño responsivo: la aplicación es responsiva y se adapta a varios tamaños de pantalla, brindando una experiencia consistente tanto en dispositivos de escritorio como móviles.
- Interfaz fácil de usar: priorizamos la experiencia del usuario al ofrecer un diseño limpio e intuitivo, elementos interactivos y transiciones fluidas.

## Empezando

Para configurar y ejecutar la interfaz localmente, siga estos pasos:

1. Clona este repositorio en tu máquina local.
2. Instale las dependencias del proyecto usando npm install o Yarn install.
3. Ejecute el servidor de desarrollo usando npm run start o Yarn dev.
5. Acceda a la aplicación en su navegador web en http://localhost:4200.

## Servidor de desarrollo

Ejecute `ngserve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

##Andamiaje de código

Ejecute `ng generate componente nombre-componente` para generar un nuevo componente. También puede usar `ng generar directiva|tubería|servicio|clase|guardia|interfaz|enum|módulo`.

##Construir

Ejecute `ng build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma] (https://karma-runner.github.io).

## Ejecución de pruebas de un extremo a otro

Ejecute `ng e2e` para ejecutar las pruebas de un extremo a otro a través de una plataforma de su elección. Para utilizar este comando, primero debe agregar un paquete que implemente capacidades de prueba de un extremo a otro.

Nuestra interfaz está impulsada por tecnologías y bibliotecas de vanguardia, que incluyen:

- Angular 17: Construcción de interfaces de usuario dinámicas e interactivas.
- Material UI: proporciona componentes de UI hermosos y personalizables.
- Typecript: le permite escribir código más mantenible y escalable al detectar errores en el momento de la compilación.


## Información de versión

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 17.1.2.

##Autor

- Imola Gerardo
- Linkedin - [/gerardo-imola](https://www.linkedin.com/in/gerardo-imola/)
