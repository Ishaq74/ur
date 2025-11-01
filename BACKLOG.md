# 📋 Backlog du Projet - Salut Annecy

**Date de création:** 1er Novembre 2025  
**Dernière mise à jour:** 1er Novembre 2025  
**Statut:** 🔴 ACTIF  
**Repository:** Ishaq74/ur  
**Project Board:** untiled

---

## Table des Matières

1. [Issues Critiques](#issues-critiques)
2. [Issues Haute Priorité](#issues-haute-priorité)
3. [Issues Priorité Moyenne](#issues-priorité-moyenne)
4. [Résumé par Sprint](#résumé-par-sprint)
5. [Métriques et Suivi](#métriques-et-suivi)

---

## Issues Critiques

### Issue #1: [URGENT] Rendre le moteur de recherche fonctionnel sur la page d'accueil

**Labels:** `enhancement`, `bug`, `ux`  
**Priorité:** Critical  
**Estimation:** 12–20 heures (1.5–2.5 jours)  
**Assignee:** @Ishaq74

#### Description
La barre de recherche visible dans le hero de la homepage (`src/pages/index.astro` et déclinaisons i18n) est aujourd'hui un placeholder UI sans backend ni comportement. Il faut implémenter une recherche opérationnelle côté client (recommandé : Fuse.js) avec index généré au build. Ajouter autocomplete et page de résultats (`/search`). Instrumenter event analytics (`search_performed`).

#### Fichiers / zones à modifier
- `src/pages/index.astro` (hero / search bar)
- `src/pages/*/index.astro` (versions i18n) — s'assurer du même comportement multilingue
- `scripts/build-search-index.js` (nouveau) ou intégrer dans build pipeline (astro config)
- `src/components/` (nouveau) : SearchInput, SearchResults, Autocomplete
- `docs-dev.md` (documenter l'ajout)

#### Critères d'acceptation
- [ ] La recherche retourne des résultats pertinents pour restaurants, articles, sentiers (ex : "lac", "pizza", "sentier"), côté client, sans rechargement complet
- [ ] L'input propose autocomplete en <200ms pour typical dataset (local)
- [ ] La page `/search` affiche résultats groupés par type (Restaurants / Articles / Sentiers)
- [ ] Événement analytics déclenché à chaque recherche et visible en debug
- [ ] Tests E2E (Playwright/Cypress) couvrent : recherche via hero, clic sur résultat, navigation vers page item

#### Checklist détaillée
- [ ] Lister les champs à indexer (title, slug, excerpt, type, category, image, coords) à partir des collections src/content ou du getCollection
- [ ] Écrire script de génération d'index JSON au build (ex : scripts/build-search-index.js) pour produire search-index.json dans public/ ou assets
- [ ] Ajouter Fuse.js (ou Lunr) au frontend via npm (package.json)
- [ ] Créer composant SearchInput qui charge index (async) et effectue la recherche en mémoire -> autocomplete dropdown
- [ ] Créer page src/pages/search.astro pour affichage détaillé avec filtres côté client
- [ ] Ajouter instrumentation analytics (event name: search_performed, props: query, results_count)
- [ ] Écrire 2 tests E2E : (a) recherche et clic; (b) recherche with no results
- [ ] Mettre à jour README / docs-dev.md : comment regénérer l'index

#### Risques & notes
- Pour dataset très volumineux (1000+ items) prévoir pagination côté client ou un service de recherche (Algolia). Aujourd'hui dataset = ~227 pages (gérable côté client)
- S'assurer que l'index généré est multilingue (séparer index par langue ou inclure lang field)

---

### Issue #2: Remplacer les contenus 'Featured' (placeholders) sur la homepage par du contenu réel

**Labels:** `enhancement`, `content`  
**Priorité:** Critical  
**Estimation:** 1–4 heures  
**Assignee:** @Ishaq74

#### Description
La homepage affiche actuellement des cards hardcodées (Featured Place 1/2, Featured Event) pointant vers `/place/1` etc. -> placeholder. Remplacer par contenu réellement présent dans les collections (places, events, articles) ou masquer la section si aucune entrée pertinente existe.

#### Fichiers / zones à modifier
- `src/pages/index.astro` (section "À la une")
- `src/pages/*/index.astro` (i18n)
- `src/content/collections` (vérifier les JSON/MD utilisés pour featured)

#### Critères d'acceptation
- [ ] La section "Featured" ne contient plus de placeholder visible
- [ ] Chaque carte pointe vers une route existante (HTTP 200)
- [ ] Si la collection n'a aucun item flagged featured, la section n'apparaît pas

#### Checklist
- [ ] Identifier où sont générées les featured cards dans src/pages/index.astro
- [ ] Remplacer hardcoded cards par boucle sur la collection (ex: getCollection('places') filter p.data.featured)
- [ ] Ajouter fallback : if featured.length === 0 hide section
- [ ] Tester sur toutes les langues
- [ ] Vérifier les liens (ex: ouvrir chaque card et vérifier route status)

#### Notes
Si besoin rapide : masquer section pour la release (CSS or conditional render), puis réactiver en ajoutant contenu.

---

### Issue #3: Corriger les images manquantes (404) sur tout le site

**Labels:** `bug`, `assets`  
**Priorité:** Critical (impact visuel fort)  
**Estimation:** 2–8 heures (selon volume)  
**Assignee:** @Ishaq74

#### Description
De nombreuses images référencées dans le contenu renvoient 404 car `/public/images/*` est vide. Réparer la structure et ajouter placeholders ou vraies images. S'assurer que chaque entrée de content (restaurants, articles, trails, accommodations) référence une image valide.

#### Fichiers / zones à modifier
- `public/images/` (créer dossiers et y placer images)
- `src/content/*` (vérifier imageUrl fields)
- `src/pages/*` (vérifier chemins utilisés dans img src)

#### Critères d'acceptation
- [ ] Console du site (prod preview) n'affiche plus d'erreurs 404 pour images attendues
- [ ] Pages thumbnails & hero visuals chargent correctement
- [ ] Chaque entry dans collections a un champ imageUrl valide

#### Checklist
- [ ] Générer la structure : public/images/{restaurants,articles,trails,accommodations,activities,events}
- [ ] Pour chaque collection, lister les filenames attendus (grep des paths) et ajouter placeholders si absent
- [ ] Utiliser des images libres de droits (Unsplash) ou générer des placeholders (couleur + texte)
- [ ] Vérifier responsive srcset si nécessaire
- [ ] Lancer build local, ouvrir pages et confirmer disparition des 404s

#### Notes
Si tu veux automatiser : script pour télécharger images placeholders et nommer correctement.

---

### Issue #4: Rendre tous les formulaires fonctionnels (contact, signaler, partenaire...)

**Labels:** `bug`, `enhancement`, `forms`  
**Priorité:** Critical  
**Estimation:** 4–16 heures (0.5–2 jours selon choix backend)  
**Assignee:** @Ishaq74

#### Description
Les formulaires de contact (`src/pages/contact.astro` & variations) sont UI-only : pas d'attribut action ni de handling. Il faut choisir une approche immédiate (Formspree/Netlify Forms) pour avoir un flux de leads opérationnel, ou créer un endpoint minimal (serverless) pour recevoir soumissions, valider, et forwarder par email.

#### Fichiers / zones à modifier
- `src/pages/contact.astro` et versions /en /es /de /ar /zh
- `src/pages/signaler.astro` (si exist)
- `before-upgrade-features-check.md` lines referencing forms

#### Critères d'acceptation
- [ ] Soumission d'un formulaire valide affiche feedback "Merci — réponse sous 48h"
- [ ] L'équipe reçoit l'email ou webhook pour chaque submission
- [ ] Validation client (email required) et gestion d'erreur réseau

#### Checklist
- [ ] Décider plateforme : Formspree (rapid), Netlify Forms (si hébergement Netlify), ou API (serverless via Vercel functions)
- [ ] Implémenter front-end : ajouter action attribute or JS fetch to POST to endpoint
- [ ] Ajouter feedback UX (success/error messages) et email confirmation (si possible)
- [ ] Ajouter data-test attributes aux fields
- [ ] Tester E2E : submit with valid & invalid email, network failure

#### Notes & recommandations
- Formspree rapide : pas besoin d'infra, mais attention au quota
- Endpoint minimal (Vercel function) -> HTTP POST validation + send email via SMTP/Sendgrid (plus de contrôle)

---

## Issues Haute Priorité

### Issue #5: Filtrer correctement les catégories par langue sur toutes les pages

**Labels:** `bug`, `i18n`  
**Priorité:** High  
**Estimation:** 2–4 heures  
**Assignee:** @Ishaq74

#### Description
Les listes de catégories (dans restaurants, hebergements, magazine, sentiers) affichent actuellement toutes les traductions simultanément. Il faut filtrer ces catégories en fonction de la langue active (getLangFromUrl / useTranslations existants) pour afficher uniquement les catégories correspondantes.

#### Fichiers / zones à modifier
- `src/pages/restaurants/index.astro` (et autres listings)
- Composants qui affichent categories (vérifier src/components/*)
- i18n helper (src/i18n or util getLangFromUrl)

#### Critères d'acceptation
- [ ] Une page en /en affiche seulement catégories en anglais
- [ ] Une page en /ar affiche catégories en arabe (et layout RTL correct)
- [ ] Tests manuels valident le filtrage sur 6 langues

#### Checklist
- [ ] Rechercher occurrences d'affichage categories (grep "Par catégorie" dans src/pages)
- [ ] Modifier mapping: filteredCategories = allCategories.filter(cat => cat.lang === currentLang || !cat.lang) (ou logic par suffixe id)
- [ ] Ajouter test visuel pour vérifier absence de mélange multilangue
- [ ] Refaire build & vérifier

#### Notes
Si les catégories sont stockées comme keys multilang (ex: id-en, id-fr) standardiser la logique de filtrage.

---

### Issue #6: Traduire tous les textes hardcodés dans les pages en utilisant le système i18n

**Labels:** `enhancement`, `documentation`, `i18n`  
**Priorité:** High  
**Estimation:** 16–24 heures (2–3 jours)  
**Assignee:** @Ishaq74

#### Description
Nombreuses pages (Contact en versions étrangères, À propos, FAQ, pages légales) contiennent du texte en français codé en dur. Extraire toutes ces chaînes vers le système i18n (locales JSON dans src/i18n/locales ou équivalent) et fournir traductions pour les 5 langues restantes au minimum pour les pages critiques.

#### Fichiers / zones à modifier
- `src/pages/*.astro` (contact, a-propos, faq, offres, publicite, partenaire, presse, signaler)
- `src/i18n/locales/*.json` (ou emplacement des locales)
- `docs-dev.md` (mise à jour du process i18n)

#### Critères d'acceptation
- [ ] Aucune page non-FR ne contient de blocs FR hardcodés (spot-check)
- [ ] Les fichiers de locales contiennent clés pour contact, faq, legal etc.
- [ ] Les routes multilingues affichent le texte attendu

#### Checklist
- [ ] Lister toutes les pages ayant du texte FR hardcodé (grep)
- [ ] Extraire chaîne à clé i18n (ex: hero.title, contact.intro)
- [ ] Remplir fichiers locales en priorité pour FR/EN/DE/ES/AR/ZH
- [ ] QA : spot-check pages en chaque langue
- [ ] Documenter procédure de traduction dans docs-dev.md (comment ajouter une nouvelle clé)

#### Notes
Traductions automatiques initiales (Google Translate) peuvent être utilisées pour démarrer, mais QA humaine recommandée.

---

### Issue #7: Masquer ou corriger les liens vers des pages inexistantes

**Labels:** `bug`, `ux`  
**Priorité:** High  
**Estimation:** 1–2 heures  
**Assignee:** @Ishaq74

#### Description
Le site contient des liens vers des routes non implémentées (`/connexion`, `/inscription`, `/place/1`, `/event/1`). Ces liens provoquent des 404 et nuisent à la confiance. Deux options : créer des pages stub "Coming soon" ou masquer/retirer le lien. À court terme, masquer ou rediriger vers page "coming soon".

#### Fichiers / zones à modifier
- `src/layouts/Header.astro` (ou header component)
- `src/pages/index.astro` (card links)
- Autres pages avec hardcoded links (grep for "/connexion" etc.)

#### Critères d'acceptation
- [ ] Navigation ne retourne plus de 404 pour liens visibles dans le header/homepage
- [ ] Les liens remplacés renvoient soit une page valid (ex: /coming-soon) soit ont été retirés

#### Checklist
- [ ] Grep pour liens: grep -R "/connexion|/inscription|/place/1|/event/1" src/
- [ ] Décider strategy (coming-soon pages vs hide)
- [ ] Implémenter et tester navigation

#### Notes
Si les pages d'auth sont prévues, créer un stub explicite « Coming soon – auth » pour éviter 404.

---

### Issue #8: Ajouter des images placeholders ou réelles pour toutes les entrées de contenu

**Labels:** `enhancement`, `assets`  
**Priorité:** High  
**Estimation:** 2–8 heures (selon volume)  
**Assignee:** @Ishaq74

#### Description
Assurer qu'un visuel existe pour chaque entrée : restaurant, article, sentier, hébergement. Là où l'image réelle manque, ajouter un placeholder standardisé (ex: couleur + icône) avec alt texte correct.

#### Fichiers / zones à modifier
- `public/images/*`
- `src/content/*` entries metadata (imageUrl)
- Templates components (img tags) pour fallback placeholder

#### Critères d'acceptation
- [ ] Chaque card affiche une image (réelle ou placeholder)
- [ ] Alt text non vide et descriptif pour SEO/a11y

#### Checklist
- [ ] Générer naming convention et folder structure
- [ ] Importer placeholders & assigner aux entries manquantes
- [ ] Mettre alt tags automatiquement depuis content.title si alt absent

#### Notes
Pour l'import massif, fournir un CSV de mapping slug -> image filename pour upload.

---

## Issues Priorité Moyenne

### Issue #9: Retirer ou signaler comme 'à venir' les fonctionnalités non implémentées dans la FAQ

**Labels:** `documentation`, `enhancement`  
**Priorité:** Medium  
**Estimation:** 1–2 heures  
**Assignee:** @Ishaq74

#### Description
La FAQ mentionne des fonctionnalités (favoris, avis, newsletter) non encore implémentées. Mettre à jour la FAQ pour aligner le produit et la doc : soit retirer l'item, soit indiquer "Bientôt disponible" + timeframe estimée.

#### Fichiers / zones à modifier
- `src/pages/faq.astro` (et versions i18n)
- `docs-clients.md` (mettre à jour)

#### Critères d'acceptation
- [ ] La FAQ ne promet plus d'éléments inexistants sans note "à venir"
- [ ] Version i18n mise à jour

#### Checklist
- [ ] Lister toutes les mentions de features non implémentées (grep dans FAQ)
- [ ] Mettre marqueur "Bientôt disponible" et ajouter short note roadmap
- [ ] Regénérer docs / push

---

### Issue #10: Créer issues GitHub pour chaque item listé dans les documents de référence

**Labels:** `bug`, `maintenance`  
**Priorité:** Medium → Critical (selon item)  
**Estimation:** 2–8 heures pour découpage initial  
**Assignee:** @Ishaq74

#### Description
Les fichiers `before-upgrade-features-check.md` et `briefing-now-updated-verified.md` contiennent un grand nombre d'items (images manquantes, placeholders, i18n, forms, pages manquantes, route warnings). Il faut transformer chaque point critique en sous-issue actionnable (backlog), prioriser et assigner.

#### Fichiers / zones à modifier
- `before-upgrade-features-check.md`
- `briefing-now-updated-verified.md`
- Repo issues / project board untiled

#### Critères d'acceptation
- [ ] Chaque item bloquant listé dans les MD a sa propre issue avec priorité & estimation
- [ ] Project board "untiled" reflète ces issues avec colonnes To do / In progress / Done

#### Checklist
- [ ] Parser les deux fichiers et lister items critiques (images 404, forms, placeholders, categories i18n)
- [ ] Créer une issue par item (title, description, label, estimate)
- [ ] Ajouter issues au project untiled / colonne To do

#### Notes
Issues peuvent être générées automatiquement via script ou API GitHub si token disponible.

---

## Résumé par Sprint

### Sprint 1 - Corrections Critiques (Semaine 1)
**Objectif:** Éliminer les blocages visuels et fonctionnels majeurs

**Issues à traiter:**
- Issue #2: Remplacer contenus Featured (1-4h)
- Issue #3: Corriger images manquantes (2-8h)
- Issue #5: Filtrer catégories par langue (2-4h)
- Issue #7: Masquer liens inexistants (1-2h)

**Effort total:** 6-18 heures  
**Résultat attendu:** Site sans erreurs 404, contenu cohérent

---

### Sprint 2 - i18n et Traductions (Semaine 2)
**Objectif:** Compléter le support multilingue

**Issues à traiter:**
- Issue #6: Traduire textes hardcodés (16-24h)
- Issue #9: Nettoyer FAQ (1-2h)

**Effort total:** 17-26 heures  
**Résultat attendu:** Site 100% traduit sur 6 langues

---

### Sprint 3 - Fonctionnalités Essentielles (Semaines 3-4)
**Objectif:** Rendre le site pleinement fonctionnel

**Issues à traiter:**
- Issue #1: Moteur de recherche (12-20h)
- Issue #4: Formulaires fonctionnels (4-16h)
- Issue #8: Images placeholders/réelles (2-8h)

**Effort total:** 18-44 heures  
**Résultat attendu:** Recherche opérationnelle, formulaires fonctionnels

---

### Sprint 4 - Organisation et Maintenance (Semaine 5)
**Objectif:** Structurer le backlog et organiser le projet

**Issues à traiter:**
- Issue #10: Créer issues GitHub (2-8h)
- Documentation et cleanup

**Effort total:** 2-8 heures  
**Résultat attendu:** Backlog complet et organisé

---

## Métriques et Suivi

### Vue d'ensemble

| Priorité | Nombre d'issues | Effort estimé | Statut |
|----------|----------------|---------------|--------|
| Critical | 4 issues | 19-48 heures | 🔴 À faire |
| High | 4 issues | 21-38 heures | 🟡 À faire |
| Medium | 2 issues | 3-10 heures | 🟢 À faire |
| **TOTAL** | **10 issues** | **43-96 heures** | **0% complété** |

### Progrès par catégorie

| Catégorie | Issues | Complétées | Progrès |
|-----------|--------|------------|---------|
| UX/UI | 3 | 0 | 0% |
| i18n | 2 | 0 | 0% |
| Contenu | 2 | 0 | 0% |
| Fonctionnalités | 2 | 0 | 0% |
| Documentation | 1 | 0 | 0% |

### Prochaines étapes recommandées

1. **Immédiat (Cette semaine)**
   - Corriger les images manquantes (Issue #3)
   - Filtrer catégories par langue (Issue #5)
   - Remplacer contenus Featured (Issue #2)

2. **Court terme (2 semaines)**
   - Traduire textes hardcodés (Issue #6)
   - Masquer liens inexistants (Issue #7)

3. **Moyen terme (1 mois)**
   - Implémenter recherche (Issue #1)
   - Rendre formulaires fonctionnels (Issue #4)

---

## Notes Importantes

### Dépendances
- Issue #1 (Recherche) dépend de Issue #3 (Images) pour affichage correct des résultats
- Issue #6 (Traductions) doit être fait avant toute expansion majeure de contenu
- Issue #10 (Création issues GitHub) peut être fait en parallèle

### Risques Identifiés
- Volume de traduction important (Issue #6) - envisager traductions automatiques + QA
- Choix technologique pour formulaires (Issue #4) - impact sur architecture
- Dataset de recherche peut grandir (Issue #1) - prévoir scalabilité

### Ressources Externes Possibles
- Images: Unsplash, Pexels (libres de droits)
- Formulaires: Formspree, Netlify Forms
- Recherche: Fuse.js, Lunr.js
- Traductions: DeepL API, Google Translate API

---

**Document maintenu par:** @Ishaq74  
**Dernière révision:** 1er Novembre 2025  
**Version:** 1.0.0

---

## Actions Possibles

### Import vers GitHub Issues
Ce backlog peut être transformé en issues GitHub via:
1. **CSV Import** - Format GitHub Issue Importer
2. **Script automatisé** - Via GitHub API
3. **Manuel** - Copier-coller chaque issue

### Suivi de Projet
Recommandation d'utiliser le project board "untiled" avec colonnes:
- 📋 Backlog
- 🔜 To Do
- 🏗️ In Progress
- ✅ Done

---

**FIN DU BACKLOG**
