---
sidebar_position: 4
---

# Model Contribution

Le Model Contribution gère les méthodes liées aux contributions, notamment en fonction de l"utilisateur et du cadavre exquis.

## getInstance()

La méthode getInstance() ne prend pas de paramètres et renvoie l'instance de la classe statique ContributionModel.

```js title="ContributionController.php"
$contribModel = ContributionModel::getInstance();
```

## getRandom()

La méthode getRandom() prend en paramètre l'identifiant d'un joueur ( _int_ ) et récupère la contribution aléatoire qui lui est allouée pour le cadavre exquis en cours.

Si la contribution choisit aléatoirement existe, renvoie la contribution en question ( _array_ ).
Si la contribution choisit aléatoirement n'existe pas, renvoie `null`.

Cette méthode fait appel aux entités :
- `Contribution`
- `ContributionAléatoire`

Cette méthode fait aussi appel au modèle :
- `CadavreModel` pour utiliser la fonction `cadavreEnCours()`

```js title="ContributionController.php"
$contribModel = ContributionModel::getInstance();
$user_id = $_SESSION['user_id'];
$randomContribution = $contribModel->getRandom($user_id);
```

## setRandom()

La méthode getRandom() prend en paramètre l'identifiant d'un joueur ( _int_ ) et lui assigne une contribution aléatoire pour le cadavre exquis en cours.

Renvoie la contribution aléatoire tout juste choisie ( _array_ ).

Cette méthode fait appel aux entités :
- `Contribution`
- `ContributionAléatoire`

Cette méthode fait aussi appel au modèle :
- `CadavreModel` pour utiliser la méthode `cadavreEnCours()`

```js title="ContributionController.php"
$contribModel = ContributionModel::getInstance();
$user_id = $_SESSION['user_id'];
$randomContribution = $contribModel->getRandom($user_id);

if(!$random){
    $random = $contribModel->setRandom($user_id);
}
```

## countContrib()

La méthode countContrib() prend en paramètre l'identifiant d'un cadavre exquis ( _int_ ) et renvoie le nombre de contributions ( _int_ ) qui lui sont attribuées.

Cette méthode fait appel à l'entité :
- `Contribution`

Cette méthode fait aussi appel au modèle :
- `CadavreModel` pour utiliser la méthode `cadavreEnCours()

```js title="ContributionController.php"
$contribModel = ContributionModel::getInstance();
$totalContrib = $contribModel->countContrib($id_cadavre);
```

## newContrib()


La méthode newContrib() enregistre une nouvelle contribution dans la base de données (table **contribution**). Elle prend en paramètres : 
- l'identifiant du joueur ( _int_ )
- le cadavre exquis en cours ( _array_ )
- le contenu textuel de la contribution ( _string_ )
- l'ordre a attribuer à la contribution ( _int_ )

Renvoie **null**, gère seulement l'insertion de la nouvelle contribution dans la base de données.

Cette méthode fait appel aux entités :
- `Contribution`
- `Cadavre`

```js title="ContributionController.php"
$contribModel = ContributionModel::getInstance();
$user_id = $_SESSION['user_id'];
$totalContrib = $contribModel->countContrib($activeCadavre_id);

$contribModel->newContrib($user_id, $activeCadavre, $texte_contribution, $totalContrib+1);
```

## getUserContrib()

La méthode getUserContrib() prend en paramètre l'identifiant d'un utilisateur ( _int_ ) pour vérifier si ce dernier a participé au cadavre exquis en cours.

Si la contribution existe, renvoie la contribution en question ( _array_ ).
Si la contribution n'existe pas, la méthode renvoie _null_.

Cette méthode fait appel aux entités :
- `Contribution`

Cette méthode fait aussi appel au modèle :
- `CadavreModel` pour utiliser la méthode `cadavreEnCours()`

```js title="ContributionController.php"
$contribModel = ContributionModel::getInstance();
$user_id = $_SESSION['user_id'];
$userContrib = $contribModel->getUserContrib($user_id);
```

## getContribs()

La méthode getContribs() prend en paramètre l'identifiant d'un cadavre exquis ( _int_ ) et renvoie toutes les contributions qui lui sont associées.

Renvoie un tableau indexé contenant des tableaux associatifs ( _array_ ) :
- `joueurs` contenant les pseudonymes des auteurs des contributions
- `contributions` contenant le contenu textuel des contributions

Cette méthode fait appel aux entités :
- `Contribution`
- `Joueur`

```js title="ContributionController.php"
$contribModel = ContributionModel::getInstance();
/* Renvoie un array d'arrays avec deux données:
 *   contributions : texte de la contribution
 *   joueurs : pseudo du joueur
 */
$contributionsContent = $contribModel->getContribs($id_cadavre);
```
