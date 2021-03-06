# Les petits plats
Bienvenue sur le projet 7 de ma formation OpenClassrooms "Développeur d'Application JavaScript REACT". Il s'agit d'une démo de site web fonctionnant avec un algorithme de filtrage :
L'utilisateur peut chercher une recette parmi les 50 de la base de données, en suivant les scénarios suivants :
## Scénario principal
1. Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la
barre de recherche principale.
2. Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de
la recette, la liste des ingrédients de la recette, la description de la recette.
3. L’interface est actualisée avec les résultats de recherche.
4. Les champs de recherche avancée sont actualisés avec les informations ingrédients,
ustensiles, appareil des différentes recettes restantes
5. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles,
appareil.
6. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le
champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients,
seuls vont rester “noix de coco” et “lait de coco”.
7. L’utilisateur choisit un mot clé dans le champ.
8. Le mot clé apparaît sous forme de tag sous la recherche principale.
9. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les
champs de recherche avancée.
10. L’utilisateur sélectionne une recette.
## Scénario alternatif 1
Aucune recette correspondante à la recherche. L'enchaînement A1 commence au point 3 du scénario nominal :<br>
3. L’interface affiche « Aucune recette ne correspond à votre critère… vous pouvez
chercher « tarte aux pommes », « poisson », etc.
## Scénario alternatif 2
L’utilisateur commence sa recherche par un tag. L'enchaînement A2 commence au point 1 du scénario nominal et reprend au point 9 du scénario nominal :
1. L’utilisateur commence la recherche par un tag.
2. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les
champs de recherche avancée (9 du cas principal)
## Scénario alternatif 3
L’utilisateur ajoute d’autres tags pour la recherche avancée. L'enchaînement A3 commence au point 9 du scénario nominal. Cet enchaînement peut se répéter autant que nécessaire :
10. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles,
appareil.
11. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans
le champ disparaissent.
12. L’utilisateur choisit un mot clé dans le champ.
13. Le mot clé apparaît sous forme de tag sous la recherche principale.
14. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les
champs de recherche avancée.
***
Le but de ce projet était de tester 2 versions d'algorithme en JavaScript afin de déterminer entre l'utilisation des boucles natives for ou la méthode filter(), laquelle est la plus performante dans le cadre d'une base de données de 50 recettes. Mon hypothèse de départ était que la méthode filter() serait la plus optimale, avec l'idée qu'elle est "faite pour cette utilisation", mais pour l'instant, d'après mes recherches sur le sujet il semblerait que cela soit plus complexe que ça et qu'il est même possible que l'inverse soit vrai. J'ai trouvé intéressant cette démarche de formuler une hypothèse, puis me documenter sur divers forums, sites, avant de finalement effectuer les tests qui permettent de trancher.
Afin de déterminer laquelle des deux versions est la plus performante, j'ai simulé une saisie utilisateur dans la barre de recherche avec [JSBench.Me](https://jsbench.me/):
En entrant l'array des recettes + le mot "pomme" (qui simule une saisie), je constate que la version avec la boucle for a pour résultat 12536.81 ops/s, contre 15130.78 ops/s pour la méthode filter(). C'est donc finalement bien cette dernière qui se montre la plus rapide !
De plus, l'un des avantages est sémantique : une boucle for peut parfois nécessiter des commentaires dans le code afin d'expliquer ce qu'elle fait, tandis que la méthode filter(), par son nom, est explicite. Cela permet de parcourir le code en comprenant plus rapidement ce qu'il fait.
Je vous recommande donc de vous placer sur la branche v2 du projet si vous souhaitez profiter de la meilleure expérience de navigation sur le Github Pages, et pour une meilleure lisibilité de mon code.
Vous pourrez ainsi tester les différents scénarios listés ci-dessus, et vous référer aux algorigrammes suivants :
## Scénario nominal + Scénario alternatif A1 + Scénario alternatif A3
![Scénario nominal + Scénario alternatif A1 + Scénario alternatif A3](https://zupimages.net/up/22/20/y989.png)
## Scénario alternatif A2
![Scénario alternatif A2](https://zupimages.net/up/22/20/89gr.png)