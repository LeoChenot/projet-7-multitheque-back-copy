// Petite fonction de vérification de mot de passe, à utiliser côté Front

const mostUsed600Words = ['vouloir', 'voler', 'voir', 'vivre', 'venir', 'vendre', 'valoir', 'utiliser', 'tuer', 'trouver', 'tromper', 'traverser', 'travailler', 'traiter', 'traîner', 'tourner', 'toucher', 'tomber', 'tirer', 'terminer', 'tenter', 'tenir', 'tendre', 'taire', 'suivre', 'suffire', 'souvenir', 'sourire', 'souffrir', 'sortir', 'servir', 'serrer', 'séparer', 'sentir', 'sembler', 'savoir', 'sauver', 'sauter', 'rouler', 'risquer', 'rire', 'revoir', 'rêver', 'revenir', 'réveiller', 'réussir', 'retrouver', 'retourner', 'retirer', 'retenir', 'rester', 'ressembler', 'reprendre', 'reposer', 'répondre', 'répéter', 'rentrer', 'rendre', 'rencontrer', 'remonter', 'remettre', 'remarquer', 'rejoindre', 'regarder', 'refuser', 'réfléchir', 'reconnaître', 'recevoir', 'rappeler', 'ramener', 'raconter', 'quitter', 'protéger', 'proposer', 'promettre', 'prier', 'prévenir', 'présenter', 'préparer', 'prendre', 'préférer', 'pouvoir', 'pousser', 'poser', 'porter', 'pleurer', 'plaire', 'permettre', 'perdre', 'penser', 'payer', 'passer', 'partir', 'parler', 'paraître', 'ouvrir', 'oublier', 'oser', 'offrir', 'occuper', 'obliger', 'naître', 'mourir', 'montrer', 'monter', 'mettre', 'mentir', 'mener', 'marier', 'marcher', 'manquer', 'manger', 'maintenir', 'lire', 'lever', 'lancer', 'laisser', 'lâcher', 'jurer', 'jouer', 'jeter', 'inviter', 'intéresser', 'installer', 'inquiéter', 'importer', 'imaginer', 'ignorer', 'habiter', 'glisser', 'garder', 'gagner', 'frapper', 'foutre', 'finir', 'filer', 'fermer', 'falloir', 'faire', 'expliquer', 'exister', 'excuser', 'éviter', 'être', 'essayer', 'espérer', 'envoyer', 'entrer', 'entendre', 'enlever', 'emporter', 'empêcher', 'emmener', 'embrasser', 'éloigner', 'écrire', 'écouter', 'échapper', 'dormir', 'donner', 'disparaître', 'dire', 'devoir', 'deviner', 'devenir', 'détruire', 'détester', 'désoler', 'descendre', 'demander', 'dégager', 'découvrir', 'décider', 'danser', 'croire', 'crier', 'craindre', 'couvrir', 'courir', 'couper', 'coucher', 'continuer', 'connaître', 'conduire', 'compter', 'comprendre', 'commencer', 'choisir', 'chercher', 'charger', 'chanter', 'changer', 'cesser', 'casser', 'calmer', 'cacher', 'brûler', 'bouger', 'boire', 'battre', 'baisser', 'avoir', 'avancer', 'attendre', 'atteindre', 'attaquer', 'assurer', 'asseoir', 'arriver', 'arrêter', 'arranger', 'approcher', 'apprendre', 'apporter', 'appeler', 'apparaître', 'apercevoir', 'annoncer', 'amuser', 'amener', 'aller', 'ajouter', 'aimer', 'aider', 'agir', 'adorer', 'acheter', 'accompagner', 'accepter', 'abandonner', 'gens', 'fils', 'voyage', 'visage', 'village', 'verre', 'ventre', 'vent', 'type', 'truc', 'trou', 'travail', 'train', 'tout', 'téléphone', 'sujet', 'souvenir', 'sourire', 'soleil', 'soldat', 'soir', 'silence', 'signe', 'siècle', 'seul', 'service', 'sentiment', 'seigneur', 'secret', 'sang', 'salut', 'revoir', 'rêve', 'retour', 'retard', 'reste', 'regard', 'rapport', 'quartier', 'problème', 'prince', 'président', 'présent', 'premier', 'pouvoir', 'point', 'plan', 'plaisir', 'pied', 'peuple', 'petit', 'père', 'patron', 'passé', 'passage', 'parent', 'papier', 'papa', 'ordre', 'oncle', 'oiseau', 'oeil', 'numéro', 'nouveau', 'noir', 'moyen', 'mouvement', 'monsieur', 'monde', 'moment', 'million', 'milieu', 'mètre', 'médecin', 'matin', 'mariage', 'mari', 'maître', 'long', 'lieu', 'journal', 'jour', 'jardin', 'intérieur', 'intérêt', 'instant', 'hôtel', 'honneur', 'homme', 'haut', 'groupe', 'grand', 'gouvernement', 'goût', 'genre', 'général', 'garçon', 'front', 'frère', 'français', 'fond', 'flic', 'film', 'fait', 'exemple', 'être', 'état', 'esprit', 'escalier', 'ennemi', 'endroit', 'effet', 'droit', 'doute', 'dollar', 'doigt', 'docteur', 'dieu', 'départ', 'début', 'courant', 'coup', 'côté', 'copain', 'compte', 'colonel', 'coin', 'cœur', 'client', 'ciel', 'chien', 'cheveu', 'cheval', 'chéri', 'chemin', 'chat', 'capitaine', 'camp', 'café', 'bureau', 'bruit', 'bout', 'boulot', 'bord', 'bonjour', 'bonheur', 'besoin', 'bébé', 'bateau', 'avion', 'avenir', 'argent', 'arbre', 'appel', 'amour', 'agent', 'accord', 'vieux', 'travers', 'temps', 'sens', 'propos', 'prix', 'pays', 'mois', 'gars', 'cours', 'corps', 'choix', 'bras', 'bois', 'avis', 'voiture', 'ville', 'vérité', 'tête', 'terre', 'table', 'suite', 'sorte', 'soirée', 'soeur', 'situation', 'semaine', 'sécurité', 'seconde', 'scène', 'salle', 'route', 'robe', 'réponse', 'raison', 'question', 'putain', 'prison', 'présence', 'porte', 'police', 'place', 'pierre', 'pièce', 'photo', 'peur', 'personne', 'pensée', 'peine', 'peau', 'partie', 'parole', 'oreille', 'odeur', 'nuit', 'musique', 'minute', 'mère', 'merde', 'marche', 'manière', 'maman', 'maison', 'main', 'lumière', 'ligne', 'lèvre', 'lettre', 'langue', 'journée', 'joie', 'jambe', 'impression', 'image', 'idée', 'histoire', 'heure', 'habitude', 'gueule', 'guerre', 'forme', 'force', 'fleur', 'fille', 'fête', 'fenêtre', 'femme', 'faute', 'famille', 'faim', 'façon', 'face', 'espèce', 'erreur', 'équipe', 'époque', 'épaule', 'envie', 'église', 'école', 'droite', 'dent', 'dame', 'cuisine', 'cour', 'couleur', 'confiance', 'classe', 'chose', 'chance', 'chambre', 'cause', 'carte', 'bouche', 'boîte', 'balle', 'attention', 'armée', 'arme', 'année', 'affaire', 'voix', 'paix', 'madame', 'fois', 'tour', 'professeur', 'poche', 'part', 'ombre', 'mort', 'merci', 'livre', 'gosse', 'geste', 'gauche', 'garde', 'enfant', 'chef', 'aide', 'vivant', 'vert', 'tout', 'seul', 'quoi', 'prochain', 'prêt', 'premier', 'plein', 'petit', 'pareil', 'nouveau', 'noir', 'mort', 'meilleur', 'long', 'léger', 'joli', 'important', 'humain', 'haut', 'grand', 'gentil', 'froid', 'fort', 'entier', 'droit', 'différent', 'désolé', 'dernier', 'content', 'clair', 'cher', 'chaud', 'certain', 'blanc', 'beau', 'ancien', 'vrai', 'vieux', 'sérieux', 'mauvais', 'heureux', 'gros', 'français', 'faux', 'doux', 'toute', 'bonne', 'vide', 'triste', 'tranquille', 'simple', 'sale', 'rouge', 'propre', 'possible', 'pauvre', 'même', 'malade', 'libre', 'juste', 'jeune', 'impossible', 'grave', 'facile', 'étrange', 'drôle', 'difficile', 'bizarre', 'autre', 'super', 'bleu'];

