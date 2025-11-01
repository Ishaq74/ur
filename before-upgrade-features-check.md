# Liste URGENCE - Avant Mise à Niveau
## Tout ce qui est encore Simulé, Statique, ou Non Traduit

**Date:** 1ᵉʳ Novembre 2025  
**Statut:** 🔴 PRIORITÉ URGENTE  
**Objectif:** Identifier TOUS les éléments non fonctionnels à corriger avant de passer aux nouvelles features

---

## 🚨 PRIORITÉ 1 - ÉLÉMENTS SIMULÉS (Non Fonctionnels)

### 1. Barre de Recherche (Homepage)
**Localisation:** `/src/pages/index.astro` (+ toutes versions i18n)  
**État:** ❌ **UI ONLY - NON FONCTIONNELLE**  
**Impact:** CRITIQUE - Feature principale affichée mais ne fait rien  
**Problème:**
```astro
<!-- Search Bar -->
<div class="search-bar">
  <Icon name="search" size="md" class="search-icon" />
  <input
    type="search"
    class="search-input"
    placeholder={t('hero.search_placeholder')}
    aria-label={t('hero.search_placeholder')}
  />
  <Button type="submit" variant="primary" size="md">
    {t('hero.search_placeholder').split(',')[0]}
  </Button>
</div>
```
**Solution requise:**
- Implémenter moteur de recherche côté client (Fuse.js/Lunr.js)
- Créer index de recherche au build
- Connecter input à la fonction de recherche
- Afficher résultats en temps réel ou sur page dédiée

---

### 2. Contenu "Featured" sur Homepage (Placeholders)
**Localisation:** `/src/pages/index.astro` lignes 61-84  
**État:** ❌ **PLACEHOLDER HARDCODÉ**  
**Impact:** ÉLEVÉ - Contenu fake affiché à tous les visiteurs  
**Problème:**
```astro
<!-- Placeholder cards - will be populated from content collections -->
<Card href={getLocalizedPath('/place/1', lang)} hoverable={true}>
  <div class="card-image-placeholder">
    <Icon name="map-pin" size="lg" />
  </div>
  <h3 class="card-title">Featured Place 1</h3>
  <p class="card-description">Description of the featured place...</p>
</Card>

<Card href={getLocalizedPath('/place/2', lang)} hoverable={true}>
  <div class="card-image-placeholder">
    <Icon name="map-pin" size="lg" />
  </div>
  <h3 class="card-title">Featured Place 2</h3>
  <p class="card-description">Description of the featured place...</p>
</Card>

<Card href={getLocalizedPath('/event/1', lang)} hoverable={true}>
  <div class="card-image-placeholder">
    <Icon name="calendar" size="lg" />
  </div>
  <h3 class="card-title">Featured Event</h3>
  <p class="card-description">Description of the featured event...</p>
</Card>
```
**Liens cassés:**
- `/place/1` - n'existe pas
- `/place/2` - n'existe pas
- `/event/1` - n'existe pas

**Solution requise:**
- Remplacer par contenu réel depuis collections
- Utiliser `featured: true` dans les restaurants/hébergements/événements
- Ou masquer section si pas de contenu featured

---

### 3. Articles Magazine sur Homepage (Placeholders)
**Localisation:** `/src/pages/index.astro` lignes 129-144  
**État:** ❌ **PLACEHOLDER HARDCODÉ**  
**Impact:** MOYEN - Texte générique non traduit  
**Problème:**
```astro
<!-- Placeholder for magazine articles -->
<Card href={getLocalizedPath('/magazine/article-1', lang)} hoverable={true}>
  <div class="card-image-placeholder">
    <Icon name="star" size="lg" />
  </div>
  <h3 class="card-title">Article Title</h3>
  <p class="card-description">Article excerpt goes here...</p>
</Card>
```
**Texte en dur:** "Article Title", "Article excerpt goes here..."

**Solution requise:**
- Charger 2-3 articles récents depuis collection `articles`
- Afficher vraies données (titre, excerpt, image)
- Supprimer placeholders

---

### 4. Formulaires Non Fonctionnels
**Localisation:** Multiples pages  
**État:** ❌ **UI ONLY - AUCUN BACKEND**  
**Impact:** CRITIQUE - Fausse promesse d'interaction  

**Formulaires concernés:**

