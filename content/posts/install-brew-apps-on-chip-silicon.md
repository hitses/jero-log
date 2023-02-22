---
title: Instalar aplicaciones Homebrew en MacOs con chip Silicon
date: 2023-02-22
excerpt: Cómo instalar aplicaciones con Homebrew en ordenadores Apple con MacOs y chip Silicon.
---

La documentación oficial de Hombrew se encuentra en su
[página web oficial](https://brew.sh/index_es).

Hace falta tener instalado Homebrew. Para comprobar que está instalado y ver su
versión, hay que utilizar el comando siguiente:

```
brew -v
```

Si no está instalado en el sistema, se debe instalar con el siguiente comando:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Para instalar paquetes con Homebrew se utiliza el siguiente comando:

```
brew install namePackage
```

Si este comando no funciona, se puede utilizar el siguiente para sistemas
basados en sistemas con chip Silicon:

```
arch -x86_64 brew install namePackage
```
