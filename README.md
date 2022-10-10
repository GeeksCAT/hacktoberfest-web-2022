# hacktoberfest.geekscat.org

Landing per l'esdeveniment que farem aquest oct'23 vinculat al Hacktoberfest.

## Dev

```
npm install
npm run dev
```

## VSCode

Per a _Vue 3_, és recomenable desactivar l'extenssió _Vetur_ i activar _Volar_.

## Versions

El projecte inclou un changelog. Mentres la versió està oberta, tots els evolutius es registren sota el tag _Unreleased_.

Passos a seguir per a tancar una versió:

- S'incrementa el número de versió al _package.json_
- Es substitueix la secció de _unreleased_ del changelog per la de la nova versió. Exemple: _## [0.0.1] - 2022-10-09_
- S'afegeix nova secció _unreleased_ per als nous evolutius
- Es comiten els canvis.
- Es crea un _tag_ de _git_
