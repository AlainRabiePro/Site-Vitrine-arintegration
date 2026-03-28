# AR Integration — Site Vitrine Next.js

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev
# → Ouvrir http://localhost:3000

# 3. Build pour la production (OVH)
npm run build
# → Génère le dossier /out à uploader sur OVH
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # Layout principal + polices
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
└── components/
    ├── Cursor.tsx        # Curseur personnalisé
    ├── Navbar.tsx        # Navigation fixe
    ├── Hero.tsx          # Section hero
    ├── Marquee.tsx       # Bandeau défilant
    ├── Services.tsx      # Nos services
    ├── Process.tsx       # Notre méthode
    ├── Stats.tsx         # Chiffres clés
    ├── Portfolio.tsx     # Réalisations
    ├── Testimonials.tsx  # Avis clients
    ├── Pricing.tsx       # Tarifs
    ├── Contact.tsx       # Formulaire contact
    └── Footer.tsx        # Pied de page
```

## 🌐 Déploiement sur OVH

1. Exécuter `npm run build`
2. Le dossier `/out` est généré
3. Uploader le contenu de `/out` via FTP sur votre hébergement OVH
4. C'est tout ! Le site est statique, aucun serveur Node.js requis.

## ✏️ Personnalisation

- **Tarifs** → `src/components/Pricing.tsx`
- **Services** → `src/components/Services.tsx`
- **Portfolio** → `src/components/Portfolio.tsx`
- **Contact** → `src/components/Contact.tsx` (email)
- **Témoignages** → `src/components/Testimonials.tsx`
