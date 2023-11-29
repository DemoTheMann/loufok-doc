---
sidebar_position: 2
---

# API Loufok

Une API Loufok est mise à disposition afin de récupérer les données liées aux cadavres exquis sous format JSON afin d'être exploitées par d'autres applications.


### getCadavres

`loufok/API/cadavres`

Cette route d'API ne prend pas de paramètres.

Elle renvoie en format _JSON_ un tableau associatif contenant tous les cadavres exquis présents sur la base de données.

Chaque cadavre exquis est lui aussi présenté sous la forme d'un tableau associatif contenant toutes les informations liées à ce cadavre exquis, mais il contient aussi deux autres tableaux :
 - L'un comportant la liste des contributions de ce cadavre exquis dans l'ordre de publication.
 - L'autre comportant la liste des joueurs ayant participé à ce cadavre exquis.

```js title="APIController.php"
    public function getCadavres()
    {
        $data = [];    
        $cadavres = Cadavre::getInstance()->findAll();

        foreach($cadavres as $cadavre)
        {
            $cadavre['contributions'] = [];
            $cadavre['joueurs'] = [];
            $contributions = ContributionModel::getInstance()->getContribs($cadavre['id_cadavre']);

            foreach($contributions as $contribution)
            {
                array_push($cadavre['contributions'], $contribution['contributions']);
                if($contribution['joueurs'])
                {
                    array_push($cadavre['joueurs'], $contribution['joueurs']);
                }
            }

            array_push($data, $cadavre);

        }

        $data = json_encode($data);

        header('Content-Type: application/json');
        echo $data;
        exit;
    }
```

### getCadavreById

`loufok/API/cadavres/{id}`

Cette route d'API prend en paramètre un identifiant ( _int_ ) de cadavre exquis.

Elle renvoie en format _JSON_ un tableau associatif contenant toutes les informations liées à ce cadavre exquis, mais il contient aussi deux autres tableaux :
 - L'un comportant la liste des contributions de ce cadavre exquis dans l'ordre de publication.
 - L'autre comportant la liste des joueurs ayant participés à ce Cadavre.

```js title="APIController.php"
    public function getCadavreById($id)
    {   
        $data = [];
        $id = intval($id);

        $cadavre = Cadavre::getInstance()->findBy(['id_cadavre'=>$id]);

        if($cadavre){
            $cadavre = $cadavre[0];
            $contributions = ContributionModel::getInstance()->getContribs($cadavre['id_cadavre']);
            $cadavre['contributions'] = [];
            $cadavre['joueurs'] = [];

            foreach($contributions as $contribution)
                {
                    array_push($cadavre['contributions'], $contribution['contributions']);
                    if($contribution['joueurs'])
                    {
                        array_push($cadavre['joueurs'], $contribution['joueurs']);
                    }
                }
            array_push($data, $cadavre);
        }

        $data = json_encode($data);

        header('Content-Type: application/json');
        echo $data;
        exit;
    }
```

### likeCadavreById

`loufok/API/cadavres/{id}/like`

Cette route d'API prend en paramètre un identifiant ( _int_ ) de Cadavre Exquis.

Cette méthode ne renvoie rien, elle s'occupe seulement d'incrémenter le conteur de mentions `j'aime` dans le tuple d'un Cadavre Exquis donné, identifié par son id ( _int_ ).

```js title="APIController.php"
    public function likeCadavreById($id)
    {
        $id = intval($id);

        $cadavre = Cadavre::getInstance()->findBy(['id_cadavre'=>$id])[0];
        $nb_jaime = $cadavre['nb_jaime'];
        $nb_jaime ++;
        Cadavre::getInstance()->update($id,['nb_jaime'=>$nb_jaime]);
    }
```