const commonWordsChecker = (password) => {
  password = password.toLowerCase();
  for (i=0; i<mostUsed600Words.length; i++) {
    if (password.search(mostUsed600Words[i]) >= 0) {
      return true
    }
  }
  return false
}

const nameChecker = (password, name) => {
  if (name === undefined) {
    return false
  }
  password = password.toLowerCase();
  name = name.toLowerCase();
  if (password.search(name) >= 0) {
    return true
  } else {
    return false;
  }
}

const arrayInArray = (firstArray, seconArray, thirdArray) => {
  for (i=0; i<firstArray.length; i++) {
    for (j=0; j<seconArray.length; j++) {
      if (firstArray[i] === seconArray[j]) {
        thirdArray.push(firstArray[i])
      }
    }
  }
}

const passwordChecker = (password, username, firstName, lastName) => {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetArrayUpper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const numbersArray = '0123456789'.split('');
  const specialsArray = '/§&@#£€¨%.[]{}()<>*+-=!?^$|'.split('');

  const passwordArray = password.split('')
  let [lowerCaseCount, upperCaseCount, numbersCount, specialsCount] = [[], [], [], []];
 
  arrayInArray(passwordArray, alphabetArray, lowerCaseCount);
  arrayInArray(passwordArray, alphabetArrayUpper, upperCaseCount);
  arrayInArray(passwordArray, numbersArray, numbersCount);
  arrayInArray(passwordArray, specialsArray, specialsCount);

  if (nameChecker(password, username) || nameChecker(password, firstName) || nameChecker(password, lastName)) {
    return "password cannot contain user name"
  }

  if (commonWordsChecker(password)) {
    return "password contains an easily guessed word"
  }

  if (password.length > 11 && lowerCaseCount.length >=1 && upperCaseCount.length >=1 && numbersCount.length >=1 && specialsCount.length >=1 ) {
    return "strong password"
  } else if (password.length > 7 && (lowerCaseCount.length >=1 || upperCaseCount.length >=1) && numbersCount.length >=1 && specialsCount.length >=1) {
    return "password has medium strength"
  } else {
    return "password is too weak"
  }
}




// passwordChecker('mot de passe', 'prénom', 'nom', 'username')
console.log(passwordChecker('miche7uiv%TGH', 'michel', 'roger', 'jojo'))


