---
sidebar_position: 5
---

# Model Admin

Le Model Admin gère les méthodes liées à l'utilisateur connecté si c'est un administrateur.

## getInstance()

La méthode getInstance() de la classe AdminModel ne prend pas de paramètres et renvoie l'instance de la classe statique AdminModel.

```js title="AdminController.php"
$adminModel = AdminModel::getInstance();
```

## getAdminName()

La méthode getAdminName() de la classe AdminModel prend en paramètres l'identifiant d'un administrateur (**int**) et renvoie son adresse mail, ici utilisé comme son nom d'utilisateur.

```js title="AdminController.php"

$adminTitle = $AdminModel->getAdminName(int $id_admin);
```