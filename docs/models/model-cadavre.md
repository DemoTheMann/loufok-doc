---
sidebar_position: 1
---

# Model Cadavre

Le Model Cadavre gère les méthodes liées aux cadavres exquis, notamment en fonction de l"utilisateur.

## getInstance()

La méthode getInstance() ne prend pas de paramètres et renvoie l'instance de la classe statique CadavreModel.

```js title="AdminController.php"
$cadavreModel = CadavreModel::getInstance();
```

## periodes()

La méthode periodes() ne prend pas de paramètres et renvoie un **array** des périodes déjà occupées par des cadavres exquis existants.

Cette méthode fait appel à l'entité :
- `Cadavre`

```js title="AdminController.php"
$periodes = CadavreModel::getInstance()->periodes();
```

## titres()

La méthode titres() ne prend pas de paramètres et renvoie un **array** des titres des cadavres exquis existants.

```js title="AdminController.php"
$titres = CadavreModel::getInstance()->titres();
```

## cadavreEnCours()

La méthode cadavreEnCours() ne prend pas de paramètres et vérifie si un cadavre exquis est actuellement en cours. Renvoie un **array** du cadavre exquis en cours ou **null** s'il n'y en a pas.

Cette méthode fait appel aux entités :
- `Cadavre`
- `Contribution`

```js title="AdminController.php"
$cadavreModel = CadavreModel::getInstance();
$cadavreValide = $cadavreModel->cadavreEnCours();
```

## isCadavreOn()

La méthode isCadavreOn() prend en paramètre l'identifiant d'un cadavre exquis et vérifie s'il est toujours actif.


Si le cadavre exquis est en cours, renvoie un **array** du cadavre exquis.
Si le cadavre exquis n'est pas en cours, renvoie **null**.

Cette méthode fait appel aux entités :
- `Cadavre`
- `Contribution`

```js title="AdminController.php"
$cadavreModel = CadavreModel::getInstance();
$cadavreToujoursEnCours = $cadavreModel->isCadavreOn(int $id_cadavre);
```

## dateProchainCadavre()

La méthode dateProchainCadavre() ne prend pas de paramètres et renvoie un **string** la date de début du prochain cadavre exquis. Cette méthode est à utiliser si aucun cadavre exquis n'est actuellement en cours.

Cette méthode fait appel aux entités :
- `Cadavre`

```js title="AdminController.php"
$cadavreModel = CadavreModel::getInstance();
$cadavreValide = $cadavreModel->dateProchainCadavre();
```

## titreUnique()

La méthode titreUnique() prend le titre d'un cadavre exquis à enregistrer en paramètre ( _string_ ) et vérifie si ce titre n'existe pas déjà dans la base de données.
Si présence de doublon, la méthode renvoie un message d'erreur : 

`Un cadavre exquis a déjà le titre "_titreCadavreExquis_", veuillez changer.`

Si aucun doublon, la méthode renvoie **null**.

Cette méthode fait appel à l'entité :
- `Cadavre`

```js title="AdminController.php"
//si la méthode renvoie null, aucun problème
//si la méthode renvoie un message, alors il y a un doublon
$verif_titre = cadavreModel::getInstance()->titreUnique($titreCadavreExquis);
```

## verificationPeriode()

La méthode verificationPeriode() prend en paramètres la date de début ( _string_ ) et de fin ( _string_ ) d'un cadavre exquis à enregistrer et vérifie si sa période ne chevauche pas la période d'un cadavre exquis déjà existant.

Si aucun chevauchement, la méthode renvoie **null**.
Si présence de chevauchement, la méthode renvoie un message d'erreur : 

`Un cadavre exquis existe déjà pour la période du XX/XX/XX au XX/XX/XX. Le chevauchement de cadavre exquis n'est pas possible.`

Cette méthode fait appel à l'entité :
- `Cadavre`

```js title="AdminController.php"
//si la méthode renvoie null, aucun problème
// si elle renvoie un message, alors les périodes se chevauchent
$verif_periode = $cadavre->verificationPeriode($date_debut, $date_fin);
```

## nouveauCadavre()

La méthode nouveauCadavre() enregistre un nouveau cadavre exquis dans la base de données (table **cadavre**). Elle prend en paramètres l'identifiant de l'administrateur ( _int_ ) et un **array** de données dans un tableau assiocatif :
- titre
- nb_contributions_max
- debut_cadavre
- fin_cadavre
- fin_cadavre

Renvoie le cadavre exquis nouvellement créé dans un **array** dans un **array**.

Cette méthode fait appel à l'entité :
- `Cadavre`

```js title="AdminController.php"
$cadavreModel = CadavreModel::getInstance();
if($_SERVER['REQUEST_METHOD'] === 'POST')
{
    //formulaire des données à rentrer
    $formData = [
        'titre' => $_POST['titre_cadavre'],
        'debut_cadavre' => $_POST['debut_cadavre'],
        'fin_cadavre' => $_POST['fin_cadavre'],
        'nb_contributions_max' => $_POST['nb_contributions'],
        'contribution' => $_POST['contribution'],
    ];
    $userId = $_SESSION['user_id'];
    //renvoie le cadavre exquis dans un array
    $creationCadavre = $cadavreModel->nouveauCadavre($userId, $formData);

    //pour pouvoir exploiter le nouveau cadavre exquis créé
    $creationCadavre = $creationCadavre[0];
}
```


## nouvelleContribution()

La méthode nouvelleContribution() prend en paramètres l'identifiant de l'administrateur ( _int_ ) qui vient de créer le cadavre exquis, le nouveau cadavre exquis ( _array_ ) et le contenu de la contribution ( _string_ ). Elle enregistre la contribution d'ordre 1 par l'administrateur dans la base de données (table **contribution**), elle intervient juste après la méthode **nouveauCadavre()**.

Ne renvoie rien.

Cette méthode fait appel à l'entité :
- `Contribution`

```js title="AdminController.php"
$cadavreModel = CadavreModel::getInstance();
//formulaire des données à rentrer
$formData = [
    'titre' => $_POST['titre_cadavre'],
    'debut_cadavre' => $_POST['debut_cadavre'],
    'fin_cadavre' => $_POST['fin_cadavre'],
    'nb_contributions_max' => $_POST['nb_contributions'],
    'contribution' => $_POST['contribution'],
];
$userId = $_SESSION['user_id'];
$creationCadavre = $cadavreModel->nouveauCadavre($userId, $formData);
$creationCadavre = $creationCadavre[0];
$contribution = $formData["contribution"];

$cadavreModel->nouvelleContribution($userId, $creationCadavre, $contribution);
```

## validationForm()

La méthode validationForm() prend en paramètres les informations du formulaire d'ajout d'un nouveau cadavre exquis et vérifie qu'elles sont toutes conformes.

Si aucune erreur n'est détectée, la méthode renvoie **null**.
Si une ou plusieurs erreurs sont détectées, la méthode renvoie un tableau associatif ( _array_ ) contenant les messages d'erreur (minimum 1, maximum 5).

Cette méthode utilise le composant Validator de Symfony :

```
composer require validator/symfony
```

```js title="AdminController.php"
$formData = [
    'titre' => $_POST['titre_cadavre'],
    'debut_cadavre' => $_POST['debut_cadavre'],
    'fin_cadavre' => $_POST['fin_cadavre'],
    'nb_contributions_max' => $_POST['nb_contributions'],
    'contribution' => $_POST['contribution'],
];
//si la méthode renvoie null, aucun problème
// si elle renvoie un tableau associatif, alors il y a des erreurs
$formulaire_errors = $cadavre->validationform($formData);    
```