# Contenu et Actions du Site DroitHabitat

Ce document répertorie l'ensemble des textes littéraux et des actions (liens, boutons, formulaires) présents sur le site **DroitHabitat**, classés par section et par page.

---

## 🧭 Composants Globaux

### 1. Barre de Navigation (Navbar)
*   **Textes :**
    *   Logo : `DroitHabitat`
*   **Actions :**
    *   Clic sur le Logo &rarr; Redirige vers la page d'accueil (`/`)
    *   Bouton Menu (icône grille 3x3) &rarr; Ouvre le menu de navigation
    *   Bouton Planifier (icône calendrier) &rarr; Ouvre la planification de rendez-vous

### 2. Pied de Page (Footer)
*   **Textes :**
    *   Tagline : *« La solution experte pour analyser et agir sur vos litiges de crédit à la consommation. »*
    *   Titre Colonne 1 : *« Liens utiles »*
    *   Titre Colonne 2 : *« Nous contacter »*
    *   Mail de contact : `contact@droithabitat.fr`
    *   Téléphone : `+33 1 23 45 67 89`
    *   Titre Colonne 3 : *« Suivez-nous »*
    *   Copyright : *« © [Année] DroitHabitat. Tous droits réservés. »*
*   **Actions :**
    *   Lien *« Comment ça marche »* &rarr; Redirige vers la page d'accueil (`/`)
    *   Lien *« FAQ »* &rarr; Redirige vers la page FAQ (`/faq`)
    *   Lien *« Contact »* &rarr; Redirige vers la page de contact (`/contact`)
    *   Lien *« Mentions légales »* &rarr; Redirige vers la page des mentions légales (`/legal`)
    *   Lien Mail &rarr; Ouvre le client mail vers `contact@droithabitat.fr`
    *   Lien Téléphone &rarr; Lance l'appel vers `+33123456789`
    *   Boutons Réseaux Sociaux &rarr; Liens vers Facebook, Instagram, LinkedIn

---

## 🏠 Page d'Accueil (Landing Page) & Tunnel de Diagnostic

### 1. Section Hero (Bannière Principale)
*   **Textes :**
    *   Titre principal : *« Votre crédit conso vous pèse ? »*
    *   Description : *« Vous êtes à un clic de transformer votre situation. Vérifiez gratuitement en 2 minutes si votre dossier présente un levier d'action grâce à notre analyse intelligente. »*
*   **Actions :** Aucun bouton direct dans cette zone.

### 2. Section Solution
*   **Textes :**
    *   Titre : *« Votre solution en 2 minutes »*
    *   Description : *« Notre test gratuit analyse instantanément votre dossier et vous dit si vous pouvez récupérer vos droits. Gratuit, sans engagement, 100% en ligne. »*
    *   Textes des cartes illustratives :
        *   *« Analyse IA 2.0 »*
        *   *« 98% Taux de réussite dossiers éligibles (+12%) »*
        *   *« Expert : Votre dossier est éligible. »*
*   **Actions :**
    *   Bouton central *« Test interactif - 2 min gratuit »* &rarr; Déclenche et ouvre le **Chat Interactif** en bas du bloc.

### 3. Chat Interactif (Assistant Virtuel)
*   **Textes du Bot :**
    *   Message de bienvenue : *« Bienvenue ! Je serai votre guide pour ce test. Si vous souhaitez m'entendre parler, veuillez activer l'audio. »*
    *   Message de démarrage : *« Parfait. Commençons ! »*
    *   *Questions posées (1 à 16) :* (Voir liste des questions dans la section *Formulaire* ci-dessous)
*   **Actions :**
    *   Bouton *« Écouter »* &rarr; Active la synthèse vocale (lecture des questions à voix haute) et démarre le test.
    *   Bouton *« Lire »* &rarr; Désactive la voix et démarre le test uniquement par texte.
    *   Boutons de choix de réponse (selon la question) :
        *   Boutons d'options : *« 1 crédit »*, *« 2 crédits »*, *« 3 crédits ou plus »*
        *   Boutons de confirmation : *« Oui »*, *« Non »*
    *   Champ de saisie numérique (pour le montant du crédit) + Bouton de validation (icône flèche) &rarr; Enregistre le montant et passe à la question suivante.
    *   Bouton Audio (haut-parleur) &rarr; Active/désactive le son en cours de route.
    *   Bouton Fermer (X) &rarr; Ferme la fenêtre du chat.

