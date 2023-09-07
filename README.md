# DUDAS_SUGERENCIAS_REPORTES

En este repositorio se encuentra el código fuente y la documentación de cómo realizar mantenimiento de la página de DUDAS SUGERENCIAS REPORTES. A continuación se muestran detalles del uso de la aplicación y el funcionamiento del código.

## CÓMO FUNCIONA

La página de dudas, sugerencias y reportes tiene como finalidad obtener los datos de algunas solicitudes realizadas por los usuarios de las diferentes Bibliotecas Digitales. Esta Web App estará enbebida en cada uno de los Sites, tanto de Instructores como de Técnicos, y será accesible mediante un botón intedrado, mientras la página está oculta en el Site por motivos de diseño.

### PÁGINA DE DUDAS SUGERENCIAS REPORTES

El link que se encuentra embebido en el Site de la Biblioteca Digital de Instructores se encuentra en el siguiente [enlace](https://script.google.com/a/macros/ferreyros.com.pe/s/AKfycbxMKr4WjgWMTvkCArBgiN7y-BYd6-sGvJhnY5xKrGvXj3RT4k3N5PR7wm0vPtWPm7JZ0g/exec). El Google Spreadsheets que se usa como base de datos para que los datos ingresados en la aplicación se puedan guardar y organizar correctamente se encuentra localizado en el siguiente [enlace](https://docs.google.com/spreadsheets/d/1H-iEnlv7Eh_k9Gmfa--rzfIsmyDwf0DDY0ytam8hCKo/edit#gid=0). Cuando el usuario ingrese y otorgue todos los permisos necesarios a la Web App, observará la siguiente interface:

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/329fe805-8265-40b3-8d10-7c2f646c1756)

El llenado de todos los campos es obligatorio. Es preciso mencionar que la información que se recolecta como parte del acceso del usuario a la Web App es la hora en la que ingresó y su correo electrónico. No se almacenan datos mediante cookies para salvaguardar la privacidad de los datos personales del usuario. Si se desea conocer a detalle la información y cómo se almacena, debe ingresar al link del párrafo anterior que lo dirige al archivo de Google Spreadsheets que se encuentra en el siguiente [enlace](https://docs.google.com/spreadsheets/d/1H-iEnlv7Eh_k9Gmfa--rzfIsmyDwf0DDY0ytam8hCKo/edit#gid=0). 

Luego de ingresar, el usuario debe seleccionar el tipo de mensaje que desea dejar y en el siguiente campo, debe ingresar el contenido del mensaje. Al realizar el envío, dos correos se mandarán automáticamente; uno dirigido a la persona que envía la duda, sugeerencia o reporte, y otra dirigida al equipo de DI y a la cuenta coporativa de DI. El contenido de los correos para el equipo de DI y la persona que envió el mensaje, se muestra a continuación en ese orden:

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/d4da5781-2392-4d0b-80fc-ef1495fbef37)

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/4d2765d9-9449-4ee7-b654-e960a4bdaef2)

Si es que intenta ingresar sin haber completado los campos de los desplegables y sin haber marcado el casillero de verificación, el usuario visualizará una advertencia flotante en los campos que ha omitido, lo cual se muestra a continuación:

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/e90ff1d4-7f09-4963-a1e5-0694fc73ff18)

Cuando el registro sea exitoso, se mostrará el mensaje mostrado en la imagen inferior, para que pueda recargar la página si es que requiere enviar otro mensaje, o pueda seguir navegando en las otras páginas de la Biblioteca Digital.

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/95b8e25f-f4b3-4e13-84f3-32792af1b568)

### ACERCA DEL CÓDIGO

Se cuenta con dos archivos para el funcionamiento de esta implementación. Son los archivos Code.gs e Index.html. Se muestra a continuación donde se ubican dentro del Editor de Secuencias de Comandos del archivo de Google Spreadsheets que se usa como base de datos y a la que se puede acceder mediante el siguiente [enlace](https://docs.google.com/spreadsheets/d/1H-iEnlv7Eh_k9Gmfa--rzfIsmyDwf0DDY0ytam8hCKo/edit#gid=0).

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/6fce6ecf-8a6a-4962-9e5e-32dec4623f80)

Para poder agregar funcionalidades relacionadas a acciones dentro del Google Spreadsheets, como por ejemplo, adicionar nuevos campos dentro de la hoja, quitar esos campos, o nuevas funcionalidades de edición de filas y columnas, se debe realizar en el archivo Code.gs desde lo que comprende desde la línea 1 del archivo:

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/2d45027f-9ade-4031-ae1b-c2957813002f)

y también la sección de <script> en el archivo Index.html, que contiene los comandos de JavaScript para la WebApp, lo que comprende desde la línea 102 hasta la línea 125.

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/63ca43fa-5a09-41fb-8929-b08b6b6a53a5)

Por otro lado, si es que se desea modificar el diseño o el formato de la Web App, se pueden cambiar las secciones de CSS y HTML del archivo de Index.html, que se encuentran en las líneas que no contienen la sección de <script> mencionada anteriormente. Ambas secciones se encuentran codificadas en <head> y <body> como se muestra a continuación:

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/3344bb7a-8a5d-42cf-89d5-42e1f3bb8a51)


![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/03eddb58-1813-4e78-8ef2-6aa6756a244d)

Finalmente, se hace mención a los diferentes <em>source</em> que se usan para poder mejorar la presentación y garantizar el funcionamiento de la Web App. Estos se encuentran en la parte superior e inferior del código. El <em>source</em> de Bootstrap que se usa para el diseño, se incluye mendiante el uso de <link> y al final mediante <script src>; mientras que ajax para JavaScript se encuentra referenciado al final mediante <script src>.

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/8f657de8-aa74-40f8-aacf-793556d63c4b)

![image](https://github.com/DISENOINSTRUCCIONALFSAA/DUDAS_SUGERENCIAS_REPORTES/assets/144281326/4ad889e4-f459-44eb-9fe0-fede12de0c7b)
