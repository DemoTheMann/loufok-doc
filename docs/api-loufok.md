---
sidebar_position: 3
---

# API Loufok

Une API Loufok est mise à disposition afin de récupérer les données liées aux Cadavres Exquis sous format JSON pour but d'être exploitées par d'autres applications.


### getCadavres

`loufok/API/cadavres`

Cette route d'API ne prend pas de paramètres.

Elle renvoit en format _JSON_ un tableau associatif contenant touts les Cadavres Exquis présent sur la base de données.

Chaque Cadavre Exquis est lui aussi présenté sous la forme d'un tableau associatif contenant toutes les informations liées à ce Cadavre, mais il contient aussi deux autres tableaux :
 - L'un comportant la liste des contributions de ce Cadavre, fournit dans l'ordre de soumissions.
 - L'autre comportant la liste des joueurs ayant participés à ce Cadavre.

#### Cas d'utilisations

    - Une application tierce cherche à récolter des informations sur les Cadavres Exquis de l'application Loufok.
    - Une application tierce cherche à récupérer l'entièretée des contributions de Cadavres Exquis dans l'application Loufok.
    - Une application tierce cherche à récupérer les utilisateurs ayant contribués à des Cadavres Exquis sur l'application Loufok.

### getCadavreById

`loufok/API/cadavres/{id}`

Cette route d'API prend en paramètre un identifiant ( _int_ ) de Cadavre Exquis.

Elle renvoit en format _JSON_ un tableau associatif contenant toutes les informations liées à ce Cadavre, mais il contient aussi deux autres tableaux :
 - L'un comportant la liste des contributions de ce Cadavre, fournit dans l'ordre de soumissions.
 - L'autre comportant la liste des joueurs ayant participés à ce Cadavre.

#### Cas d'utilisations

    - Une application tierce cherche à récolter des informations sur un Cadavres Exquis en particulier de l'application Loufok.
    - Une application tierce cherche à récupérer l'entièretée des contributions pour un Cadavres Exquis en particulier dans l'application Loufok.
    - Une application tierce cherche à récupérer les utilisateurs ayant contribués à un Cadavres Exquis en pariculier sur l'application Loufok.

### likeCadavreById

`loufok/API/cadavres/{id}/like`

Cette route d'API prend en paramètre un identifiant ( _int_ ) de Cadavre Exquis.

Cette méthode ne renvoit rien, elle s'occupe seulement d'incrémenter le conteur de mentions `j'aime` dans le tuple d'un Cadavre Exquis donné, identifié par son id ( _int_ ).

#### Cas d'utilisations

    - Une application tierce incorpore le fait pour un lecteur du Cadavre Exquis de mentioner si il l'apprécie ou non.