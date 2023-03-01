---
title: Evitar crear archivos test en Angular
date: 2023-03-01
excerpt: Cómo crear cualquier tipo de elemento en Angular sin el archivo de pruebas y sin modificar el comando de creación.
---

En el archivo CSS correspondiente creamos el siguiente código:

```
.blink {
  animation: blinking 1s step-start infinite;
}

@keyframes blinking {
  0% {
    opacity: 1;
  }
  5% {
    opacity: 0.9;
  }
  10% {
    opacity: 0.8;
  }
  15% {
    opacity: 0.7;
  }
  20% {
    opacity: 0.6;
  }
  25% {
    opacity: 0.5;
  }
  30% {
    opacity: 0.4;
  }
  35% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.2;
  }
  45% {
    opacity: 0.1;
  }
  50% {
    opacity: 0;
  }
  55% {
    opacity: 0.1;
  }
  60% {
    opacity: 0.2;
  }
  65% {
    opacity: 0.3;
  }
  70% {
    opacity: 0.4;
  }
  75% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.6;
  }
  85% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.8;
  }
  95% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
```

Luego creamos en el archivo HTML un elemento con la clase **blink**:

```
<span class="blink">_</span>
```
