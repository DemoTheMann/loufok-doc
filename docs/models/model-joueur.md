---
sidebar_position: 3
---

# Model Joueur

Le Model Joueur gère les méthodes liées à l'utilisateur connecté lorsque c'est un joueur, ainsi que les contributions qui lui sont liées.

## getInstance()

La méthode getInstance() ne prend pas de paramètres et renvoie l'instance de la classe statique JoueurModel.

```js title="ContributionModel.php"
$joueurModel = JoueurModel::getInstance();
```

## getUserName()

La méthode getUserName() prend en paramètre l'identifiant d'un joueur (**int**) et renvoie son pseudonyme d'écrivain (nom de plume) qui sert d'identifiant.

Cette méthode fait appel a l'entité :
- `Joueur`

```js title="JoueurController.php"
$userId = $_SESSION['user_id'];
$username = $joueurModel->getUserName($userId);
```

## getLatest()

La méthode getLatest() prend en paramètre l'identifiant d'un joueur (**int**) et renvoie les informations du dernier cadavre exquis auquel il a participé.
S'il existe un cadavre exquis **terminé** auquel le joueur a participé, renvoie le cadavre exquis sous forme de tableau associatif (**array**).
S'il n'existe pas, renvoie **null**.

Cette méthode fait appel aux entités :
- `Contribution`
- `Cadavre`

Cette méthode fait aussi appel au modèle :
- `CadavreModel` pour utiliser la méthode `isCadavreOn()`

```js title="JoueurController.php"
$latestCadavreExquis = $joueurModel->getLatest($userId);
$latest = $joueurModel->getLatest($userId);
```