---
sidebar_position: 2
---

# API Loufok

Une API Loufok est mise à disposition afin de récupérer les données liées aux cadavre exquis sous format JSON afin d'être exploitées par d'autres applications.


### getCadavres

`loufok/api/cadavres`

Cette route d'API est appelée en méthode `GET` et ne prend pas de paramètres.

Elle renvoie en format _JSON_ un tableau associatif contenant tous les cadavres exquis présents sur la base de données.

Chaque cadavre exquis est présenté sous la forme d'un objet _JSON_ contenant toutes les informations liées à ce cadavre exquis, plus la première contribution du cadavre écrite par l'administrateur.

#### Cas d'utilisation

    - Une application tierce cherche à récolter des informations sur les cadavres exquis de l'application Loufok.


### getCadavreById

`loufok/api/cadavre/{id}`

Cette route d'API est appelée en méthode `GET` prend en paramètre un identifiant ( _int_ ) de cadavre exquis.

Elle renvoie en format _JSON_ un objet contenant toutes les informations liées à ce cadavre exquis, mais il contient aussi deux autres tableaux :
 - L'un comportant la liste des contributions de ce cadavre exquis dans l'ordre de publication.
 - L'autre comportant la liste des joueurs ayant participés à ce cadavre exquis.

#### Cas d'utilisation

    - Une application tierce cherche à récolter des informations sur un cadavre exquis spécifique de l'application Loufok.
    - Une application tierce cherche à récupérer l'entièreté des contributions sur un cadavre exquis spécifique dans l'application Loufok.
    - Une application tierce cherche à récupérer les utilisateurs ayant contribué à un cadavre exquis spécifique sur l'application Loufok.

### likeCadavreById

`loufok/api/cadavre/like`

Cette route d'API est appelée en méthode `POST` et prend en paramètre un identifiant ( _int_ ) de cadavre exquis dans le body de la requête.

`{ 'idCadavre': {id} }`

Cette méthode ne renvoie rien, elle s'occupe seulement d'incrémenter le conteur de mentions `j'aime` dans le tuple d'un cadavre exquis donné, identifié par son id ( _int_ ).

#### Cas d'utilisation

    - Une application tierce intègre la possibilité à l'utilisateur de laisser un j'aime pour un cadavre exquis qu'il a apprécié.