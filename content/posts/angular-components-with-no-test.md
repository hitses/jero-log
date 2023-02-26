---
title: Evitar crear archivos test en Angular Components con CLI
date: 2023-02-26
excerpt: Cómo crear componentes en Angular sin el archivo de pruebas sin modificar el comando de creación.
---

Se comprueba que el proyecto no se encuentra en estado de ejecución.

Dentro del proyecto de Angular, se accede al archivo **angular.json** en la raíz de directorios.

Se busca con Command + F (MacOs) o Ctrl + F (Windows)

```
"@schematics/angular:component"
```

Dentro del objeto se añade la siguiente línea de código:

```
"skipTests": true
```

Guardar.