### 4. Formulaire de Diagnostic Classique (Alternative au Chat)
*   **Textes par Étape :**
    *   **Étape 1 : Informations générales**
        *   Question 1 : *« Montant total du crédit (€) »* (Zone de saisie numérique, exemple : 15000)
        *   Question 2 : *« Nombre de crédits conso litigieux »* (Menu déroulant : *1 crédit*, *2 crédits*, *3 crédits ou plus*)
    *   **Étape 2 : La vente**
        *   Question 3 : *« Un intermédiaire ou démarcheur était-il présent lors de la vente ? »*
        *   Question 4 : *« Le contrat a-t-il été signé chez vous (à domicile) ? »*
        *   Question 5 : *« Ont-ils respecté le délai de rétractation ? »*
    *   **Étape 3 : Situation actuelle**
        *   Question 6 : *« Les prélèvements ont-ils déjà commencé ? »*
        *   Question 7 : *« Avez-vous déjà reçu des courriers de relance ? »*
        *   Question 8 : *« Avez-vous reçu une mise en demeure ? »*
        *   Question 9 : *« Êtes-vous menacé(e) de fichage Banque de France (FICP) ou avez-vous déjà été fiché(e) ? »*
        *   Question 10 : *« Êtes-vous en retard de paiement actuellement ? »*
    *   **Étape 4 : Vérifications de l'organisme**
        *   Question 11 : *« L'organisme a-t-il vérifié votre solvabilité réelle ? »*
        *   Question 12 : *« A-t-il vérifié vos revenus et vos charges ? »*
        *   Question 13 : *« Y a-t-il des absences d'information claire (coût total, taux, risques) ? »*
        *   Question 14 : *« A-t-il vérifié tous les éléments sans exception (justificatifs, situation pro, charges, relevés) ? »*
        *   Question 15 : *« L'organisme a-t-il consulté le FICP et vérifié vos crédits en cours ? »*
        *   Question 16 : *« L'organisme avait-il connaissance de vos antécédents de fichage ou incidents bancaires ? »*
