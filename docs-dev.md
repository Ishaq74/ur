# Documentation Développeur - Salut Annecy

**Date de mise à jour:** Novembre 2025  
**Version:** 1.0  
**Statut:** Développement actif

---

## 📋 Table des Matières

1. [Vue d'ensemble technique](#vue-densemble-technique)
2. [Architecture du projet](#architecture-du-projet)
3. [État actuel du projet](#état-actuel-du-projet)
4. [Tâches et roadmap](#tâches-et-roadmap)
5. [Migrations et historique](#migrations-et-historique)
6. [Guide de développement](#guide-de-développement)

---

## 🎯 Vue d'ensemble technique

### Stack Technique

- **Framework:** Astro 5.14.4 (Static Site Generator)
- **Langage:** TypeScript (mode strict)
- **Styling:** CSS pur avec design tokens (pas de Tailwind)
- **Contenu:** Collections Astro (JSON + Markdown)
- **i18n:** 6 langues (FR, EN, DE, ES, AR, ZH)
- **Déploiement:** Static (compatible GitHub Pages/Netlify/Vercel)

### Fonctionnalités Clés

✅ Support multilingue (6 langues)  
✅ Thèmes (clair/sombre/contraste)  
✅ Design atomique (atoms/molecules/organisms)  
✅ Accessibilité WCAG 2.1 AA  
✅ SEO optimisé  
✅ Filtrage côté client  
✅ Collections de contenu structurées  

---

## 📁 Architecture du projet

```
src/
├── components/
│   ├── atoms/           # Button, Icon
│   ├── molecules/       # Card
│   └── organisms/       # Header, Footer
├── content/
│   ├── articles/        # Articles blog (Markdown)
│   ├── articleCategories/
│   ├── restaurants/     # Listings restaurants (JSON)
│   ├── restaurantCategories/
│   ├── accommodations/  # Hébergements
│   ├── accommodationCategories/
│   ├── activities/      # Activités
│   ├── activityCategories/
│   ├── trails/          # Randonnées
│   ├── trailCategories/
│   ├── events/          # Événements
│   ├── services/        # Services locaux
│   ├── serviceCategories/
│   ├── listings/        # Petites annonces
│   └── places/          # Lieux génériques (legacy)
├── i18n/
│   ├── locales/         # Fichiers de traduction (fr, en, de, es, ar, zh)
│   └── index.ts         # Utilitaires i18n
├── layouts/
│   ├── BaseLayout.astro
│   └── MainLayout.astro
├── pages/               # Pages de routes
│   ├── index.astro
│   ├── magazine/        # Section articles
│   ├── restaurants/     # Section restaurants
│   ├── hebergements/    # Section hébergements
│   ├── activites/       # Section activités
│   ├── sentiers/        # Section randonnées
│   ├── agenda.astro     # Calendrier événements
│   └── ...
└── styles/
    ├── tokens.css       # Design tokens
    └── global.css       # Styles globaux
```

### Design System

- **Design Tokens:** Couleurs, typographie, espacements dans `tokens.css`
- **Thèmes:** Modes clair, sombre et contraste élevé
- **Composants:** Pattern atomic design (Atoms → Molecules → Organisms)
- **Responsive:** Mobile-first avec breakpoints (640px, 768px, 1024px, 1280px)

---

## 📊 État actuel du projet

### Pages Existantes (70+ pages générées)

#### Pages Principales
✅ Page d'accueil (`/index.astro`)  
✅ Page 404 (`/404.astro`)  
✅ Live/En Direct (`/live.astro`)  
✅ Agenda (`/agenda.astro`)  

#### Pages Légales et Informatives
✅ À propos, Contact, FAQ  
✅ CGU, CGV, Politique de confidentialité  
✅ Mentions légales, Cookies, Signaler un problème  

#### Pages Professionnelles
✅ Espace Pro, Nos Offres, Publicité  
✅ Devenir Partenaire, Presse  

#### Pages Dynamiques
✅ Restaurants (liste, catégories, détails)  
✅ Hébergements (liste, catégories, détails)  
✅ Activités (liste, catégories, détails)  
✅ Services (liste, catégories, détails)  
✅ Magazine/Articles (liste, catégories, détails)  
✅ Sentiers (liste, catégories)  
✅ Événements (détails)  

### Contenu Disponible

- **7 restaurants** avec catégories
- **4 hébergements** avec catégories
- **4 activités** avec catégories
- **4 services** avec catégories
- **4 articles** avec catégories
- **4 randonnées** avec catégories
- **4 événements**

### Système de Filtrage

✅ **Implémenté** - Filtrage côté client pour:
- Magazine (par catégorie et tags)
- Restaurants (catégorie, attributs, prix, note)
- Randonnées (difficulté, distance)

**Fonctionnement:**
- Contenu rendu avec attributs data
- JavaScript lit les paramètres URL et filtre
- Compteurs mis à jour dynamiquement
- Fonctionne en mode statique

### Traductions (i18n)

**Langues supportées:**
- 🇫🇷 Français (défaut)
- 🇬🇧 Anglais
- 🇩🇪 Allemand
- 🇪🇸 Espagnol
- 🇸🇦 Arabe (support RTL)
- 🇨🇳 Chinois

**Sections traduites:**
- Navigation (header, footer)
- Pages communes (hero, featured, categories)
- Filtres et éléments UI
- Métadonnées SEO

### ⚠️ Points d'attention

**Images manquantes:**
- Beaucoup de références à `/images/` qui n'existent pas encore
- Résulte en erreurs 404 mais n'affecte pas la fonctionnalité
- À ajouter dans `/public/images/`

**Textes hardcodés:**
- Certaines pages ont encore du texte en dur
- À extraire vers les fichiers i18n

---

## 🎯 Tâches et roadmap

### Priorité 1: Contenu et traductions

#### Traductions manquantes
- [ ] Extraire tous les textes hardcodés des pages
- [ ] Compléter les traductions pour les 6 langues
- [ ] Pages À propos, Contact, FAQ, etc.
- [ ] Messages d'erreur et validations

#### Contenu à ajouter
- [ ] Images réelles pour tous les contenus
- [ ] Plus de restaurants, hébergements, activités
- [ ] Plus d'articles de blog
- [ ] Plus d'événements et randonnées

### Priorité 2: Composants manquants

#### Composants Atomiques
- [ ] Input, Textarea, Select
- [ ] Checkbox, Radio
- [ ] Badge, Tag
- [ ] Avatar, Tooltip
- [ ] Loader, Spinner

#### Composants Moléculaires
- [ ] SearchBar
- [ ] FilterBar
- [ ] Breadcrumb
- [ ] Pagination
- [ ] Rating (affichage)

#### Composants Organismes
- [ ] SearchResults
- [ ] MapView (intégration carte)
- [ ] ReviewsList
- [ ] BookingForm

### Priorité 3: Fonctionnalités

#### Essentielles
- [ ] Recherche globale
- [ ] Système de favoris/bookmarks
- [ ] Système d'avis/reviews
- [ ] Intégration carte interactive
- [ ] Formulaire de réservation

#### Avancées
- [ ] Authentification utilisateur (better-auth prévu)
- [ ] Base de données (PostgreSQL/Drizzle prévu)
- [ ] Upload d'images
- [ ] Système de notifications
- [ ] API endpoints

### Priorité 4: Optimisations

#### Performance
- [ ] Optimisation images (component Astro Image)
- [ ] Pagination pour longues listes
- [ ] Lazy loading
- [ ] Service Worker / PWA
- [ ] Optimisation bundle JS/CSS

#### SEO
- [ ] Améliorer métadonnées par page
- [ ] Schema.org markup
- [ ] Open Graph optimisé
- [ ] Sitemap XML dynamique
- [ ] robots.txt optimisé

---

## 📜 Migrations et historique

### Migration React → Astro (Complétée)

**Contexte:**
- Migration complète d'une base React/Vite vers Astro
- Abandon de React, Tailwind, et frameworks complexes
- Focus sur simplicité et performance

**Exigences respectées:**
✅ Framework Astro uniquement  
✅ TypeScript en mode strict  
✅ CSS pur sans Tailwind  
✅ Design tokens  
✅ Thèmes multiples  
✅ Accessibilité WCAG  
✅ Design atomique  
✅ SEO optimisé  
✅ Support multilingue (6 langues) - **EXIGENCE OBLIGATOIRE**  
✅ Collections de contenu natives  
✅ Préparé pour better-auth + PostgreSQL/Drizzle  

**Résultat:**
- 70+ pages générées en statique
- Build sans erreurs ni warnings
- Performance optimale (SSG)
- Prêt pour déploiement

### Améliorations du système de contenu

**Collections créées:**
- Articles avec support Markdown
- Restaurants, hébergements, activités (JSON)
- Randonnées, événements, services
- Catégories pour chaque type de contenu
- Petites annonces

**Support multilingue:**
- 6 fichiers de traduction complets
- Fonction `t()` pour utilisation dans composants
- Support RTL pour l'arabe
- Détection automatique de langue

**Filtres:**
- Implémentation côté client
- Paramètres URL pour partage
- Compteurs dynamiques
- Compatible mode statique

---

## 🚀 Guide de développement

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview

# Vérifier TypeScript
npm run check
```

Le serveur de dev sera disponible sur `http://localhost:4321/`

### Ajouter du contenu

#### Restaurant

Créer `src/content/restaurants/mon-restaurant.json`:

```json
{
  "id": "mon-restaurant",
  "name": "Mon Restaurant",
  "description": "Un excellent endroit",
  "categoryId": "cuisine-locale",
  "address": "123 Rue, Annecy",
  "phone": "+33 4 50 XX XX XX",
  "website": "https://example.com",
  "imageUrl": "/images/restaurants/mon-restaurant.jpg",
  "rating": 4.5,
  "reviewCount": 100,
  "coordinates": { "lat": 45.8992, "lng": 6.1294 },
  "attributes": ["Terrasse", "Parking"],
  "hours": "12h-14h, 19h-22h",
  "priceRange": "€€",
  "published": true
}
```

#### Article

Créer `src/content/articles/mon-article.md`:

```markdown
---
id: "mon-article"
title: "Titre de mon article"
excerpt: "Brève description"
imageUrl: "/images/articles/mon-article.jpg"
category: "Gastronomie"
categoryId: "gastronomie"
authorId: "author-1"
date: "2025-01-15T10:00:00"
readTime: "5 min"
tags: ["food", "local"]
published: true
---

# Contenu de l'article

Votre contenu markdown ici...
```

### Ajouter des traductions

1. Ajouter les clés dans `src/i18n/locales/{lang}.json`
2. Utiliser la fonction `t()` dans les composants:

```astro
---
import { useTranslations, getLangFromUrl } from '../i18n';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t('header.title')}</h1>
```

### Tester les filtres

Naviguer vers:
- `/magazine?cat=gastronomie` - Articles gastronomie uniquement
- `/magazine?tag=culture` - Articles taggés "culture"
- `/restaurants?attr=Terrasse` - Restaurants avec terrasse
- `/sentiers?difficulty=facile` - Randonnées faciles

### Structure des commits

Utiliser des messages clairs et descriptifs:
- `feat: ajouter composant SearchBar`
- `fix: corriger filtrage restaurants`
- `docs: mettre à jour documentation i18n`
- `style: améliorer responsive header`
- `refactor: simplifier logique de filtrage`

### Bonnes pratiques

1. **Composants**
   - Suivre le pattern atomic design
   - Typer tous les props avec TypeScript
   - Documenter les props complexes

2. **Styles**
   - Utiliser les design tokens de `tokens.css`
   - Approche mobile-first
   - Éviter les styles inline

3. **Contenu**
   - Toujours définir `published: true/false`
   - Fournir des descriptions pour SEO
   - Optimiser les images avant upload

4. **i18n**
   - Ne jamais hardcoder de texte visible
   - Grouper les clés par contexte
   - Maintenir toutes les langues à jour

5. **Performance**
   - Minimiser le JavaScript côté client
   - Utiliser le SSG autant que possible
   - Optimiser les images

---

## 🔧 Dépannage

### Le build échoue

```bash
# Vérifier TypeScript
npm run check

# Nettoyer et rebuild
rm -rf dist .astro node_modules
npm install
npm run build
```

### Images 404

Les références d'images doivent pointer vers `/public/images/`:
- Créer les dossiers nécessaires dans `/public/images/`
- Placer les images avec les bons noms
- Vérifier les chemins dans le contenu JSON/MD

### Traductions manquantes

1. Vérifier que la clé existe dans `fr.json`
2. Copier dans les autres fichiers de langue
3. Traduire le texte
4. Vérifier l'utilisation de `t('key')` dans le composant

### Filtres ne fonctionnent pas

- Vérifier que JavaScript est activé
- Vérifier les attributs `data-*` sur les éléments
- Consulter la console pour les erreurs
- Vérifier les paramètres URL

---

## 📞 Support

Pour les questions techniques:
- Consulter la documentation Astro: https://docs.astro.build
- Consulter ce fichier pour l'architecture du projet
- Contacter le mainteneur du projet

---

**Dernière mise à jour:** Novembre 2025  
**Mainteneur:** Équipe Salut Annecy  
**Statut:** Développement actif