#### 4.1 Formulaire de Contact (`/contact.astro`)
```astro
<form class="contact-form">
  <div class="form-group">
    <label for="name">Nom *</label>
    <input type="text" id="name" name="name" required />
  </div>
  <!-- ... plus de champs ... -->
  <Button type="submit" variant="primary" size="lg">
    Envoyer le message
  </Button>
</form>
```
**Problème:** Pas d'attribut `action`, pas de handler, rien ne se passe au submit

#### 4.2 Formulaire Signalement (`/signaler.astro`)
**Problème:** Même issue - UI seulement

#### 4.3 Formulaire Partenaire (`/partenaire.astro`)
**Problème:** Même issue - UI seulement

**Fichiers affectés:**
- `src/pages/contact.astro`
- `src/pages/signaler.astro`
- `src/pages/partenaire.astro`
- Versions EN, DE, ES, AR, ZH de ces mêmes pages

**Solution requise:**
- Soit implémenter endpoint API pour traiter soumissions
- Soit intégrer service tiers (Formspree, Netlify Forms, etc.)
- Soit désactiver/masquer formulaires temporairement

---

### 5. Boutons Connexion/Inscription
**Localisation:** Header (tous layouts)  
**État:** ❌ **LIENS VERS PAGES INEXISTANTES**  
**Impact:** MOYEN - 404 pour utilisateurs qui cliquent  
**Problème:**
```astro
<a href="/connexion">Connexion</a>
<a href="/inscription">Inscription</a>
```
**Pages manquantes:**
- `/connexion` → 404
- `/inscription` → 404

**Solution requise:**
- Créer pages login/signup (avec better-auth prévu)
- OU masquer boutons jusqu'à implémentation auth
- OU rediriger vers page "Coming Soon"

---

### 6. Téléphone de Contact Masqué
**Localisation:** `/src/pages/contact.astro` ligne 36  
**État:** ⚠️ **PLACEHOLDER**  
**Impact:** BAS  
**Problème:**
```astro
<a href="tel:+33400000000">+33 (0)4 XX XX XX XX</a>
```
**Solution requise:**
- Remplacer par vrai numéro
- Ou supprimer si pas de support téléphonique

---

## 🌍 PRIORITÉ 2 - CONTENU NON TRADUIT (Texte en Dur)

### 1. Page À Propos - Contenu Français Hardcodé
**Localisation:** 
- `/src/pages/a-propos.astro` ✅ OK (français)
- `/src/pages/en/a-propos.astro` ❌ **TEXTE EN FRANÇAIS**
- `/src/pages/de/a-propos.astro` ❌ **TEXTE EN FRANÇAIS**
- `/src/pages/es/a-propos.astro` ❌ **TEXTE EN FRANÇAIS**
- `/src/pages/ar/a-propos.astro` ❌ **TEXTE EN FRANÇAIS**
- `/src/pages/zh/a-propos.astro` ❌ **TEXTE EN FRANÇAIS**

**Problème:**
```astro
<h2>Notre Mission</h2>
<h2>Qui Sommes-Nous ?</h2>
<h2>Nos Valeurs</h2>
<!-- Tout le contenu est en français dans TOUTES les versions -->
```

**Textes concernés:**
- "Notre Mission"
- "Qui Sommes-Nous ?"
- "Nos Valeurs"
- "Contact"
- Tous les paragraphes de contenu
- Liste des valeurs

**Solution requise:**
- Extraire TOUT le texte vers fichiers i18n
- Créer clés dans `en.json`, `de.json`, `es.json`, `ar.json`, `zh.json`
- Remplacer par `{t('about.mission')}`, etc.

---

### 2. Page Contact - Contenu Français Hardcodé
**Localisation:** Toutes versions linguistiques  
**État:** ❌ **PAS TRADUIT**  

**Textes en français hardcodés:**
```astro
<p class="intro">
  Une question, une suggestion, un partenariat ? Nous sommes à votre écoute !
</p>

<h2>Par Email</h2>
<h2>Par Téléphone</h2>
<h2>Réseaux Sociaux</h2>
<h2>Formulaire de Contact</h2>
<label for="name">Nom *</label>
<label for="email">Email *</label>
<label for="subject">Sujet *</label>
<label for="message">Message *</label>
<Button>Envoyer le message</Button>
```

