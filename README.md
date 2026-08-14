# Le site de Colophon

Astro en sortie statique, deux pages (anglais et français), aucune intégration,
aucun script côté client, aucune police téléchargée. Le build produit deux
fichiers HTML d'une vingtaine de kilo-octets avec le CSS incorporé dedans.

```bash
npm install
```
```bash
npm run dev
```
```bash
npm run build
```

`dev` sert sur le port 4321, `build` écrit dans `dist/`.

## Pourquoi pas Framer Motion

Parce qu'il faudrait React sur une page qui n'a pas un seul état. Le seul
mouvement du site est une montée de douze pixels sur le premier bloc, en
`transform` et `opacity`, désactivée si le système demande moins d'animation.
Trois lignes de CSS contre 40 ko de JavaScript, et une page qui s'affiche même
si le script ne charge jamais. Le jour où une vraie interaction arrive, une
démonstration jouable de la vue Tri par exemple, Astro laisse ajouter un îlot
React sur ce composant seul, sans convertir le reste.

## Où ça vit

Aujourd'hui dans la gestion, parce que le dépôt code était occupé par S4. Le
dossier `site/` se déplace tel quel à la racine du dépôt Colophon dès que S4 a
committé. Rien dedans ne dépend de son emplacement.

## Déployer, gratuitement

**Cloudflare Pages**, c'est le choix : gratuit sans limite de trafic utile,
build automatique à chaque push, HTTPS et domaine inclus, aucune carte
bancaire. Connecter le dépôt, puis trois champs :

- Framework preset : Astro
- Build command : `npm run build`
- Build output directory : `dist`
- Root directory : `site` (le dépôt contient aussi le code de l'app)

**GitHub Pages** marche aussi et évite un compte de plus, avec l'action
officielle `withastro/action`. Un cran plus lent à publier et il faut penser à
`base` dans `astro.config.mjs` si le site n'est pas sur un domaine propre.

Le VPS et Coolify sont une troisième voie, et la moins bonne ici : héberger
soi-même 40 ko de HTML statique achète une machine à surveiller et rien
d'autre.

## À faire avant la première mise en ligne

1. **Le domaine**, dans `astro.config.mjs` (`site:`). Il alimente les URL
   canoniques et les balises `hreflang`. Il est aujourd'hui réglé sur un
   placeholder, `colophon.app`, qui n'est pas réservé.
2. **Les captures.** Le site tient debout sans image et c'est délibéré, mais
   la vue Tri est l'argument le plus fort du produit et elle mérite d'être
   montrée. Trois emplacements l'attendent, mêmes fichiers que le README du
   dépôt.
3. **L'image sociale** 1280 × 640, dans `public/social.png`, et décommenter la
   balise `og:image` dans `src/layouts/Page.astro`.
4. **`config.released`** dans `src/copy.ts` passe à `true` le jour de la
   première release avec des binaires. Le bloc « Installer » change tout seul :
   les deux commandes cèdent la place aux boutons par plateforme.

## Modifier le texte

Tout est dans `src/copy.ts`, les deux langues côte à côte, une seule mise en
page dans `src/layouts/Page.astro`. Ajouter une langue, c'est ajouter un objet
et une page de trois lignes. Le texte des libellés du schéma de planche est
dans le layout, pas dans `copy.ts` : il appartient au dessin.

## Ce qui a été vérifié

Contraste au-dessus de 4,5:1 sur tout le corps de texte, dans les deux thèmes
clair et sombre (le terracotta descend à `--accent-text` dès qu'il sert à lire,
il reste saturé pour les filets et les grands chiffres). Aucun débordement
horizontal à 375 px comme à 1280. Aucun niveau de titre sauté. Rayon de bordure
à zéro partout, aucune ombre portée, aucune police externe. Interligne 1,62.
