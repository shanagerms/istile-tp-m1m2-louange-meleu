
import { readFile } from "node:fs/promises";

import {
  moyenneGenerale,
  admis
} from "./etudiants.js";

import {
  chargerUtilisateurs,
  chargerUtilisateur
} from "./charger.js";

// Chargement du fichier JSON local
const etudiants = JSON.parse(
  await readFile(
    new URL("../data/etudiants.json", import.meta.url),
    "utf8"
  )
);

// Statistiques de la partie D
console.log("===== PARTIE D : STATISTIQUES =====");

console.log("Moyenne générale :", moyenneGenerale(etudiants));

console.log("Étudiants admis :", admis(etudiants));


// PARTIE E : TESTS DE L'API
console.log("\n===== PARTIE E : API ET ASYNCHRONISME =====");

// Scénario 1 : chargement de 3 utilisateurs
console.log("\n--- SCÉNARIO 1 : SUCCÈS ---");

const utilisateurs = await chargerUtilisateurs(3);

console.log("Utilisateurs récupérés :", utilisateurs);


// Scénario 2 : utilisateur inexistant
console.log("\n--- SCÉNARIO 2 : UTILISATEUR INEXISTANT ---");

const utilisateur = await chargerUtilisateur(99999);

console.log("Résultat :", utilisateur);


// Scénario 3 : erreur réseau
console.log("\n--- SCÉNARIO 3 : ERREUR RÉSEAU ---");

const utilisateursErreur = await chargerUtilisateurs(
  3,
  "https://hote-invalide.example"
);

console.log("Résultat après erreur réseau :", utilisateursErreur);
