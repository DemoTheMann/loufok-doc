---
sidebar_position: 4
---

# Entité Contribution

L'entité `Contribution.php` est la seule Entité de notre application a posséder une méthode métier personnalisée, dissociée des méthodes initiales pour les entités définie dans le MVC qui sont :

- `findAll` pour rechercher toutes les données
- `find( int $id )` pour rechercher un identifiant
- `findBy( array $criterias )` pour rechercher en fonction d'un/ou plusieurs critères
- `create( array $datas )` pour ajouter une donnée
- `update( int $id, array $datas )` pour mettre à jour une donnée
- `delete( int $id )` pour effacer une donnée
- `exist( int $id )` pour vérifier si une donnée existe

### getUserLatest

La méthode getUserLatest() prend en paramètre l'identifiant du joueur ( _int_ ) afin d'accéder à sa contribution la plus récente.
Renvoie la contribution.

```js title="Contribution.php"
    public function getUserLatest(int $id_joueur): ?array
    {
        $sql = "SELECT * FROM `{$this->tableName}` WHERE id_joueur = :id ORDER BY date_soumission DESC";
        $sth = $this->query($sql, [':id' => $id_joueur]);
        if ($sth && $sth->rowCount()) {
            return $sth->fetch();
        }

        return null;
    }
```

```js title="JoueurModel.php"
//récupérer la dernière contribution du joueur connecté
$latestContrib = Contribution::getInstance()->getUserLatest($user_id);
```
