---
sidebar_position: 1
---

# Introduction

**L'application Loufok** est une application web permettant la conception collaborative d'un court récit à la manière d'un **[cadavre exquis](https://fr.wikipedia.org/wiki/Cadavre_exquis)**.

## Côté utilisateur

L'application permet aux utilisateurs de se connecter et de participer une fois à la conception d'un cadavre exquis via une contribution de 50 à 280 caractères.

Si un cadavre exquis est en cours, l'utilisateur peut y participer. Il n'aura accès à aucune contribution excepté la sienne et une choisie aléatoirement. Afin de conserver le principe d'un cadavre exquis, la majeure partie du récit lui est masquée.

L'utilisateur peut aussi consulter dans sa totalitée le dernier cadavre exquis en date au quel il à participer.

## Côté administrateur

Les administrateurs de l'application sont à l'origine des projets d'écritures.
Un administrateur est responsable de la création des cadavre exquis qui comporte :
- titre du cadavre
- date de début
- date de fin
- nombre de contributions maximum
- première contribution
Ils choississent la première contribution du cadavre pour diriger la direction du récit.

## Modèle MVC

L'application s'organise autour d'un fonctionnement **[Model Vue Controller](https://developer.mozilla.org/fr/docs/Glossary/MVC)**.
Le modèle de MVC utilisé est celui fournit par M. Louet.

Le stockage des données se font sur une base de donnée MySQL.

## Entités

Une entité représente souvent une table de base de données ou une classe PHP qui correspond à une table dans la base de données. Cette entité contient les méthodes nécessaires pour interagir avec les données de cette table.

## Modèles


Le modèle dans l'architecture MVC représente la logique métier et les données de l'application. Il gère l'accès, la modification et la manipulation des données, faisant l'intermédiaire entre la **vue** et le **contrôleur**. Le modèle assure ainsi la cohérence et l'intégrité des informations manipulées par l'application.

Toutes les méthodes retrouvées dans les modèles sont détaillées dans cette documentation.