**Pages affectées:**
- `src/pages/en/contact.astro`
- `src/pages/de/contact.astro`
- `src/pages/es/contact.astro`
- `src/pages/ar/contact.astro`
- `src/pages/zh/contact.astro`

**Solution requise:**
- Déplacer tous textes vers i18n
- Traduire dans les 6 langues

---

### 3. Page FAQ - Contenu Français Hardcodé
**Localisation:** Toutes versions linguistiques  
**État:** ❌ **PAS TRADUIT**  

**Volume:** ~20 questions/réponses + intros toutes en français  

**Exemples:**
```astro
<p class="intro">Trouvez rapidement des réponses à vos questions les plus fréquentes.</p>
<h2>Utilisation du Site</h2>
<h3>Comment utiliser Salut Annecy ?</h3>
<h3>Le site est-il gratuit ?</h3>
<!-- etc. -->
```

**Pages affectées:**
- `src/pages/en/faq.astro`
- `src/pages/de/faq.astro`
- `src/pages/es/faq.astro`
- `src/pages/ar/faq.astro`
- `src/pages/zh/faq.astro`

**Solution requise:**
- Extraire ~50+ chaînes de texte
- Créer structure i18n pour FAQ
- Traduire tout le contenu

---

### 4. Pages Légales - Contenu Non Traduit
**Localisation:** CGU, CGV, Confidentialité, Mentions Légales, Cookies  
**État:** ⚠️ **À VÉRIFIER** (probablement français partout)  

**Pages à auditer:**
- `/cgu.astro` (+ versions i18n)
- `/cgv.astro` (+ versions i18n)
- `/confidentialite.astro` (+ versions i18n)
- `/mentions-legales.astro` (+ versions i18n)
- `/cookies.astro` (+ versions i18n)

**Solution requise:**
- Vérifier contenu de chaque page
- Si hardcodé en français → extraire vers i18n
- Traduire contenu légal (ou indiquer "French version only")

---

### 5. Page Signaler - Contenu Non Traduit
**Localisation:** `/signaler.astro` + versions i18n  
**État:** ⚠️ **À VÉRIFIER**  

**Solution requise:**
- Auditer contenu
- Extraire textes vers i18n si nécessaire

---

### 6. Page Partenaire - Contenu Non Traduit
**Localisation:** `/partenaire.astro` + versions i18n  
**État:** ⚠️ **À VÉRIFIER**  

**Solution requise:**
- Auditer contenu
- Extraire textes vers i18n si nécessaire

---

### 7. Page Espace Pro - Contenu Non Traduit
**Localisation:** `/espace-pro.astro` + versions i18n  
**État:** ⚠️ **À VÉRIFIER**  

**Solution requise:**
- Auditer contenu
- Extraire textes vers i18n si nécessaire

---

### 8. Page Offres - Contenu Non Traduit
**Localisation:** `/offres.astro` + versions i18n  
**État:** ⚠️ **À VÉRIFIER**  

**Solution requise:**
- Auditer contenu
- Extraire textes vers i18n si nécessaire

---

### 9. Page Publicité - Contenu Non Traduit
**Localisation:** `/publicite.astro` + versions i18n  
**État:** ⚠️ **À VÉRIFIER**  

**Solution requise:**
- Auditer contenu
- Extraire textes vers i18n si nécessaire

---

### 10. Page Presse - Contenu Non Traduit
**Localisation:** `/presse.astro` + versions i18n  
**État:** ⚠️ **À VÉRIFIER**  

**Solution requise:**
- Auditer contenu
- Extraire textes vers i18n si nécessaire

---

## 📦 PRIORITÉ 3 - CONTENU STATIQUE (Données Placeholder)

### 1. Images Manquantes (404)
**Impact:** 🔴 **CRITIQUE VISUEL**  
**Problème:** Toutes les images retournent 404  

**Dossiers manquants:**
```
public/images/
├── restaurants/     ❌ Vide (7 images attendues)
├── articles/        ❌ Vide (4 images attendues)
├── trails/          ❌ Vide (4 images attendues)
├── accommodations/  ❌ Vide (4 images attendues)
├── activities/      ❌ Vide (4 images attendues)
└── events/          ❌ Vide
```

**Solution requise:**
- Ajouter vraies images OU
- Ajouter placeholders professionnels (Unsplash, etc.)
- Respecter noms de fichiers dans contenu JSON

---

