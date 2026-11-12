# Réponses - Partie C : Lecture de HTTP

## Question 1 : requête /users/1

- **Méthode** : GET. Elle sert à demander des données au serveur sans les modifier.
- **Code d'état** : 200 OK. La requête a réussi et le serveur a renvoyé l'utilisateur demandé.
- **Content-Type** : application/json. Les données sont au format JSON (paires clé-valeur).
- **Deux champs du JSON** : firstName (« Emily ») et lastName (« Johnson »).

## Question 2 : requête /users/99999

- **Code obtenu** : 404 Not Found.
- **Signification** : la requête est correcte, mais la ressource demandée n'existe pas. Aucun utilisateur n'a l'identifiant 99999. Le serveur renvoie le message « User with id '99999' not found ».
- **Réaction de l'interface** : elle ne doit ni planter ni rester vide. Elle affiche un message clair (par exemple « Utilisateur introuvable ») et permet de corriger l'identifiant ou de revenir en arrière.

## Question 3 : client ou serveur ?

| Action                                                               | Côté    | Raison                                                                             |
| -------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| (a) Afficher un message d'erreur sous un champ                       | Client  | C'est de l'affichage, géré par le navigateur.                                      |
| (b) Enregistrer une note dans la base de données                     | Serveur | La base de données est sur le serveur.                                             |
| (c) Vérifier un mot de passe                                         | Serveur | Le mot de passe est une donnée secrète qui ne doit pas être envoyée au navigateur. |
| (d) Changer la couleur d'un bouton au survol                         | Client  | C'est un effet de style (CSS) exécuté par le navigateur.                           |
| (e) Décider qu'un utilisateur n'a pas le droit de supprimer une note | Serveur | C'est une règle de sécurité : seul le serveur peut la faire respecter.             |

## Question 4 : codes HTTP

| Code                      | Situation                                                                            | Réaction de l'interface                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 201 Created               | Une ressource vient d'être créée (par exemple l'ajout d'un nouvel étudiant).         | Afficher un message de succès (« Étudiant ajouté ») et montrer le nouvel élément dans la liste.                                        |
| 401 Unauthorized          | L'utilisateur n'est pas authentifié (pas connecté, session expirée).                 | Le rediriger vers la page de connexion avec un message (« Veuillez vous connecter »).                                                  |
| 404 Not Found             | La ressource demandée n'existe pas (identifiant inconnu, mauvaise adresse).          | Afficher « Introuvable » et proposer de revenir en arrière ou de refaire une recherche.                                                |
| 500 Internal Server Error | Le serveur a rencontré un problème interne : ce n'est pas la faute de l'utilisateur. | Afficher un message simple (« Une erreur est survenue, réessayez plus tard »), sans détails techniques, avec un bouton pour réessayer. |

## Bilan

- 2xx : succès.
- 4xx : erreur venant du client (demande incorrecte ou non autorisée).
- 5xx : erreur venant du serveur.

Une application doit lire le code d'état et adapter son interface au résultat.
