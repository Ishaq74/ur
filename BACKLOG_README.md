# Guide d'utilisation du Backlog

## 📄 Document principal: BACKLOG.md

Le fichier `BACKLOG.md` contient l'ensemble des notes du backlog du projet, organisées de manière structurée et prêtes à être utilisées pour la gestion du projet.

## 🎯 Contenu du Backlog

Le backlog contient **10 issues détaillées** réparties en 3 niveaux de priorité:

### Issues Critiques (4 issues - 19-48h)
1. Moteur de recherche fonctionnel
2. Remplacement des contenus Featured
3. Correction des images manquantes (404)
4. Formulaires fonctionnels

### Issues Haute Priorité (4 issues - 21-38h)
5. Filtrage des catégories par langue
6. Traduction des textes hardcodés
7. Masquage des liens inexistants
8. Ajout d'images pour toutes les entrées

### Issues Priorité Moyenne (2 issues - 3-10h)
9. Nettoyage de la FAQ
10. Création d'issues GitHub

## 📊 Effort Total Estimé

- **Minimum:** 43 heures (~5 jours)
- **Maximum:** 96 heures (~12 jours)
- **Organisation:** 4 sprints sur 5 semaines

## 🚀 Comment utiliser ce backlog

### Option 1: Import manuel dans GitHub Issues
Copier-coller chaque issue du document dans GitHub Issues en conservant:
- Le titre
- Les labels (enhancement, bug, ux, i18n, etc.)
- La priorité dans la description
- L'estimation
- Les critères d'acceptation
- La checklist

### Option 2: Export CSV pour import GitHub
Le document peut être transformé en CSV au format GitHub Issue Importer:
```
Title,Description,Labels,Assignees,Milestone
"[URGENT] Rendre le moteur de recherche fonctionnel","Description...","enhancement,bug,ux","Ishaq74",""
```

### Option 3: Script automatisé via API GitHub
Créer un script qui lit le BACKLOG.md et crée automatiquement les issues via l'API GitHub.

## 📋 Structure de chaque issue

Chaque issue dans le backlog contient:
- **Labels** - Pour catégorisation
- **Priorité** - Critical, High, Medium
- **Estimation** - En heures ou jours
- **Assignee** - Personne responsable
- **Description** - Détails du problème/feature
- **Fichiers à modifier** - Liste des fichiers concernés
- **Critères d'acceptation** - Checklist des objectifs
- **Checklist détaillée** - Étapes à suivre
- **Notes/Risques** - Informations additionnelles

## 🗂️ Organisation en Sprints

Le backlog propose une organisation en 4 sprints:

**Sprint 1 (Semaine 1):** Corrections critiques visuelles
**Sprint 2 (Semaine 2):** Traductions et i18n
**Sprint 3 (Semaines 3-4):** Fonctionnalités essentielles
**Sprint 4 (Semaine 5):** Organisation et maintenance

## 📈 Métriques incluses

Le document inclut des tableaux de suivi:
- Vue d'ensemble par priorité
- Progrès par catégorie
- Recommandations pour prochaines étapes
- Dépendances entre issues
- Risques identifiés

## 🔗 Liens avec Project Board

Le backlog recommande d'utiliser le project board "untiled" avec les colonnes:
- 📋 Backlog
- 🔜 To Do
- 🏗️ In Progress
- ✅ Done

## ✅ Prochaines actions recommandées

1. **Immédiat:** Corriger les images manquantes (Issue #3)
2. **Court terme:** Filtrer catégories par langue (Issue #5)
3. **Moyen terme:** Implémenter la recherche (Issue #1)

---

**Document créé:** 1er Novembre 2025
**Maintenu par:** @Ishaq74
**Version:** 1.0.0
