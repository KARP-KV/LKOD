# Opendata Karlovarského kraje

- Web: https://datazapad.cz
- Katalog: https://open.datazapad.cz/katalog.jsonld
- NKOD: https://data.gov.cz/datov%C3%A9-sady
- NKOD (KV): https://data.gov.cz/datov%C3%A9-sady?poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forg%C3%A1n-ve%C5%99ejn%C3%A9-moci%2F70889546

## Overview

```mermaid
flowchart TB
    subgraph External
        VISITORS["VISITOR(S)"]
        NKOD["NKOD<br/>data.gov.cz"]
    end

    subgraph Management
        EDITORS["EDITOR(S)"]
        DATAKHK["DATAKV<br/>(ARCGIS)<br/>datazapad.cz"]
    end

    subgraph Pipeline
        APPLICATION["APPLICATION"]
        LKOD["LKOD<br/>open.datazapad.cz"]
        BUILD["BUILD"]
        DEPLOY["DEPLOY"]
    end

    subgraph GitHub
        SOURCE["SOURCE CODE"]
        GH["GITHUB"]
        ACTIONS["GITHUB ACTIONS<br/>CRON"]
    end

    EDITORS -->|manage| DATAKHK
    VISITORS -->|visit| DATAKHK
    DATAKHK -->|fetch → transform → store| APPLICATION
    APPLICATION --> LKOD
    LKOD --> BUILD
    BUILD --> DEPLOY
    NKOD -->|download| LKOD
    ACTIONS -->|run| DEPLOY
    SOURCE -->|push code| GH
    GH -->|dispatch| ACTIONS
```

## Development

**Tech stack**

- Node.js
- JavaScript
- TypeScript
- ECMAScript (https://github.com/standard-things/esm)

**Workflow**

- Source code on Github (https://github.com)
- Deployments on Vercel (https://vercel.com)

**Guidelines**

- Install dependencies via `make install`
- Build LKOD via `make build`
  - Download data from ArcGIS Hub via `make sync`
  - Transfer ArcGIS Hub data to NKOD data via `make transform`
  - Create LKOD via `make generata`

## Configuration

There is a file called `config.ts` in root of this project. Take a look and edit whatever you want.

## Documentation

## Index

- NKOD = `Národní katalog otevřených dat`
- LKOD = `Lokální katalog otevřených dat`
- KV = `Karlovarský kraj`

## Credits

This package is currently maintained by these authors.

<a href="https://github.com/f3l1x">
    <img width="80" height="80" src="https://avatars2.githubusercontent.com/u/538058?v=3&s=80">
</a>
