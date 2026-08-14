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

## Où c'est en ligne

**https://alexis-morain.github.io/colophon-site/**, et `/fr/` pour la version
française. URL temporaire, en attendant le domaine.

GitHub Pages, publié par `.github/workflows/deploy.yml` à chaque push sur
`main` : `withastro/action` compile, `actions/deploy-pages` publie. Rien à
faire à la main, rien à surveiller.

Le dépôt du site est séparé de celui du logiciel (`colophon-site`, public),
parce que `colophon` est privé et que Pages ne publie pas depuis un dépôt privé
sans compte payant. Le jour où le logiciel devient public, les deux peuvent
fusionner : `site/` va à la racine du dépôt et le workflow gagne un
`working-directory`. Rien dans le code du site ne dépend de son emplacement.

Cloudflare Pages reste la meilleure alternative si Pages coince un jour. Le VPS
et Coolify sont la moins bonne option ici : héberger soi-même 20 ko de HTML
statique achète une machine à surveiller et rien d'autre.

## Le site est hors index

`<meta name="robots" content="noindex, nofollow">` dans
`src/layouts/Page.astro`. La page est atteignable par son URL, pour la revue et
pour le premier cercle, mais elle ne remonte pas dans une recherche avant que
les captures existent et que la marque soit vérifiée. **Une ligne à supprimer
le jour du lancement**, et c'est la seule.

## Les quatre bascules qui restent

1. **Le domaine.** Dans `astro.config.mjs` : `site` devient le domaine, `base`
   devient `"/"`, et un fichier `CNAME` va dans `public/`. Les liens internes
   suivent tout seuls, ils sont tous construits depuis `import.meta.env.BASE_URL`.
2. **Les captures.** Le site tient debout sans image, c'est délibéré, mais la
   vue Tri est l'argument le plus fort du produit et elle mérite d'être
   montrée. Mêmes fichiers que le README du dépôt.
3. **L'image sociale** 1280 × 640, dans `public/social.png`, et décommenter la
   balise `og:image` dans `src/layouts/Page.astro`.
4. **`config.released`** dans `src/copy.ts` passe à `true` le jour de la
   première release avec des binaires. Le bloc « Installer » change tout seul :
   les deux commandes cèdent la place aux boutons par plateforme, qui pointent
   vers `releases/latest`.

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
