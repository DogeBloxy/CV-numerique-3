# Portfolio de Tiago Labro

Portfolio personnel de Tiago Labro, développeur web full-stack orienté vers la création de sites web et d'applications interactives.
Le site présente mon parcours, mes compétences, mes projets scolaires et personnels, ainsi qu'un formulaire de contact.

## Aperçu
Le portfolio est disponible en ligne :

[Voir le portfolio](https://tiago-labro-portfolio.vercel.app)
## Fonctionnalités

- Introduction animée avec possibilité de passer l'animation
- Navigation fluide entre les différentes sections
- Présentation personnelle
- Liste de compétences techniques
- Galerie de projets avec liens GitHub et démonstrations en ligne
- Animations au défilement et transitions interactives
- Avatar interactif
- Formulaire de contact avec EmailJS
- Design responsive pour ordinateur et mobile
- Déploiement configuré avec Vercel

## Sections du portfolio
- À propos
- Compétences
- Projets
- Contact

## Technologies utilisées
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript
- CSS
- [GSAP](https://gsap.com/) pour les animations
- [Lenis](https://lenis.darkroom.engineering/) pour le défilement fluide
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [EmailJS](https://www.emailjs.com/) pour le formulaire de contact
- [Vercel](https://vercel.com/) pour le déploiement

## Installation
Cloner le dépôt :

```bash
git clone https://github.com/DogeBloxy/CV-numerique-3.git
cd CV-numerique-3
```
Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera disponible à l'adresse indiquée par Vite, généralement `http://localhost:5173`.
## Variables d'environnement

Le formulaire de contact utilise EmailJS. Pour l'activer en local, créer un fichier `.env.local` à la racine du projet :
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Ces valeurs sont disponibles dans le tableau de bord EmailJS. Ne pas publier ces informations dans le dépôt.
## Scripts disponibles

```bash
npm run dev       # Lance le serveur de développement
npm run build     # Génère la version de production
npm run preview   # Prévisualise la version de production
npm run lint      # Vérifie le code avec ESLint
```

## Structure du projet
```text
src/
├── assets/       # Images et icônes
├── components/   # Composants réutilisables
├── context/      # Contextes React
├── data/         # Données des projets et compétences
├── layouts/      # Sections principales du portfolio
├── App.jsx       # Composition générale de l'application
├── App.css
├── index.css
└── main.jsx      # Point d'entrée React
```

Les projets sont définis dans `src/data/projects/projectsArray.js` et les compétences dans `src/data/skills/skillsArray.js`.
## Déploiement

Le projet est configuré pour Vercel avec [vercel.json](vercel.json).

La commande de build est :
```bash
npm run build
```

Le résultat est généré dans le dossier `dist`.
Le dossier `.vercel` est créé automatiquement lorsque le projet est lié à Vercel. Il ne doit pas être partagé ni versionné.

## Auteur

**Tiago Labro**

- GitHub : [DogeBloxy](https://github.com/DogeBloxy)
- LinkedIn : [Tiago Labro](https://www.linkedin.com/in/tiago-labro-31479029b/)
- Email : [labrotiago@gmail.com](mailto:labrotiago@gmail.com)

