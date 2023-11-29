---
sidebar_position: 2
---

# Model Login

Le Model Login gère les connexions à l'application, ainsi que les autorisations et accès au différentes pages en fonction du statut de l'utilisateur connecté.

## getInstance()

La méthode getInstance() ne prend pas de paramètres et renvoie l'instance de la classe statique LoginModel.

```js title="LoginController.php"
$loginModel = LoginModel::getInstance();

```

## logout()

La méthode logout() ne prend pas de paramètres et effectue la déconnexion de l'utilisateur.

```js title="LoginController.php"
loginModel::getInstance()->logout();
```

## authAdmin()

La méthode authAdmin() prend en paramètres l'identifiant (**string**) et le mot de passe (**string**) dans le formulaire de connexion et vérifie si les identifiants correspondent à un profil administrateur.

Si c'est le cas, elle enregistre dans les variables de sessions : 

```
$_SESSION['auth'] = true;
$_SESSION['role'] = 'administrateur';
$_SESSION['user_id'] = $admin[0]['id_administrateur'];
```

Cette méthode fait appel a l'entité :
- `Admin`

```js title="LoginController.php"
$loginModel = LoginModel::getInstance();
$loginModel->authAdmin($login, $password);
```

## authJoueur()

La méthode authJoueur() prend en paramètres l'identifiant (**string**) et le mot de passe (**string**) dans le formulaire de connexion et vérifie si les identifiants correspondent à un profil joueur.

Si c'est le cas, elle enregistre dans les variables de sessions : 

```
$_SESSION['auth'] = true;
$_SESSION['role'] = 'joueur';
$_SESSION['user_id'] = $joueur[0]['id_joueur'];
```

Cette méthode fait appel a l'entité :
- `Joueur`

```js title="LoginController.php"
$loginModel = LoginModel::getInstance();
$loginModel->authJoueur($login, $password);
```