### 2. Contenu Limité
**État:** ⚠️ **PROTOTYPE ONLY**  

**Quantités actuelles:**
- Restaurants: **7** (objectif: 30+)
- Hébergements: **4** (objectif: 20+)
- Activités: **4** (objectif: 20+)
- Sentiers: **4** (objectif: 15+)
- Articles: **4** (objectif: 20+)
- Événements: **?** (à vérifier)
- Services: **?** (à vérifier)

**Solution requise:**
- Ajouter contenu réel
- Minimum 15-20 entrées par catégorie pour production

---

### 3. Catégories Multilingues Mélangées
**Localisation:** Pages restaurants, hébergements, magazine, sentiers  
**État:** 🐛 **BUG D'AFFICHAGE**  
**Impact:** MOYEN - UX confuse  

**Problème:**
Section "Par catégorie" affiche TOUTES les traductions simultanément au lieu de filtrer par langue courante.

**Exemple sur `/restaurants`:**
```
- الحانات والمقاهي (arabe)
- Bars & Cafés (anglais)
- Bars & Cafés (allemand)
- Bares y Cafés (espagnol)
- 酒吧和咖啡馆 (chinois)
- Bars & Cafés (français)
```

**Pages affectées:**
- `/restaurants/index.astro`
- `/hebergements/index.astro`
- `/magazine/index.astro`
- `/sentiers/index.astro`

**Solution requise:**
```typescript
// Filtrer catégories par langue actuelle
const currentLang = getLangFromUrl(Astro.url);
const filteredCategories = allCategories.filter(cat => 
  cat.id.endsWith(`-${currentLang}`) || !cat.id.includes('-')
);
```

---

## 🔒 PRIORITÉ 4 - FONCTIONNALITÉS MANQUANTES MENTIONNÉES DANS UI

### 1. Thème Switcher (Bouton Présent)
**Localisation:** Header  
**État:** ⚠️ **À VÉRIFIER**  
**Problème:** Bouton "Toggle theme" existe mais fonctionnalité non testée

**Solution requise:**
- Vérifier si JavaScript fonctionne
- Tester changement thème (clair/sombre/contraste)

---

### 2. Language Switcher (Bouton Présent)
**Localisation:** Header  
**État:** ⚠️ **À VÉRIFIER**  
**Problème:** Bouton "Change language" existe mais comportement non testé

**Solution requise:**
- Vérifier si dropdown/menu fonctionne
- Tester navigation entre langues

---

### 3. Système de Favoris
**Localisation:** Mentionné dans FAQ  
**État:** ❌ **NON IMPLÉMENTÉ**  

**Texte FAQ:**
> "créer un compte vous permet de sauvegarder vos favoris"

**Problème:** Feature promise mais inexistante

**Solution requise:**
- Implémenter favoris OU
- Retirer mention de la FAQ

---

### 4. Système d'Avis
**Localisation:** Mentionné dans FAQ  
**État:** ❌ **NON IMPLÉMENTÉ**  

**Texte FAQ:**
> "Tous les avis sont modérés par notre équipe"

**Problème:** Feature promise mais inexistante

**Solution requise:**
- Implémenter reviews OU
- Retirer mention de la FAQ

---

### 5. Notifications/Newsletter
**Localisation:** Mentionné dans FAQ  
**État:** ❌ **NON IMPLÉMENTÉ**  

**Texte FAQ:**
> "recevoir nos recommandations personnalisées"

**Problème:** Feature promise mais inexistante

**Solution requise:**
- Implémenter newsletter OU
- Retirer mention de la FAQ

---

## 🎯 ACTIONS PRIORITAIRES PAR ORDRE D'URGENCE

### 🔴 URGENT (Avant tout release public)

1. **Remplacer contenu Featured placeholder** (2h)
   - Charger contenu réel depuis collections
   - Supprimer "Featured Place 1/2", "Featured Event"

2. **Ajouter images placeholder** (2-4h)
   - Créer structure `/public/images/`
   - Ajouter images génériques ou Unsplash

3. **Fixer bug catégories multilingues** (2h)
   - Filtrer catégories par langue
   - Tester sur toutes pages

4. **Désactiver formulaires non fonctionnels** (1h)
   - Ajouter message "Coming Soon" OU
   - Masquer sections temporairement

5. **Masquer boutons Connexion/Inscription** (30min)
   - Ajouter condition dans Header
   - Réactiver quand auth prête

