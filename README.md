<!-- ![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png) -->

# **COUNTRIES** | Proyecto Individual

## **⚠️ IMPORTANTE**

Esta API fue creada con las dependencias y sus versiones que se presentan a continuacion:

-  **npm**: 6.14.16 o mayor
-  **nodejs**: 12.18.3 o mayor
-  **express**: 12.18.3 o mayor
-  **sequelize**: 12.18.3 o mayor
-  **nodemon**: 12.18.3 o mayor
-  **morgan**: 12.18.3 o mayor
-  **cors**: 12.18.3 o mayor
-  **dotenv**: 12.18.3 o mayor
-  **express-validator**: 12.18.3 o mayor

Para verificar que versiónes de Node y NPM tienes instaladas, ejecuta estos comandos en tu terminal:

```bash
node --version
npm --version
```

---
## **📋 SOBRE LA API**

En este proyecto la API de Countries **correrá localmente desde tu computadora**. De esta manera, siempre tendrás disponible los datos de forma local para poder realizar tu proyecto.

Para lograr que esta API funcione desde tu computadora deberás dirigirte, desde tu terminal, a la carpeta **`server`** y ejecutar el comando:

```bash
   npm start
```

Podrás ver el siguiente mensaje en tu terminal.

``` 
[0] 
[0] > server@1.0.0 server
[0] > nodemon index.js
[0] 
[1] 
[1] > server@1.0.0 api
[1] > echo 'Local API listening on PORT 5000' & json-server --watch api/db.json -p 5000 -q
[1] 
[1] 'Local API listening on PORT 5000' 
[0] [nodemon] 2.0.22
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node index.js`
[0] Server listening on port 3001

```

Esto significa que la API ya está corriendo en tu computadora en el puerto 5000. Es decir que podrás acceder a ella desde la URL **`http://localhost:5000`**. Para poder comunicarte con esta API deberás dejar la terminal levantada.

**IMPORTANTE**
No debes modificar **NINGÚN** archivo dentro de la carpeta **`/server/api`**. Cualquier modificación en estos archivos puede alterar el funcionamiento normal de la API y de tu proyecto.

<br />

---


## **📋 PARA COMENZAR...**

1. Clona este repositorio para tenerlo un tu computadora de manera local.

2. Ejecuta el comando **npm install ci** para instalar todas las dependencias necesarias para correr el proyecto.

3. En la carpeta raiz deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`countries`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

---

### **Único end-point que se puede utilizar**

-  [**http://localhost:5000/countries**]

<br />

### **🖱 BASE DE DATOS**

Deberás crear dos modelos para tu base de datos. Una será para los países y la otra será para las actividades turísticas (pueden llevar el nombre que tu quieras). La relación entre ambos modelos debe ser de muchos a muchos. A continuación te dejamos las propiedades que debe tener cada modelo. Aquellas marcadas con un asterísco son obligatorias.

**📍 MODELO 1 | country**

-  ID (Código de tres letras). \*
-  Nombre. \*
-  Imagen de la bandera. \*
-  Continente. \*
-  Capital. \*
-  Subregión.
-  Área.
-  Población. \*

<br />

**📍 MODELO 2 | activity**

-  ID. \*
-  Nombre. \*
-  Dificultad (número del 1 al 5). \*
-  Duración (en horas).
-  Temporada (Verano, Otoño, Invierno o Primavera). \*

<br />

---

<br />

### **🖱 BACK-END**

Para esta parte deberás construir un servidor utilizando **NodeJS** y **Express**. Tendrás que conectarlo con tu base de datos mediante **Sequelize**.

En una primera instancia, al levantar tu servidor se deberá hacer una petición a la API, y se tendrán que guardar todos los países dentro de tu base de datos. Una vez guardados, toda tu aplicación utilizará la información sólo de tu base de datos.

Tu servidor deberá contar con las siguientes rutas:

#### **📍 GET | /countries**

-  Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

#### **📍 GET | /countries/:idPais**

-  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
-  El país es recibido por parámetro (ID de tres letras del país).
-  Tiene que incluir los datos de las actividades turísticas asociadas a este país.

#### **📍 GET | /countries/name?="..."**

-  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el país, debe mostrar un mensaje adecuado.

#### **📍 POST | /activities**

-  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

#### **📍 GET | /activities**

-  Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