*   **Actions :**
    *   Bouton *« Retour à l'accueil »* (à la première étape) &rarr; Annule le test et renvoie à l'accueil.
    *   Bouton *« Étape précédente »* (à partir de l'étape 2) &rarr; Recule d'une étape.
    *   Boutons *« Oui »* / *« Non »* &rarr; Sélectionne la réponse pour les questions binaires.
    *   Bouton *« Continuer »* / *« Analyser mon dossier »* &rarr; Valide l'étape actuelle et passe à la suivante ou soumet le diagnostic.

### 5. Phase d'Analyse (Attente)
*   **Textes :**
    *   Titre : *« Analyse en cours... »*
    *   Description : *« Nous évaluons vos réponses sur 16 critères juridiques »*
*   **Actions :** Aucune (chargement automatique pendant 2 secondes).

### 6. Phase de Résultat du Diagnostic

#### Option A : Éligible (Score &ge; 5)
*   **Textes :**
    *   Titre : *« Bonne nouvelle, vous êtes éligible ! »*
    *   Description : *« Votre dossier présente [Score] éléments favorables sur 16 critères. Nous recommandons une action rapide. »*
*   **Actions :**
    *   Bouton *« Voir les offres »* &rarr; Redirige vers la page des offres (`/offres`).
    *   Bouton *« Recommencer »* &rarr; Réinitialise les données et renvoie à l'accueil.

#### Option B : Non Éligible (Score < 5)
*   **Textes :**
    *   Titre : *« Pas de levier d'action évident »*
    *   Description : *« D'après vos réponses ([Score]/16), nous ne détectons pas suffisamment d'irrégularités pour engager une démarche. »*
*   **Actions :**
    *   Bouton *« Recommencer le test »* &rarr; Réinitialise les données et renvoie à l'accueil.

---

### 7. Section Méthode
*   **Textes :**
    *   Surtitre : *« Notre méthode »*
    *   Titre : *« Comment ça marche ? »*
    *   Étape 1 : *« Étape 1 : Test (2 min) — Vérifiez votre éligibilité en ligne instantanément grâce à notre formulaire intelligent d'analyse. »*
    *   Étape 2 : *« Étape 2 : Offre personnalisée — Découvrez nos solutions juridiques adaptées à votre dossier spécifique et le montant récupérable. »*
    *   Étape 3 : *« Étape 3 : Paiement sécurisé — Réglez en toute sérénité. Nous ne facturons que si votre dossier a de fortes chances de succès. »*
    *   Étape 4 : *« Étape 4 : Dossier activé — Nous prenons le relais immédiatement. Suivez l'avancée de votre litige depuis votre espace client. »*
*   **Actions :** Aucune action.

### 8. Section Témoignages
*   **Textes :**
    *   Titre : *« Ce Que Disent Nos Clients »*
    *   Description : *« Découvrez comment nos clients transforment leur croissance grâce à des solutions avancées. Voici exactement comment ils y sont parvenus. »*
    *   Fiche vidéo : *« David Pierce — Consultant Marketing chez Giggle (0:00 / 0:06) »*
    *   Avis de Sally Taher : *« La transformation était remarquable à observer. En quelques mois, notre productivité a explosé tandis que les membres de l'équipe adoptaient le nouveau système et commençaient à livrer des résultats exceptionnels. »*
    *   Avis de Jaylen Carter : *« Son interface intuitive et ses analyses robustes sont essentielles pour naviguer sur les marchés. »*
    *   Avis de Rachel Foster : *« Depuis la mise en œuvre de cette solution, nous avons constaté une amélioration spectaculaire de notre efficacité analytique. »*
    *   Avis de Linda Watts : *« Une expérience vraiment fluide. Nous ne nous attendions pas à un retour sur investissement aussi rapide. Les perspectives sont incroyables et l'interface est d'une fluidité exceptionnelle. »*
    *   Avis d'Evan Gessler : *« Les perspectives propulsées par l'IA de la plateforme ont complètement transformé notre stratégie marketing du jour au lendemain. »*
    *   Avis de Mark Evans : *« Une valeur incroyable. C'est la meilleure décision financière que notre startup ait prise cette année, nous faisant économiser des centaines d'heures. »*
*   **Actions :** Boutons de contrôle média factices sur la carte vidéo.

### 9. Section FAQ (Questions fréquentes)
*   **Textes :**
    *   Titre : *« Questions fréquentes »*
    *   Q1 : *« Le test est-il vraiment gratuit ? »* &rarr; R1 : *« Oui, et il le restera. »*
    *   Q2 : *« Combien coûte une médiation ? »* &rarr; R2 : *« Le prix vous est révélé après le test, si vous êtes éligible. »*
    *   Q3 : *« Puis-je agir seul après le diagnostic ? »* &rarr; R3 : *« Absolument. Le pack de preuves est conçu pour ça. »*
    *   Q4 : *« Qu'est-ce qui rend mon dossier éligible ? »* &rarr; R4 : *« Démarchage, vente à domicile, délais non respectés... »*
    *   Q5 : *« Combien de temps dure une médiation ? »* &rarr; R5 : *« En moyenne 3 à 6 semaines. »*
*   **Actions :**
    *   Clic sur une Question &rarr; Déroule / replie la réponse correspondante.

### 10. Section CTA (Appel à l'action final)
*   **Textes :**
    *   Titre : *« Prêt à savoir si votre dossier vaut le coup ? »*
*   **Actions :**
    *   Bouton *« Faire le test gratuit — ça prend 2 min »* &rarr; Fait remonter la page en haut pour démarrer le test.

---

## 🏷️ Page des Offres (`/offres`)

*   **Textes :**
    *   Badge : *« Éligibilité confirmée »*
    *   Titre : *« Choisissez votre offre »*
    *   Description : *« Un accompagnement adapté à chaque étape de votre dossier. »*
    *   *Détails de l'offre unique :*
        *   Nom : *« Diagnostic »*
        *   Prix : *« 99 € »*
        *   Description : *« Mémoire + Pack de preuves structuré pour agir seul. »*
        *   Liste des avantages : *Analyse IA complète*, *Rapport PDF mémoire*, *Pack de preuves ordonnées*, *Recommandations stratégiques*.
    *   *Garantie de remboursement :*
        *   Titre : *« Satisfait ou remboursé »*
        *   Description : *« Si vous n'êtes pas satisfait de votre rapport dans les 7 jours suivant la réception, nous vous remboursons intégralement. Sans justification. »*
*   **Actions :**
    *   Bouton *« Choisir cette offre »* &rarr; Redirige vers la page de paiement avec l'identifiant (`/paiement?offre=diagnostic`).

---

## 💳 Page de Paiement (`/paiement`)

*   **Textes :**
    *   Titre principal : *« Paiement sécurisé »*
    *   Titre Encart : *« Résumé »*
    *   Détail : *« Offre sélectionnée : [Nom de l'offre] — [Prix] € »*
    *   Note de sécurité 1 : *« Paiement sécurisé par Stripe. Vos données sont chiffrées de bout en bout. »*
    *   Libellés formulaire : *« Numéro de carte »*, *« Expiration »*, *« CVC »*.
    *   Note de sécurité 2 : *« Paiement 100% sécurisé — Certification PCI DSS »*
    *   *En cas de succès :*
        *   Titre : *« Paiement confirmé ! »*
        *   Sous-titre : *« Redirection vers votre espace... »*
*   **Actions :**
    *   Saisie des informations bancaires.
    *   Bouton *« Payer [Prix] € »* &rarr; Simule le traitement, affiche le succès après 1.5s, puis redirige vers la page d'onboarding (`/onboarding`).

---

## 🚀 Page d'Onboarding / Étapes suivantes (`/onboarding`)

*   **Textes :**
    *   Titre : *« Votre dossier est ouvert ! »*
    *   Description : *« Bienvenue chez Droit Habitat. Votre espace personnel est prêt et sécurisé. »*
    *   Titre de liste : *« Prochaines étapes »*
    *   Étape 1 : *« 1. Remplissez le formulaire initial de votre dossier »*
    *   Étape 2 : *« 2. Téléchargez vos contrats, relevés et preuves »*
    *   Étape 3 : *« 3. Notre IA analyse votre dossier sous 72h »*
    *   Étape 4 : *« 4. Recevez votre rapport et choisissez la suite »*
*   **Actions :**
    *   Bouton *« Accéder à mon espace »* &rarr; Redirige vers la page de connexion (`/auth/login`).

---

## 🔐 Pages d'Authentification

### 1. Page de Connexion (`/auth/login`)
*   **Textes :**
    *   Titre : *« Se connecter »* (ou équivalent)
    *   Champs : *Email*, *Mot de passe*
*   **Actions :**
    *   Bouton *« Se connecter »* &rarr; Soumet les identifiants
    *   Lien *« Créer un compte »* &rarr; Redirige vers `/auth/register`

### 2. Page d'Inscription (`/auth/register`)
*   **Textes :**
    *   Titre : *« Créer un compte »* (ou équivalent)
    *   Champs : *Nom*, *Prénom*, *Email*, *Mot de passe*, *Confirmer le mot de passe*
*   **Actions :**
    *   Bouton *« S'inscrire »* &rarr; Crée le compte
    *   Lien *« Se connecter »* &rarr; Redirige vers `/auth/login`

---

## 📝 Page de Blog (`/blog`)

*   **Textes :**
    *   Titre : *« Notre Blog »*
    *   Description : *« Découvrez nos articles éducatifs sur le crédit à la consommation, la médiation, et vos droits. »*
    *   *Contenu d'une carte d'article :*
        *   Catégorie : *« Droit & Consommation »*
        *   Titre : *« Comment se défendre face à un crédit abusif ? »*
        *   Extrait : *« Comprendre les démarches et vos droits face aux banques et organismes de crédit... »*
        *   Lien : *« Lire la suite &rarr; »*
*   **Actions :**
    *   Lien *« Lire la suite &rarr; »* &rarr; Ouvre l'article en détail.

---

## ⚖️ Mentions Légales & CGV (`/legal`)

*   **Textes :**
    *   Titre : *« Mentions Légales & CGV »*
    *   Section 1 : *« 1. Éditeur du site »* &rarr; Mentions relatives à DroitHabitat SAS, capital de 10 000€, siège social au 123 Rue de la République, 75001 Paris, France.
    *   Section 2 : *« 2. Conditions Générales de Vente (CGV) »* &rarr; Détails sur la gratuité du test d'éligibilité, les offres payantes (ex: Médiation à 199€) soumises à obligation de résultat ou remboursées.
    *   Section 3 : *« 3. Politique de Confidentialité »* &rarr; Traitement des données personnelles selon le RGPD (droits d'accès, rectification, suppression, non-revente).
*   **Actions :** Aucun bouton interactif.

---

## ✉️ Page de Contact (`/contact`)

*   **Textes :**
    *   Titre : *« Contactez-nous »*
    *   Description : *« Vous avez une question ou besoin d'aide avec votre dossier ? Notre équipe est à votre disposition. »*
    *   Champs du formulaire : *Prénom*, *Nom*, *Email*, *Message*.
*   **Actions :**
    *   Remplissage des champs.
    *   Bouton *« Envoyer le message »* &rarr; Envoie la demande de contact.
