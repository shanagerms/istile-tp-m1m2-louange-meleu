
export async function chargerUtilisateurs(
  limite = 5,
  base = "https://dummyjson.com"
) {
  try {
    const response = await fetch(`${base}/users?limit=${limite}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const donnees = await response.json();

    return donnees.users.map(({ id, firstName, lastName, email }) => ({
      id,
      prenom: firstName,
      nom: lastName,
      email
    }));

  } catch (erreur) {
    console.error("Erreur de chargement :", erreur.message);
    return [];
  }
}


export async function chargerUtilisateur(
  id,
  base = "https://dummyjson.com"
) {
  try {
    const response = await fetch(`${base}/users/${id}`);

    if (response.status === 404) {
      console.error(`Utilisateur ${id} introuvable (404)`);
      return null;
    }

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const utilisateur = await response.json();

    const {
      id: identifiant,
      firstName,
      lastName,
      email
    } = utilisateur;

    return {
      id: identifiant,
      prenom: firstName,
      nom: lastName,
      email
    };

  } catch (erreur) {
    console.error("Erreur de chargement :", erreur.message);
    return null;
  }
}
