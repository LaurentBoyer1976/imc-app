# IMC Calculator - Phase 1 React + Babel CDN

Calculatrice d'Indice de Masse Corporelle (IMC). Interface React structurée pour la phase 1.

## À propos du projet

Application web mono-page pour préparer un calcul d'IMC.
Cette version correspond à la phase 1 : structure de composants, affichage statique, flux de props, sans logique métier dynamique.

Cours : LP DWCA - UE 6.3.1 Frameworks et approfondissement web  
Auteurs : Catherine Braun, Laurent Boyer  
Date : Phase 1 - 2026

---

## Fonctionnalités de la phase 1

- Architecture React en composants parent/enfants
- Données d'interface passées via props
- Champs numériques taille/poids affichés
- Bouton "Calculer" présent (non fonctionnel)
- Zone de résultat statique (valeur par défaut)
- Layout avec Header, contenu principal et Footer

Important :
- Pas de state React
- Pas de logique de calcul IMC
- Pas d'interaction métier (ce sera en phase 2).

---

## Contraintes techniques respectées

- React via CDN
- ReactDOM via CDN
- Babel via CDN (`type="text/babel"`)
- Application mono-page
- Sans modules ES (`import/export` non utilisés)
- Composants exposés globalement via `window.*`

---

## Démarrage rapide

### Prérequis

- Python 3 installé (option recommandée pour lancer un serveur local simple)
- Navigateur web moderne

### Lancer le projet en local

> Remplacez le chemin ci-dessous par votre propre chemin local vers le dossier du projet.

```powershell
$CHEMIN_PROJET = "C:\\chemin\\vers\\votre\\imcApp"
cd "$CHEMIN_PROJET"
python -m http.server 5500
```

Puis ouvrir :
- `http://localhost:5500`

### Alternatives à Python pour lancer un serveur local

Si Python n'est pas disponible, vous pouvez utiliser une des options suivantes.

#### Option 1 - Node.js (`http-server` via npx)

```powershell
$CHEMIN_PROJET = "C:\\chemin\\vers\\votre\\imcApp"
cd "$CHEMIN_PROJET"
npx http-server -p 5500
```

#### Option 2 - Node.js (`serve` via npx)

```powershell
$CHEMIN_PROJET = "C:\\chemin\\vers\\votre\\imcApp"
cd "$CHEMIN_PROJET"
npx serve -l 5500
```

#### Option 3 - PHP (si installé)

```powershell
$CHEMIN_PROJET = "C:\\chemin\\vers\\votre\\imcApp"
cd "$CHEMIN_PROJET"
php -S localhost:5500
```

Puis ouvrir dans le navigateur :
- `http://localhost:5500`

> Note : ouvrir `index.html` directement en `file://` est déconseillé.
> Utilisez un serveur local pour éviter les problèmes de chargement des scripts.

---

## Structure du projet

```text
imcApp/
├── index.html
├── README.md
└── src/
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── form.jsx
    │   ├── inputTaille.jsx
    │   ├── inputPoids.jsx
    │   └── button.jsx
    ├── layout/
    │   └── Layout.jsx
    ├── pages/
    │   ├── Home.jsx
    │   └── App.jsx
    └── styles/
        └── App.css
```

---

## Flux des composants et des props (Phase 1)

`App` est le composant parent principal.

- `App` -> `Layout`
  - `headerProps`
  - `footerText`
- `App` -> `Home`
  - `pageTitle`
  - `formProps`
  - `resultProps`
- `Home` -> `Form`
  - `tailleConfig`
  - `poidsConfig`
  - `buttonLabel`
- `Form` -> `InputTaille`
  - `config`
- `Form` -> `InputPoids`
  - `config`
- `Form` -> `Button`
  - `label`, `type`

Ce flux est volontairement descendant et statique pour coller aux attentes de la phase 1.

---

## Comportement attendu

- L'interface s'affiche correctement
- Les inputs sont visibles avec placeholders et contraintes min/max
- Le bouton est visible.
- Le résultat affiche une valeur statique (`--`)
- Aucun calcul n'est exécuté.

---

## Tests manuels recommandés (Phase 1)

1. Ouvrir la page et vérifier l'affichage global
2. Vérifier la présence du Header, Formulaire, Footer
3. Vérifier la présence des 2 inputs numériques
4. Vérifier la présence du bouton Calculer
5. Vérifier la zone de résultat statique
6. Ouvrir la console navigateur et vérifier l'absence d'erreurs JavaScript

---

## Préparation Phase 2

La phase 2 ajoutera :

- gestion du state (`useState`)
- gestion des `onChange` et `onClick`
- calcul IMC
- affichage dynamique du résultat
- validation des données utilisateur

---

## Auteurs

- Catherine Braun
- Laurent Boyer

Cours : LP DWCA - UE 6.3.1 Frameworks et approfondissement web
