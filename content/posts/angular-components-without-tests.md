---
title: Evitar crear archivos test en Angular
date: 2023-03-01
excerpt: Cómo crear cualquier tipo de elemento en Angular sin el archivo de pruebas y sin modificar el comando de creación.
labels:
  - Angular
---

Se comprueba que el proyecto no se encuentra en estado de ejecución.

Dentro del proyecto de Angular, se accede al archivo **angular.json** en la raíz
de directorios.

Se busca con Command + F (MacOs) o Ctrl + F (Windows) el elemento que no
queramos crear con su archivo de pruebas unitarias:

```
"@schematics/angular:component"
"@schematics/angular:class"
"@schematics/angular:directive"
"@schematics/angular:guard"
"@schematics/angular:pipe"
"@schematics/angular:service"
```

Dentro del objeto se añade la siguiente línea de código:

```
"skipTests": true
```

Guardar los cambios realizados en los archivos modificados y listo.

Se puede añadir el siguiente extracto de código en **"schematics"**:

```
"@schematics/angular:component": {
  "style": "scss",
  "skipTests": true
},
"@schematics/angular:class": {
  "skipTests": true
},
"@schematics/angular:directive": {
  "skipTests": true
},
"@schematics/angular:guard": {
  "skipTests": true
},
"@schematics/angular:pipe": {
  "skipTests": true
},
"@schematics/angular:service": {
  "skipTests": true
}
```