### 🟡 IMPORTANT (Semaine 1)

6. **Traduire pages À Propos** (4h)
   - Extraire tout texte vers i18n
   - Traduire 6 langues

7. **Traduire pages Contact** (2h)
   - Extraire textes
   - Traduire formulaires

8. **Traduire pages FAQ** (6h)
   - Extraire ~50 strings
   - Traduire Q&A

9. **Auditer pages légales** (2h)
   - Vérifier contenu de CGU, CGV, etc.
   - Décider stratégie traduction

10. **Retirer promesses features non implémentées de FAQ** (1h)
    - Supprimer mentions favoris, avis, newsletter
    - OU ajouter "Coming Soon"

### 🟢 MOYEN TERME (Semaine 2-3)

11. **Implémenter recherche basique** (1-2 jours)
    - Fuse.js côté client
    - Index au build
    - Page résultats

12. **Ajouter contenu réel** (variable)
    - 20+ restaurants
    - 15+ articles
    - 10+ sentiers
    - etc.

13. **Traduire pages Pro** (4h)
    - Espace Pro, Offres, Publicité, Partenaire, Presse

14. **Implémenter formulaires** (2-3 jours)
    - Intégrer Netlify Forms ou Formspree
    - OU créer API endpoints

---

## 📊 RÉSUMÉ PAR CATÉGORIE

| Catégorie | Éléments | Urgence | Effort |
|-----------|----------|---------|--------|
| **Simulé (Non fonctionnel)** | 6 items | 🔴 Critique | 8-12h |
| **Non traduit** | 10+ pages | 🟡 Important | 20-30h |
| **Statique (Placeholder)** | 3 items | 🔴 Critique | 6-10h |
| **Features promises** | 5 items | 🟢 Moyen | 1-3h |
| **TOTAL** | **24+ items** | - | **35-55h** |

---

## ✅ CHECKLIST DE VALIDATION

Avant de considérer le site "production-ready":

### Must-Have (Bloquant)
- [ ] Contenu Featured homepage = contenu réel (pas placeholder)
- [ ] Toutes images chargent (pas de 404)
- [ ] Catégories filtrées par langue correctement
- [ ] Formulaires soit fonctionnels, soit masqués
- [ ] Boutons Connexion/Inscription masqués si auth pas prête
- [ ] Pages À Propos traduites (6 langues)
- [ ] Pages Contact traduites (6 langues)
- [ ] FAQ ne promet pas features inexistantes

### Should-Have (Important)
- [ ] Recherche fonctionnelle
- [ ] Minimum 15 entrées par type de contenu
- [ ] Pages légales traduites ou marquées "FR only"
- [ ] Pages Pro traduites
- [ ] Thème switcher testé et fonctionnel
- [ ] Language switcher testé et fonctionnel

### Nice-to-Have (Amélioration)
- [ ] Formulaires pleinement fonctionnels avec backend
- [ ] Authentification implémentée
- [ ] 30+ entrées par type de contenu
- [ ] Toutes pages 100% traduites

---

**Date de création:** 1ᵉʳ Novembre 2025  
**Dernière mise à jour:** 1ᵉʳ Novembre 2025  
**Créé par:** Copilot AI  
**Statut:** 🔴 DOCUMENT DE TRAVAIL ACTIF

---

## 📌 NOTES POUR DÉVELOPPEURS

### Priorités Recommandées

**Sprint 1 (1 semaine) - Must Fix:**
1. Remplacer placeholders homepage
2. Ajouter images
3. Fixer bug i18n catégories
4. Masquer éléments non fonctionnels

**Sprint 2 (1 semaine) - i18n:**
5. Traduire pages principales (À Propos, Contact, FAQ)
6. Nettoyer promesses features

**Sprint 3 (2 semaines) - Features:**
7. Implémenter recherche
8. Formulaires fonctionnels ou service tiers
9. Ajouter contenu massif

### Commandes Utiles

```bash
# Trouver texte hardcodé français
grep -r "Une question\|Notre Mission\|Comment" src/pages/

# Trouver placeholders
grep -r "Featured\|Article Title\|placeholder" src/pages/

# Trouver formulaires
grep -r "<form" src/pages/

# Vérifier images manquantes
ls -la public/images/restaurants/
```

---

**FIN DU DOCUMENT**
