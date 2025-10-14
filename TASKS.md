# Liste des Tâches Détaillées - Salut Annecy

**Date:** 14 octobre 2025  
**Version:** 1.0  
**Focus:** Frontend uniquement (Backend/DB/Auth viendra plus tard)

---

## 📋 Table des Matières

1. [Traductions (i18n)](#1-traductions-i18n)
2. [Composants Atomiques](#2-composants-atomiques-atoms)
3. [Composants Moléculaires](#3-composants-moléculaires-molecules)
4. [Composants Organismes](#4-composants-organismes-organisms)
5. [Pages Manquantes](#5-pages-manquantes)
6. [Pages Existantes à Améliorer](#6-pages-existantes-à-améliorer)
7. [Contenu](#7-contenu)
8. [Optimisations et Performance](#8-optimisations-et-performance)
9. [SEO et Accessibilité](#9-seo-et-accessibilité)
10. [Tests et Validation](#10-tests-et-validation)

---

## 1. Traductions (i18n)

### 1.1 Extraire les Textes Codés en Dur

#### 1.1.1 Page À Propos (`/a-propos.astro`)
- [ ] Créer section `about_page` dans `fr.json`
- [ ] Ajouter clés:
  - `about_page.meta_description`
  - `about_page.our_mission.title`
  - `about_page.our_mission.content`
  - `about_page.who_we_are.title`
  - `about_page.who_we_are.content`
  - `about_page.our_values.title`
  - `about_page.our_values.authenticity`
  - `about_page.our_values.quality`
  - `about_page.our_values.sharing`
  - `about_page.our_values.innovation`
  - `about_page.contact.title`
  - `about_page.contact.content`
- [ ] Traduire dans `en.json`
- [ ] Traduire dans `de.json`
- [ ] Traduire dans `es.json`
- [ ] Traduire dans `ar.json`
- [ ] Traduire dans `zh.json`
- [ ] Remplacer les textes hardcodés par `t('about_page.xxx')`
- [ ] Tester sur toutes les langues

#### 1.1.2 Page FAQ (`/faq.astro`)
- [ ] Créer section `faq_page` dans `fr.json`
- [ ] Ajouter clés pour:
  - `faq_page.meta_description`
  - `faq_page.intro`
  - `faq_page.categories.usage.title`
  - `faq_page.categories.usage.q1.question`
  - `faq_page.categories.usage.q1.answer`
  - `faq_page.categories.usage.q2.question`
  - `faq_page.categories.usage.q2.answer`
  - `faq_page.categories.usage.q3.question`
  - `faq_page.categories.usage.q3.answer`
  - `faq_page.categories.pro.title`
  - `faq_page.categories.pro.q1.question`
  - `faq_page.categories.pro.q1.answer`
  - `faq_page.categories.pro.q2.question`
  - `faq_page.categories.pro.q2.answer`
  - `faq_page.categories.pro.q3.question`
  - `faq_page.categories.pro.q3.answer`
  - `faq_page.categories.content.title`
  - `faq_page.categories.content.q1.question`
  - `faq_page.categories.content.q1.answer`
  - `faq_page.categories.content.q2.question`
  - `faq_page.categories.content.q2.answer`
  - `faq_page.categories.content.q3.question`
  - `faq_page.categories.content.q3.answer`
  - `faq_page.categories.account.title`
  - `faq_page.categories.account.q1.question`
  - `faq_page.categories.account.q1.answer`
  - `faq_page.categories.account.q2.question`
  - `faq_page.categories.account.q2.answer`
  - `faq_page.categories.technical.title`
  - `faq_page.categories.technical.q1.question`
  - `faq_page.categories.technical.q1.answer`
  - `faq_page.categories.technical.q2.question`
  - `faq_page.categories.technical.q2.answer`
  - `faq_page.no_answer.title`
  - `faq_page.no_answer.content`
- [ ] Traduire dans toutes les langues (en, de, es, ar, zh)
- [ ] Remplacer les textes hardcodés par `t('faq_page.xxx')`
- [ ] Tester sur toutes les langues

#### 1.1.3 Page Contact (`/contact.astro`)
- [ ] Créer section `contact_page` dans `fr.json`
- [ ] Ajouter clés:
  - `contact_page.meta_description`
  - `contact_page.intro`
  - `contact_page.by_email.title`
  - `contact_page.by_email.email`
  - `contact_page.by_phone.title`
  - `contact_page.by_phone.number`
  - `contact_page.by_phone.hours`
  - `contact_page.social.title`
  - `contact_page.social.content`
  - `contact_page.form.title`
  - `contact_page.form.description`
  - `contact_page.form.name_label`
  - `contact_page.form.email_label`
  - `contact_page.form.subject_label`
  - `contact_page.form.message_label`
  - `contact_page.form.submit_button`
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

#### 1.1.4 Page Espace Pro (`/espace-pro.astro`)
- [ ] Créer section `pro_space_page` dans `fr.json`
- [ ] Ajouter toutes les clés pour:
  - Meta description
  - Hero subtitle
  - Boutons CTA
  - Section "Pourquoi rejoindre"
  - 6+ cartes de bénéfices
  - Fonctionnalités listées
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

#### 1.1.5 Page Signaler (`/signaler.astro`)
- [ ] Créer section `report_page` dans `fr.json`
- [ ] Ajouter clés pour:
  - Meta description
  - Intro
  - Types de signalement (5 types)
  - Section "Comment signaler"
  - Labels de formulaire
  - Options du select
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

#### 1.1.6 Pages Légales

##### Confidentialité (`/confidentialite.astro`)
- [ ] Créer section `privacy_page` dans `fr.json`
- [ ] Ajouter ~10 sections avec titres et contenus
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

##### CGU (`/cgu.astro`)
- [ ] Créer section `terms_page` dans `fr.json`
- [ ] Ajouter 9 articles numérotés
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

##### CGV (`/cgv.astro`)
- [ ] Créer section `sales_terms_page` dans `fr.json`
- [ ] Ajouter 11 articles numérotés
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

##### Mentions Légales (`/mentions-legales.astro`)
- [ ] Créer section `legal_page` dans `fr.json`
- [ ] Ajouter toutes les sections légales
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

##### Cookies (`/cookies.astro`)
- [ ] Créer section `cookies_page` dans `fr.json`
- [ ] Ajouter sections sur les cookies
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

#### 1.1.7 Autres Pages

##### Offres (`/offres.astro`)
- [ ] Créer section `offers_page` dans `fr.json`
- [ ] Ajouter descriptions des offres
- [ ] Ajouter tarifs et fonctionnalités
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

##### Publicité (`/publicite.astro`)
- [ ] Créer section `advertising_page` dans `fr.json`
- [ ] Ajouter formats et tarifs publicitaires
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

##### Partenaire (`/partenaire.astro`)
- [ ] Créer section `partner_page` dans `fr.json`
- [ ] Ajouter avantages du partenariat
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

##### Presse (`/presse.astro`)
- [ ] Créer section `press_page` dans `fr.json`
- [ ] Ajouter kit presse et communiqués
- [ ] Traduire dans toutes les langues
- [ ] Remplacer les textes hardcodés
- [ ] Tester sur toutes les langues

### 1.2 Ajouter Nouvelles Clés de Traduction

#### 1.2.1 Formulaires
- [ ] Créer section `forms` dans tous les fichiers de langue
- [ ] Ajouter:
  - `forms.name_label`
  - `forms.first_name_label`
  - `forms.last_name_label`
  - `forms.email_label`
  - `forms.phone_label`
  - `forms.address_label`
  - `forms.message_label`
  - `forms.subject_label`
  - `forms.required_field`
  - `forms.optional_field`

#### 1.2.2 Placeholders
- [ ] Créer section `placeholders` dans tous les fichiers
- [ ] Ajouter:
  - `placeholders.enter_name`
  - `placeholders.enter_email`
  - `placeholders.enter_phone`
  - `placeholders.enter_message`
  - `placeholders.search`
  - `placeholders.select_option`

#### 1.2.3 Validation
- [ ] Créer section `validation` dans tous les fichiers
- [ ] Ajouter:
  - `validation.required`
  - `validation.invalid_email`
  - `validation.invalid_phone`
  - `validation.min_length`
  - `validation.max_length`
  - `validation.must_accept`

#### 1.2.4 Messages de Succès
- [ ] Créer section `success` dans tous les fichiers
- [ ] Ajouter:
  - `success.form_submitted`
  - `success.contact_sent`
  - `success.report_sent`
  - `success.saved`
  - `success.updated`
  - `success.deleted`

#### 1.2.5 Messages d'Erreur
- [ ] Créer section `errors` dans tous les fichiers
- [ ] Ajouter:
  - `errors.generic`
  - `errors.network`
  - `errors.not_found`
  - `errors.server_error`
  - `errors.validation_failed`
  - `errors.try_again`

#### 1.2.6 Actions Courantes
- [ ] Créer section `actions` dans tous les fichiers
- [ ] Ajouter:
  - `actions.save`
  - `actions.cancel`
  - `actions.edit`
  - `actions.delete`
  - `actions.share`
  - `actions.download`
  - `actions.upload`
  - `actions.submit`
  - `actions.send`
  - `actions.close`
  - `actions.open`
  - `actions.select`
  - `actions.clear`
  - `actions.reset`
  - `actions.apply`
  - `actions.confirm`
  - `actions.back`
  - `actions.next`
  - `actions.previous`
  - `actions.finish`

#### 1.2.7 Navigation
- [ ] Créer section `navigation` dans tous les fichiers
- [ ] Ajouter:
  - `navigation.home`
  - `navigation.back`
  - `navigation.forward`
  - `navigation.page_of` (Page X sur Y)
  - `navigation.first_page`
  - `navigation.last_page`
  - `navigation.previous_page`
  - `navigation.next_page`

#### 1.2.8 Dates et Temps
- [ ] Créer section `date_time` dans tous les fichiers
- [ ] Ajouter:
  - Jours de la semaine (lundi, mardi, etc.)
  - Mois de l'année
  - Formats de date
  - `date_time.today`
  - `date_time.yesterday`
  - `date_time.tomorrow`
  - `date_time.days_ago`
  - `date_time.hours_ago`
  - `date_time.minutes_ago`

#### 1.2.9 États Vides
- [ ] Créer section `empty_states` dans tous les fichiers
- [ ] Ajouter:
  - `empty_states.no_results`
  - `empty_states.no_items`
  - `empty_states.no_favorites`
  - `empty_states.no_bookings`
  - `empty_states.no_reviews`
  - `empty_states.start_exploring`

#### 1.2.10 Confirmations
- [ ] Créer section `confirmations` dans tous les fichiers
- [ ] Ajouter:
  - `confirmations.are_you_sure`
  - `confirmations.delete_item`
  - `confirmations.cannot_undo`
  - `confirmations.yes`
  - `confirmations.no`
  - `confirmations.proceed`

---

## 2. Composants Atomiques (Atoms)

### 2.1 Composant Input
- [ ] Créer `/src/components/atoms/Input.astro`
- [ ] Props:
  - `type` (text, email, password, tel, url, number, date, time)
  - `name`
  - `id`
  - `value`
  - `placeholder`
  - `label`
  - `required`
  - `disabled`
  - `readonly`
  - `error`
  - `helpText`
  - `minLength`
  - `maxLength`
  - `pattern`
  - `autocomplete`
- [ ] Styles:
  - Bordure et padding cohérents
  - État focus (anneau bleu)
  - État error (bordure rouge)
  - État disabled (grisé)
  - Responsive
- [ ] Accessibilité:
  - Label associé correctement
  - ARIA attributes pour erreurs
  - Support du clavier
- [ ] Tester avec tous les types
- [ ] Documenter l'utilisation

### 2.2 Composant Textarea
- [ ] Créer `/src/components/atoms/Textarea.astro`
- [ ] Props:
  - `name`
  - `id`
  - `value`
  - `placeholder`
  - `label`
  - `required`
  - `disabled`
  - `readonly`
  - `error`
  - `helpText`
  - `rows`
  - `cols`
  - `minLength`
  - `maxLength`
  - `resize` (none, vertical, horizontal, both)
- [ ] Styles cohérents avec Input
- [ ] Compteur de caractères optionnel
- [ ] Accessibilité complète
- [ ] Tester
- [ ] Documenter

### 2.3 Composant Select
- [ ] Créer `/src/components/atoms/Select.astro`
- [ ] Props:
  - `name`
  - `id`
  - `value`
  - `label`
  - `required`
  - `disabled`
  - `error`
  - `helpText`
  - `options` (array d'objets {value, label})
  - `multiple`
  - `size`
- [ ] Styles cohérents avec Input
- [ ] Icône de flèche personnalisée
- [ ] Accessibilité complète
- [ ] Tester
- [ ] Documenter

### 2.4 Composant Checkbox
- [ ] Créer `/src/components/atoms/Checkbox.astro`
- [ ] Props:
  - `name`
  - `id`
  - `checked`
  - `value`
  - `label`
  - `required`
  - `disabled`
  - `error`
- [ ] Styles:
  - Case personnalisée (pas le défaut du navigateur)
  - Checkmark animé
  - État focus
  - État disabled
- [ ] Accessibilité complète
- [ ] Tester
- [ ] Documenter

### 2.5 Composant Radio
- [ ] Créer `/src/components/atoms/Radio.astro`
- [ ] Props similaires à Checkbox
- [ ] Style de bouton radio personnalisé
- [ ] Support des groupes de radios
- [ ] Accessibilité complète
- [ ] Tester
- [ ] Documenter

### 2.6 Composant Switch/Toggle
- [ ] Créer `/src/components/atoms/Switch.astro`
- [ ] Props:
  - `name`
  - `id`
  - `checked`
  - `disabled`
  - `label`
  - `size` (sm, md, lg)
- [ ] Style iOS-like toggle
- [ ] Animation de transition
- [ ] Accessibilité complète
- [ ] Tester
- [ ] Documenter

### 2.7 Composant Badge
- [ ] Créer `/src/components/atoms/Badge.astro`
- [ ] Props:
  - `variant` (primary, secondary, success, warning, error, info)
  - `size` (sm, md, lg)
  - `rounded` (boolean)
  - `outline` (boolean)
- [ ] Styles pour toutes les variantes
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 2.8 Composant Tag
- [ ] Créer `/src/components/atoms/Tag.astro`
- [ ] Props:
  - `label`
  - `removable` (boolean)
  - `variant`
  - `size`
  - `href` (optional)
- [ ] Style avec ou sans bouton de suppression
- [ ] Cliquable si href fourni
- [ ] Tester
- [ ] Documenter

### 2.9 Composant Avatar
- [ ] Créer `/src/components/atoms/Avatar.astro`
- [ ] Props:
  - `src` (image URL)
  - `alt`
  - `initials` (fallback)
  - `size` (xs, sm, md, lg, xl)
  - `shape` (circle, square)
- [ ] Affiche initiales si pas d'image
- [ ] Placeholder par défaut
- [ ] Tester
- [ ] Documenter

### 2.10 Composant Spinner/Loader
- [ ] Créer `/src/components/atoms/Spinner.astro`
- [ ] Props:
  - `size` (sm, md, lg)
  - `color`
  - `variant` (circle, dots, bars)
- [ ] Animations CSS
- [ ] Accessible (aria-label)
- [ ] Tester
- [ ] Documenter

### 2.11 Composant Tooltip
- [ ] Créer `/src/components/atoms/Tooltip.astro`
- [ ] Props:
  - `content`
  - `position` (top, bottom, left, right)
  - `trigger` (hover, click, focus)
- [ ] Animation d'apparition
- [ ] Positionnement automatique si hors écran
- [ ] Accessibilité (aria-describedby)
- [ ] Tester
- [ ] Documenter

### 2.12 Composant Link
- [ ] Créer `/src/components/atoms/Link.astro`
- [ ] Props:
  - `href`
  - `external` (boolean)
  - `underline` (boolean)
  - `variant` (primary, secondary, danger)
- [ ] Support des liens localisés
- [ ] Icône externe si lien externe
- [ ] Styles cohérents
- [ ] Tester
- [ ] Documenter

---

## 3. Composants Moléculaires (Molecules)

### 3.1 Composant SearchBar
- [ ] Créer `/src/components/molecules/SearchBar.astro`
- [ ] Props:
  - `placeholder`
  - `value`
  - `showSuggestions` (boolean)
  - `suggestions` (array)
  - `onSearch` (callback)
- [ ] Input avec icône de loupe
- [ ] Bouton de recherche
- [ ] Bouton clear (X) si texte
- [ ] Liste de suggestions en dessous
- [ ] Clavier navigation (haut/bas, entrée)
- [ ] Accessibilité complète
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 3.2 Composant FilterGroup
- [ ] Créer `/src/components/molecules/FilterGroup.astro`
- [ ] Props:
  - `title`
  - `filters` (array)
  - `type` (checkbox, radio, select)
  - `collapsible` (boolean)
- [ ] Groupe de checkboxes/radios
- [ ] Bouton "Effacer" pour reset
- [ ] Animation collapse si collapsible
- [ ] Accessibilité
- [ ] Tester
- [ ] Documenter

### 3.3 Composant Pagination
- [ ] Créer `/src/components/molecules/Pagination.astro`
- [ ] Props:
  - `currentPage`
  - `totalPages`
  - `onPageChange`
  - `showFirstLast` (boolean)
  - `maxVisible` (nombre de pages visibles)
- [ ] Boutons Précédent/Suivant
- [ ] Boutons Première/Dernière page
- [ ] Numéros de page
- [ ] Page actuelle mise en évidence
- [ ] Ellipsis (...) si beaucoup de pages
- [ ] Responsive (moins de numéros sur mobile)
- [ ] Accessibilité (aria-label)
- [ ] Tester
- [ ] Documenter

### 3.4 Composant Breadcrumb
- [ ] Créer `/src/components/molecules/Breadcrumb.astro`
- [ ] Props:
  - `items` (array de {label, href})
  - `separator` (/, >, custom)
- [ ] Affichage du fil d'Ariane
- [ ] Dernier élément non cliquable
- [ ] Séparateurs entre éléments
- [ ] Schema.org structured data
- [ ] Responsive (collapse sur mobile)
- [ ] Accessibilité (nav, aria-label)
- [ ] Tester
- [ ] Documenter

### 3.5 Composant Alert/Notification
- [ ] Créer `/src/components/molecules/Alert.astro`
- [ ] Props:
  - `variant` (success, error, warning, info)
  - `title`
  - `message`
  - `dismissible` (boolean)
  - `icon` (boolean)
  - `autoClose` (durée en ms)
- [ ] Styles pour chaque variante
- [ ] Icône appropriée pour chaque type
- [ ] Bouton de fermeture si dismissible
- [ ] Auto-fermeture avec timer
- [ ] Animation d'apparition/disparition
- [ ] Accessibilité (role="alert")
- [ ] Tester
- [ ] Documenter

### 3.6 Composant Modal/Dialog
- [ ] Créer `/src/components/molecules/Modal.astro`
- [ ] Props:
  - `isOpen` (boolean)
  - `title`
  - `size` (sm, md, lg, xl, fullscreen)
  - `closeOnOverlay` (boolean)
  - `showCloseButton` (boolean)
- [ ] Overlay sombre en arrière-plan
- [ ] Contenu centré
- [ ] Bouton de fermeture (X)
- [ ] Fermeture sur clic overlay
- [ ] Fermeture sur Escape
- [ ] Empêche scroll du body quand ouvert
- [ ] Animation d'ouverture/fermeture
- [ ] Accessibilité (focus trap, aria-modal)
- [ ] Tester
- [ ] Documenter

### 3.7 Composant Accordion
- [ ] Créer `/src/components/molecules/Accordion.astro`
- [ ] Props:
  - `items` (array de {title, content})
  - `allowMultiple` (boolean)
  - `defaultOpen` (index ou array)
- [ ] Sections pliables/dépliables
- [ ] Icône chevron (rotation animée)
- [ ] Un seul ouvert à la fois si !allowMultiple
- [ ] Animation smooth
- [ ] Accessibilité (aria-expanded)
- [ ] Tester
- [ ] Documenter

### 3.8 Composant Tabs
- [ ] Créer `/src/components/molecules/Tabs.astro`
- [ ] Props:
  - `tabs` (array de {label, content, icon})
  - `defaultTab` (index)
  - `variant` (line, pills, enclosed)
- [ ] Liste de tabs cliquables
- [ ] Contenu change selon tab sélectionné
- [ ] Tab actif mis en évidence
- [ ] Navigation clavier (gauche/droite)
- [ ] Responsive (scroll horizontal sur mobile)
- [ ] Accessibilité (role="tablist")
- [ ] Tester
- [ ] Documenter

### 3.9 Composant Rating/Stars
- [ ] Créer `/src/components/molecules/Rating.astro`
- [ ] Props:
  - `rating` (nombre 0-5)
  - `maxRating` (default 5)
  - `readonly` (boolean)
  - `size` (sm, md, lg)
  - `showValue` (boolean)
  - `allowHalf` (boolean)
- [ ] Affichage d'étoiles pleines/vides
- [ ] Demi-étoiles si allowHalf
- [ ] Cliquable si !readonly
- [ ] Survol change les étoiles si !readonly
- [ ] Affiche le nombre à côté si showValue
- [ ] Accessibilité
- [ ] Tester
- [ ] Documenter

### 3.10 Composant SocialShare
- [ ] Créer `/src/components/molecules/SocialShare.astro`
- [ ] Props:
  - `url`
  - `title`
  - `description`
  - `platforms` (array: facebook, twitter, whatsapp, email, linkedin)
- [ ] Boutons pour chaque plateforme
- [ ] Icônes des réseaux sociaux
- [ ] Liens de partage corrects
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 3.11 Composant ImageGallery
- [ ] Créer `/src/components/molecules/ImageGallery.astro`
- [ ] Props:
  - `images` (array de {src, alt, caption})
  - `columns` (nombre)
  - `lightbox` (boolean)
- [ ] Grille d'images
- [ ] Ouverture en lightbox si activé
- [ ] Navigation dans le lightbox
- [ ] Zoom
- [ ] Responsive (colonnes adaptatives)
- [ ] Lazy loading
- [ ] Accessibilité
- [ ] Tester
- [ ] Documenter

### 3.12 Composant DatePicker
- [ ] Créer `/src/components/molecules/DatePicker.astro`
- [ ] Props:
  - `value`
  - `minDate`
  - `maxDate`
  - `format`
  - `placeholder`
- [ ] Calendrier déroulant
- [ ] Navigation mois/année
- [ ] Sélection de date
- [ ] Validation des dates
- [ ] Localisation (jours/mois traduits)
- [ ] Accessibilité
- [ ] Tester
- [ ] Documenter

### 3.13 Composant FormField
- [ ] Créer `/src/components/molecules/FormField.astro`
- [ ] Props:
  - `type` (text, email, textarea, select, etc.)
  - `label`
  - `name`
  - `required`
  - `error`
  - `helpText`
  - Autres props selon le type
- [ ] Wrapper unifié pour tous les champs
- [ ] Label + Input/Select/Textarea + Messages
- [ ] Gestion des erreurs
- [ ] Accessibilité complète
- [ ] Tester tous les types
- [ ] Documenter

---

## 4. Composants Organismes (Organisms)

### 4.1 Améliorer Header Existant
- [ ] Ajouter sticky header au scroll
- [ ] Améliorer le menu mobile (slide-in)
- [ ] Ajouter search bar dans le header
- [ ] Mega-menu pour les catégories
- [ ] Badge de notifications (préparation future)
- [ ] Tester responsive
- [ ] Vérifier accessibilité

### 4.2 Améliorer Footer Existant
- [ ] Ajouter newsletter signup
- [ ] Améliorer la structure en colonnes
- [ ] Ajouter liens réseaux sociaux avec icônes
- [ ] Tester responsive
- [ ] Vérifier accessibilité

### 4.3 Composant HeroSection
- [ ] Créer `/src/components/organisms/HeroSection.astro`
- [ ] Props:
  - `title`
  - `subtitle`
  - `backgroundImage`
  - `overlay` (boolean)
  - `height` (sm, md, lg, full)
  - `alignment` (left, center, right)
  - `cta` (array de boutons)
- [ ] Image de fond
- [ ] Overlay sombre optionnel
- [ ] Titre et sous-titre
- [ ] Boutons call-to-action
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 4.4 Composant FeaturedGrid
- [ ] Créer `/src/components/organisms/FeaturedGrid.astro`
- [ ] Props:
  - `items` (array)
  - `columns` (2, 3, 4)
  - `type` (restaurants, hebergements, activites)
- [ ] Grille responsive de cartes
- [ ] Utilise le composant Card
- [ ] Adaptation automatique des colonnes
- [ ] Tester
- [ ] Documenter

### 4.5 Composant EventCard (spécialisée)
- [ ] Créer `/src/components/organisms/EventCard.astro`
- [ ] Props:
  - `event` (objet)
  - `variant` (compact, detailed)
- [ ] Carte spécifique pour événements
- [ ] Date/heure mis en évidence
- [ ] Lieu
- [ ] Image
- [ ] Bouton d'inscription
- [ ] Badge de catégorie
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 4.6 Composant RestaurantCard (spécialisée)
- [ ] Créer `/src/components/organisms/RestaurantCard.astro`
- [ ] Props:
  - `restaurant` (objet)
  - `variant` (compact, detailed)
- [ ] Carte spécifique pour restaurants
- [ ] Image
- [ ] Nom et description courte
- [ ] Type de cuisine
- [ ] Gamme de prix
- [ ] Note (étoiles)
- [ ] Horaires d'ouverture
- [ ] Badge "Ouvert maintenant"
- [ ] Distance (si géolocalisation)
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 4.7 Composant AccommodationCard (spécialisée)
- [ ] Créer `/src/components/organisms/AccommodationCard.astro`
- [ ] Props:
  - `accommodation` (objet)
  - `variant` (compact, detailed)
- [ ] Carte spécifique pour hébergements
- [ ] Image
- [ ] Nom et type
- [ ] Prix par nuit
- [ ] Capacité (nb de personnes)
- [ ] Équipements (icônes)
- [ ] Note
- [ ] Badge disponibilité
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 4.8 Composant Sidebar
- [ ] Créer `/src/components/organisms/Sidebar.astro`
- [ ] Props:
  - `position` (left, right)
  - `collapsible` (boolean)
  - `sticky` (boolean)
- [ ] Barre latérale pour filtres ou navigation
- [ ] Collapsible sur mobile
- [ ] Sticky si activé
- [ ] Responsive
- [ ] Tester
- [ ] Documenter

### 4.9 Composant CookieBanner
- [ ] Créer `/src/components/organisms/CookieBanner.astro`
- [ ] Props:
  - `message`
  - `acceptText`
  - `rejectText`
  - `manageText`
- [ ] Bannière fixe en bas
- [ ] Boutons Accepter/Refuser
- [ ] Lien vers gestion des cookies
- [ ] Stockage du consentement (localStorage)
- [ ] Animation d'apparition
- [ ] Accessibilité
- [ ] Tester
- [ ] Documenter

### 4.10 Composant NewsletterSignup
- [ ] Créer `/src/components/organisms/NewsletterSignup.astro`
- [ ] Props:
  - `variant` (inline, card, modal)
  - `title`
  - `description`
- [ ] Formulaire d'inscription newsletter
- [ ] Input email + bouton
- [ ] Validation email
- [ ] Message de succès/erreur
- [ ] Responsive
- [ ] Accessibilité
- [ ] Tester
- [ ] Documenter

---

## 5. Pages Manquantes

### 5.1 Page de Recherche
- [ ] Créer `/src/pages/recherche.astro`
- [ ] Barre de recherche en haut
- [ ] Filtres sur le côté (Sidebar)
- [ ] Résultats en grille/liste
- [ ] Pagination
- [ ] Tri (pertinence, date, prix, note)
- [ ] Recherche dans tous les types de contenu
- [ ] Affichage du nombre de résultats
- [ ] Message si aucun résultat
- [ ] Responsive
- [ ] SEO (meta tags)
- [ ] Tester

### 5.2 Page d'Aide
- [ ] Créer `/src/pages/aide.astro`
- [ ] Centre d'aide avec catégories
- [ ] Barre de recherche dans l'aide
- [ ] Articles d'aide organisés
- [ ] Guides d'utilisation
- [ ] Tutoriels
- [ ] Vidéos explicatives (préparation)
- [ ] Liens vers FAQ et Contact
- [ ] Responsive
- [ ] SEO
- [ ] Tester

### 5.3 Page Accessibilité
- [ ] Créer `/src/pages/accessibilite.astro`
- [ ] Déclaration d'accessibilité
- [ ] Niveau de conformité WCAG
- [ ] Fonctionnalités d'accessibilité
- [ ] Raccourcis clavier
- [ ] Contact pour signaler problèmes
- [ ] Responsive
- [ ] SEO
- [ ] Tester

### 5.4 Page Plan du Site (HTML)
- [ ] Créer `/src/pages/plan-du-site.astro`
- [ ] Liste hiérarchique de toutes les pages
- [ ] Liens vers toutes les sections
- [ ] Organisé par catégories
- [ ] Responsive
- [ ] SEO
- [ ] Tester

### 5.5 Page Événements (index manquant)
- [ ] Créer `/src/pages/evenements/index.astro`
- [ ] Liste de tous les événements
- [ ] Filtres par:
  - Date (aujourd'hui, ce week-end, ce mois)
  - Type d'événement
  - Lieu
- [ ] Vue calendrier et vue liste
- [ ] Tri par date/popularité
- [ ] Pagination
- [ ] Responsive
- [ ] SEO
- [ ] Tester

### 5.6 Page Événements par Catégorie
- [ ] Créer `/src/pages/evenements/[category].astro`
- [ ] Affichage des événements d'une catégorie
- [ ] Réutiliser la logique de index
- [ ] Breadcrumb
- [ ] Responsive
- [ ] SEO
- [ ] Tester

---

## 6. Pages Existantes à Améliorer

### 6.1 Page d'Accueil (`/index.astro`)
- [ ] Vérifier et extraire tout texte hardcodé
- [ ] Ajouter section Newsletter signup
- [ ] Améliorer la section Featured (FeaturedGrid)
- [ ] Ajouter section Témoignages (préparation)
- [ ] Améliorer la section Agenda avec EventCard
- [ ] Optimiser les images (Image component Astro)
- [ ] Tester responsive
- [ ] Vérifier SEO

### 6.2 Page Agenda (`/agenda.astro`)
- [ ] Extraire textes hardcodés
- [ ] Ajouter vue calendrier (pas que liste)
- [ ] Améliorer les filtres (FilterGroup)
- [ ] Utiliser EventCard pour affichage
- [ ] Ajouter pagination
- [ ] Optimiser images
- [ ] Tester responsive
- [ ] Vérifier SEO

### 6.3 Page Live (`/live.astro`)
- [ ] Extraire textes hardcodés
- [ ] Définir le contenu de cette page
- [ ] Fil d'actualités en temps réel
- [ ] Derniers événements ajoutés
- [ ] Annonces importantes
- [ ] Météo d'Annecy
- [ ] Tester responsive
- [ ] Vérifier SEO

### 6.4 Pages de Listing (restaurants, hébergements, activités, services)
- [ ] Extraire textes hardcodés des index
- [ ] Améliorer les filtres avec FilterGroup
- [ ] Ajouter tri (prix, note, distance)
- [ ] Utiliser les composants de cartes spécialisées
- [ ] Ajouter pagination
- [ ] Améliorer la vue catégorie
- [ ] Breadcrumb sur toutes les pages
- [ ] Optimiser images
- [ ] Tester responsive
- [ ] Vérifier SEO de chaque page

### 6.5 Pages de Détail (restaurants, hébergements, etc.)
- [ ] Extraire textes hardcodés
- [ ] Ajouter galerie d'images (ImageGallery)
- [ ] Section de partage social (SocialShare)
- [ ] Carte interactive (préparation)
- [ ] Horaires d'ouverture formatés
- [ ] Bouton "Favoris" (préparation)
- [ ] Section avis (préparation)
- [ ] Recommandations similaires
- [ ] Breadcrumb
- [ ] Schema.org structured data
- [ ] Optimiser images
- [ ] Tester responsive
- [ ] Vérifier SEO

### 6.6 Page Magazine (`/magazine/index.astro`)
- [ ] Extraire textes hardcodés
- [ ] Améliorer la grille d'articles
- [ ] Ajouter filtres par catégorie
- [ ] Articles à la une
- [ ] Pagination
- [ ] Optimiser images
- [ ] Tester responsive
- [ ] Vérifier SEO

### 6.7 Pages Articles (`/magazine/[slug].astro`)
- [ ] Extraire textes hardcodés
- [ ] Améliorer la mise en page
- [ ] Table des matières (TOC) auto-générée
- [ ] Temps de lecture estimé
- [ ] Date de publication
- [ ] Auteur (préparation)
- [ ] Tags
- [ ] Partage social
- [ ] Articles similaires
- [ ] Breadcrumb
- [ ] Schema.org (Article)
- [ ] Optimiser images
- [ ] Tester responsive
- [ ] Vérifier SEO

### 6.8 Page Sentiers (`/sentiers/index.astro`)
- [ ] Extraire textes hardcodés
- [ ] Filtres par difficulté, distance, durée
- [ ] Carte avec tous les sentiers (préparation)
- [ ] Tri
- [ ] Pagination
- [ ] Optimiser images
- [ ] Tester responsive
- [ ] Vérifier SEO

### 6.9 Pages Détail Sentier (`/trail/[slug].astro`)
- [ ] Extraire textes hardcodés
- [ ] Carte du parcours (préparation)
- [ ] Profil d'élévation (préparation)
- [ ] Galerie photos
- [ ] Informations pratiques
- [ ] Météo (préparation)
- [ ] Avis (préparation)
- [ ] Sentiers similaires
- [ ] Télécharger GPX (préparation)
- [ ] Breadcrumb
- [ ] Schema.org
- [ ] Tester responsive
- [ ] Vérifier SEO

---

## 7. Contenu

### 7.1 Restaurants
- [ ] Ajouter 10 nouveaux restaurants
- [ ] Ajouter 10 autres restaurants
- [ ] Ajouter 13 autres restaurants (total: 40)
- [ ] Pour chaque restaurant:
  - [ ] Photos de qualité (minimum 3)
  - [ ] Description complète
  - [ ] Horaires d'ouverture
  - [ ] Coordonnées complètes
  - [ ] Type de cuisine
  - [ ] Gamme de prix
  - [ ] Tags/attributs (terrasse, wifi, parking, etc.)

### 7.2 Hébergements
- [ ] Ajouter 6 nouveaux hébergements
- [ ] Ajouter 6 autres hébergements
- [ ] Ajouter 4 autres hébergements (total: 20)
- [ ] Pour chaque hébergement:
  - [ ] Photos de qualité (minimum 5)
  - [ ] Description complète
  - [ ] Capacité
  - [ ] Prix par nuit
  - [ ] Équipements
  - [ ] Coordonnées
  - [ ] Règlement intérieur

### 7.3 Activités
- [ ] Ajouter 6 nouvelles activités
- [ ] Ajouter 6 autres activités
- [ ] Ajouter 4 autres activités (total: 20)
- [ ] Pour chaque activité:
  - [ ] Photos de qualité
  - [ ] Description
  - [ ] Durée
  - [ ] Prix
  - [ ] Horaires/Disponibilité
  - [ ] Niveau requis
  - [ ] Coordonnées

### 7.4 Événements
- [ ] Ajouter 6 nouveaux événements
- [ ] Ajouter 6 autres événements
- [ ] Ajouter 4 autres événements (total: 20 pour ce mois)
- [ ] Créer des catégories d'événements si manquantes
- [ ] Pour chaque événement:
  - [ ] Image promotionnelle
  - [ ] Description détaillée
  - [ ] Date et heure précises
  - [ ] Lieu
  - [ ] Prix/Gratuit
  - [ ] Lien de réservation
  - [ ] Contact organisateur

### 7.5 Sentiers
- [ ] Ajouter 6 nouveaux sentiers
- [ ] Ajouter 6 autres sentiers
- [ ] Ajouter 4 autres sentiers (total: 20)
- [ ] Pour chaque sentier:
  - [ ] Photos du parcours
  - [ ] Description
  - [ ] Difficulté
  - [ ] Distance
  - [ ] Dénivelé
  - [ ] Durée estimée
  - [ ] Point de départ
  - [ ] Tracé GPX (si possible)
  - [ ] Points d'intérêt

### 7.6 Articles/Magazine
- [ ] Ajouter 6 nouveaux articles
- [ ] Ajouter 6 autres articles
- [ ] Ajouter 4 autres articles (total: 20)
- [ ] Pour chaque article:
  - [ ] Image principale
  - [ ] Contenu riche (minimum 500 mots)
  - [ ] Catégorie
  - [ ] Tags
  - [ ] Meta description
  - [ ] Date de publication

### 7.7 Services
- [ ] Ajouter 6 nouveaux services
- [ ] Ajouter 6 autres services (total: 16)
- [ ] Pour chaque service:
  - [ ] Photo/Logo
  - [ ] Description
  - [ ] Catégorie
  - [ ] Horaires
  - [ ] Coordonnées
  - [ ] Site web

### 7.8 Images
- [ ] Créer dossiers manquants dans `/public/images/`
- [ ] Ajouter placeholder images si nécessaire
- [ ] Optimiser toutes les images:
  - [ ] Compression
  - [ ] Formats WebP
  - [ ] Tailles multiples (responsive)
  - [ ] Alt text descriptif

---

## 8. Optimisations et Performance

### 8.1 Images
- [ ] Utiliser le composant `<Image>` d'Astro pour toutes les images
- [ ] Générer versions responsive
- [ ] Lazy loading sur toutes les images
- [ ] Format WebP avec fallback
- [ ] Sprites pour icônes si nécessaire

### 8.2 CSS
- [ ] Audit du CSS non utilisé
- [ ] Minification du CSS
- [ ] Critical CSS inline
- [ ] Vérifier que les variables CSS sont bien utilisées partout

### 8.3 JavaScript
- [ ] Audit du JS non utilisé
- [ ] Code splitting si nécessaire
- [ ] Minification
- [ ] Defer/async pour scripts non critiques

### 8.4 Fonts
- [ ] Optimiser le chargement des fonts
- [ ] Subset des fonts si possible
- [ ] Preload des fonts critiques
- [ ] font-display: swap

### 8.5 Build
- [ ] Vérifier la taille des bundles
- [ ] Analyser le build avec astro-bundle-analyzer
- [ ] Optimiser les imports

---

## 9. SEO et Accessibilité

### 9.1 SEO Général
- [ ] Vérifier meta title sur toutes les pages (unique, <60 chars)
- [ ] Vérifier meta description sur toutes les pages (unique, <160 chars)
- [ ] Générer sitemap.xml automatique
- [ ] Créer robots.txt optimisé
- [ ] Canonical URLs sur toutes les pages
- [ ] Open Graph tags sur toutes les pages
- [ ] Twitter Card tags sur toutes les pages
- [ ] Hreflang tags pour les 6 langues
- [ ] Structured data Schema.org:
  - [ ] LocalBusiness pour restaurants/hébergements
  - [ ] Event pour événements
  - [ ] Article pour articles
  - [ ] BreadcrumbList pour breadcrumbs
  - [ ] Organization pour le site

### 9.2 Performance SEO
- [ ] Tester avec Google PageSpeed Insights
- [ ] Améliorer le score (objectif: >90)
- [ ] Core Web Vitals optimisés:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1

### 9.3 Accessibilité
- [ ] Tester avec WAVE ou axe DevTools
- [ ] Corriger toutes les erreurs d'accessibilité
- [ ] Vérifier contraste des couleurs (WCAG AA minimum)
- [ ] Navigation au clavier complète
- [ ] Focus visible sur tous les éléments interactifs
- [ ] ARIA labels appropriés
- [ ] Landmarks HTML5 (header, nav, main, aside, footer)
- [ ] Skip to content link
- [ ] Images avec alt text descriptif
- [ ] Formulaires avec labels associés
- [ ] Messages d'erreur accessibles
- [ ] Tables avec headers appropriés
- [ ] Liens descriptifs (pas "cliquez ici")

### 9.4 Tests Accessibilité Spécifiques
- [ ] Tester avec lecteur d'écran (NVDA/JAWS/VoiceOver)
- [ ] Tester navigation clavier uniquement
- [ ] Tester avec zoom 200%
- [ ] Tester en mode contraste élevé
- [ ] Vérifier que tout fonctionne sans JS

---

## 10. Tests et Validation

### 10.1 Tests Cross-Browser
- [ ] Chrome/Edge (dernières versions)
- [ ] Firefox (dernière version)
- [ ] Safari (dernière version)
- [ ] Safari iOS
- [ ] Chrome Android

### 10.2 Tests Responsive
- [ ] Mobile (320px, 375px, 414px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1280px, 1440px, 1920px)
- [ ] Large Desktop (2560px+)

### 10.3 Tests Fonctionnels
- [ ] Toutes les pages se chargent
- [ ] Tous les liens fonctionnent
- [ ] Navigation fonctionne
- [ ] Changement de langue fonctionne
- [ ] Changement de thème fonctionne
- [ ] Tous les formulaires ont validation
- [ ] Recherche fonctionne (quand implémentée)
- [ ] Filtres fonctionnent
- [ ] Pagination fonctionne
- [ ] Tri fonctionne

### 10.4 Tests de Performance
- [ ] Lighthouse (score >90)
- [ ] GTmetrix
- [ ] WebPageTest
- [ ] Temps de chargement < 3s

### 10.5 Tests de Contenu
- [ ] Pas de texte en dur en français
- [ ] Toutes les traductions présentes
- [ ] Toutes les images ont un alt
- [ ] Pas de liens cassés
- [ ] Pas d'images 404

### 10.6 Validation HTML/CSS
- [ ] Validateur W3C HTML
- [ ] Validateur W3C CSS
- [ ] Pas d'erreurs critiques
- [ ] Corriger les warnings importants

---

## 📊 Progression

**Priorité:** Toutes les tâches sont considérées comme prioritaires.

**Ordre Suggéré:**

1. **Phase 1 - Traductions** (1-2 semaines)
   - Commencer par les pages les plus visitées
   - Extraire tout le texte hardcodé
   - Compléter toutes les traductions

2. **Phase 2 - Composants de Base** (2-3 semaines)
   - Créer tous les composants atomiques
   - Créer les composants moléculaires essentiels
   - Tester et documenter

3. **Phase 3 - Pages et Contenu** (3-4 semaines)
   - Améliorer les pages existantes
   - Créer les pages manquantes
   - Ajouter le contenu (parallèle)

4. **Phase 4 - Composants Avancés** (2 semaines)
   - Créer les organismes manquants
   - Intégrer dans les pages

5. **Phase 5 - Optimisations** (1-2 semaines)
   - Performance
   - SEO
   - Accessibilité
   - Tests

**Estimation Totale:** 9-13 semaines de travail

---

## 📝 Notes

- Cette liste se concentre uniquement sur le **frontend**
- La **base de données**, l'**authentification** et les **fonctionnalités backend** seront ajoutées dans une phase ultérieure
- Chaque tâche cochée doit être testée et validée
- La documentation doit être maintenue à jour
- Les commits doivent être atomiques et bien nommés

---

**Document créé le:** 14 octobre 2025  
**Dernière mise à jour:** 14 octobre 2025  
**Prochaine révision:** Hebdomadaire

