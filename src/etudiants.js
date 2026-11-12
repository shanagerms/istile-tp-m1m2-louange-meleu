
/**
 * Calculer la moyenne générale des étudiants
 */
export const moyenneGenerale = (liste) => {
  const total = liste.reduce(
    (somme, etudiant) => somme + etudiant.note,
    0
  );

  return Math.round((total / liste.length) * 100) / 100;
};


/**
 * Retourner la liste des étudiants admis
 * Un étudiant est admis lorsque sa note est supérieure
 * ou égale à 10.
 */
export const admis = (liste) => {
  return liste.filter(etudiant => etudiant.note >= 10);
};
