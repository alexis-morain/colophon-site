/**
 * Every string on the site, in both languages, in one file.
 *
 * Two locales share one layout: `pages/index.astro` renders `en`,
 * `pages/fr/index.astro` renders `fr`. Adding a third means adding an object
 * here and a three-line page, nothing else. Fields typed as `string` may
 * carry inline HTML where the layout renders them with `set:html`; the type
 * comments say which ones.
 */

export const config = {
  repo: "https://github.com/alexis-morain/colophon",
  discussions: "https://github.com/alexis-morain/colophon/discussions",
  releases: "https://github.com/alexis-morain/colophon/releases/latest",
  /** Flip to true the day the first release carries binaries. It swaps the
   *  download block from "build it yourself" to real platform buttons. */
  released: false,
  version: "0.9.0",
};

export interface Copy {
  lang: "en" | "fr";
  dir: "ltr";
  altHref: string;
  altLabel: string;
  altTitle: string;
  meta: { title: string; description: string };
  nav: { work: string; promise: string; print: string; faq: string };
  hero: {
    /** html: one <em> allowed, it sets the accent colour */
    title: string;
    lede: string;
    cta: string;
    ctaAlt: string;
    note: string;
  };
  run: {
    kicker: string;
    from: { n: string; label: string };
    to: { n: string; label: string };
    /** html */
    tail: string;
    pipeline: string[];
    caption: string;
  };
  promise: { kicker: string; title: string; lede: string; items: string[]; tail: string };
  sort: { kicker: string; title: string; body: string[]; figure: string };
  print: { kicker: string; title: string; body: string[]; profiles: string; code: string };
  privacy: { kicker: string; title: string; body: string[] };
  download: {
    kicker: string;
    title: string;
    unreleasedLede: string;
    unreleasedSteps: { code: string; note: string }[];
    releasedLede: string;
    mac: string;
    win: string;
    linux: string;
    source: string;
    note: string;
  };
  faq: { kicker: string; title: string; items: { q: string; a: string }[] };
  foot: {
    title: string;
    /** html */
    body: string;
    links: { label: string; href: string }[];
    legal: string;
  };
}

export const en: Copy = {
  lang: "en",
  dir: "ltr",
  altHref: "/fr/",
  altLabel: "Français",
  altTitle: "Lire cette page en français",
  meta: {
    title: "Colophon, a photo book from a folder of photos",
    description:
      "Free desktop software that turns a folder of photographs into a print-ready album in under a minute. Offline, no account, and you print it wherever you like.",
  },
  nav: { work: "How it works", promise: "What it guarantees", print: "Printing", faq: "Questions" },
  hero: {
    title: "A folder of photographs goes in.<br />A book you would <em>show someone</em> comes out.",
    lede: "Colophon reads the folder, drops what would weaken the album, lays out every spread, and hands you a draft you can argue with. It runs on your machine, it has no account, and the finished PDF goes to whichever print shop you like.",
    cta: "Get Colophon",
    ctaAlt: "Read the source",
    note: "Free and open source, GPL-3.0. For macOS and Windows.",
  },
  run: {
    kicker: "One run",
    from: { n: "572", label: "photographs in the folder" },
    to: { n: "98", label: "in the finished book" },
    tail:
      "on <b>50 spreads</b> across <b>8 chapters</b>, in under a minute, with every discarded frame listed and explained.",
    pipeline: ["scan", "analyse", "curate", "compose", "export"],
    caption: "A 21 × 21 cm album, composed from a holiday folder, untouched by hand.",
  },
  promise: {
    kicker: "What it guarantees",
    title: "An auto-layout is judged on its worst spread.",
    lede:
      "So the constraints are written as code and checked by a linter that fails the build, rather than left as good intentions. The composer will never:",
    items: [
      "put a portrait photograph in a landscape cell, or the reverse",
      "let a detected face touch a cropped edge, closer than 4 % of the frame",
      "place two near-duplicates, or two shots of the same scene, on one spread",
      "open a chapter on a weak frame, or run past the pace you chose without a breathing page",
      "repeat the same template four times in a row",
      "retouch a single pixel of your photograph",
    ],
    tail:
      "Fourteen counters check the finished album. Ten judge the composer and fail the audit past their tolerance; four count what a hand placed or what the typeface cannot draw, and only warn. When a correction keeps coming back, it becomes a new counter.",
  },
  sort: {
    kicker: "The Sort view",
    title: "It tells you what it dropped, and why.",
    body: [
      "Every discarded photograph is shown, grouped by the reason it lost its place: no room left in the book, near-duplicate, another shot of the same scene, too small to print at this size, panorama that does not fit the page.",
      "When it lost to another frame, that frame sits next to it. A double-click puts it back in the book.",
      "This is the part nobody else shows you, and it is the part that makes automatic curation something you can trust rather than something you have to check.",
    ],
    figure: "A spread is drawn at its trimmed size. The bleed sits behind the cut, where the guillotine will take it.",
  },
  print: {
    kicker: "Printing",
    title: "A plain PDF, at 300 dpi, that any print shop accepts.",
    body: [
      "No partner you have to use, no watermark, no logo, no barcode of ours on your book. Fonts are embedded, the bleed follows the shop’s own profile, and the preview shows the page at its trimmed size rather than promising a margin the guillotine will take.",
      "Before you send anything, a preflight check runs: pagination, bleed on each edge, colour space, embedded fonts, effective resolution cell by cell, safe zone. Every message names the spread and the cause in plain language and tells you the gesture that fixes it.",
      "Nothing ever fails silently, least of all on the last screen of the journey.",
    ],
    profiles:
      "Four printer profiles ship today, and they disagree on almost every field: bleed, one file or two, colour space, who calculates the spine. That is exactly why a profile is data, and never a rule buried in the code.",
    code: "colophon --prevol --profil cloudprinter -o my-album",
  },
  privacy: {
    kicker: "What it does not do",
    title: "No account, no cloud, no telemetry, ever.",
    body: [
      "There is no server to send your photographs to. Pull the network cable and everything still works, the export included. The one call Colophon makes is a question at launch, to GitHub, about whether a newer version exists; it carries nothing of your photographs and nothing of your album, and Preferences turns it off.",
      "The album is a folder on your disk with a readable JSON file in it, which you can repair in a text editor. Your original photographs are read and never modified.",
      "Nothing here expires, reports on you, or holds a project hostage behind a login. The absence is the product.",
    ],
  },
  download: {
    kicker: "Get it",
    title: "Two commands, today.",
    unreleasedLede:
      "Binaries are not published yet. Building from source takes a Rust toolchain, Node 20, and a couple of minutes.",
    unreleasedSteps: [
      { code: "cargo build --release", note: "Builds the engine and the command line." },
      {
        code: "./target/release/colophon ~/Pictures/holidays -o album --format carre-21",
        note: "Composes the album, then writes album.json and a preview PDF next to it.",
      },
    ],
    releasedLede:
      "Download, open, point it at a folder. No account. The app is not signed by Apple, so macOS refuses the first opening: right-click it and choose Open, as the README shows.",
    mac: "Download for macOS",
    win: "Download for Windows",
    linux: "Linux should build from source, but nobody has checked the app there yet.",
    source: "Build from source",
    note: "Requirements and the full walkthrough are in the repository’s README.",
  },
  faq: {
    kicker: "Questions",
    title: "The ones people actually ask.",
    items: [
      {
        q: "Can I print it wherever I want?",
        a: "Yes. The output is a standard PDF at 300 dpi and there is no printing partner this software needs you to use. Print it at a shop, at a lab, or at home.",
      },
      {
        q: "Do my photographs go into a cloud?",
        a: "No. There is no server. Colophon works with the network switched off, and it will keep working the day this project stops being maintained.",
      },
      {
        q: "Is this AI?",
        a: "No language model, no prompt, no cloud inference. Perceptual hashes for duplicates, a sharpness measure, exposure, and face detection so heads do not get sliced. All local, all explained, all overridable. If an AI mode ever ships it will use your own key, stay optional, and never decide anything by itself.",
      },
      {
        q: "Why not just use InDesign or Scribus?",
        a: "Because they start from an empty page, and the empty page is not the hard part. Choosing 150 photographs out of 600 and placing them so the book reads is the hard part. If you would rather design every spread by hand, InDesign is the better tool and this one is not trying to replace it.",
      },
      {
        q: "What about my HEIC files?",
        a: "On macOS, read natively through the system decoder, ImageIO. Nothing to install. On Windows and Linux they are not decoded yet: counted and named on screen, never silently dropped.",
      },
      {
        q: "How do you make money?",
        a: "Not from this. The software is free and stays free, and so does the full-resolution PDF export, offline and without an account.",
      },
      {
        q: "Windows? Linux?",
        a: "The release chain builds a Windows installer, but nobody has run the app on a real Windows machine yet, and HEIC, RAW and the Apple Photos import stay on macOS. Linux has no installer: it should build from source, but nobody has checked the app there yet.",
      },
      {
        q: "CMYK, layflat, hard covers?",
        a: "Not CMYK, not layflat. Colour space and binding live in the printer profile, so they arrive one profile at a time, when a real print shop asks for them. The Cloudprinter profile already renders the flat cover sheet of its hardcover, spine included.",
      },
    ],
  },
  foot: {
    title: "Colophon",
    body:
      "Set in Charter and Avenir Next. Built with Astro, no tracker, no cookie, no font served from someone else’s server. Inside the app, the album’s default typeface is Source Sans 3, and the one the album uses is embedded in every PDF it exports.",
    links: [
      { label: "Source code", href: config.repo },
      { label: "Report a problem", href: `${config.repo}/issues/new/choose` },
      { label: "Discussions", href: config.discussions },
    ],
    legal: "GPL-3.0-or-later. Your photographs are yours, and so is the file.",
  },
};

export const fr: Copy = {
  lang: "fr",
  dir: "ltr",
  altHref: "/",
  altLabel: "English",
  altTitle: "Read this page in English",
  meta: {
    title: "Colophon, un album photo depuis un dossier de photos",
    description:
      "Logiciel libre qui transforme un dossier de photos en album prêt à imprimer en moins d’une minute. Hors ligne, sans compte, et vous imprimez où vous voulez.",
  },
  nav: { work: "Comment ça marche", promise: "Ce qui est garanti", print: "Impression", faq: "Questions" },
  hero: {
    title: "Un dossier de photos entre.<br />Un livre <em>qu’on montre</em> en sort.",
    lede: "Colophon lit le dossier, écarte ce qui affaiblirait l’album, compose toutes les planches, et vous rend un brouillon avec lequel vous pouvez discuter. Tout tourne sur votre machine, sans compte, et le PDF part chez l’imprimeur de votre choix.",
    cta: "Obtenir Colophon",
    ctaAlt: "Lire le code",
    note: "Libre et gratuit, GPL-3.0. Pour macOS et Windows.",
  },
  run: {
    kicker: "Une composition",
    from: { n: "572", label: "photos dans le dossier" },
    to: { n: "98", label: "dans le livre fini" },
    tail:
      "sur <b>50 planches</b> et <b>8 chapitres</b>, en moins d’une minute, chaque photo écartée étant listée et expliquée.",
    pipeline: ["lecture", "analyse", "curation", "composition", "export"],
    caption: "Un album 21 × 21 cm, composé depuis un dossier de vacances, sans une retouche à la main.",
  },
  promise: {
    kicker: "Ce qui est garanti",
    title: "Une mise en page automatique se juge sur sa pire planche.",
    lede:
      "Les contraintes sont donc écrites en dur et vérifiées par un linter qui fait échouer la compilation, au lieu de rester des intentions. Le Composer ne fera jamais :",
    items: [
      "une photo portrait dans une case paysage, ni l’inverse",
      "un visage détecté qui touche un bord recadré, à moins de 4 % de l’image",
      "deux quasi-doublons, ou deux prises de la même scène, sur une même planche",
      "une ouverture de chapitre sur une photo faible, ni plus de planches sans respiration que le rythme choisi n’en permet",
      "quatre fois le même gabarit d’affilée",
      "la moindre retouche d’un pixel de votre photo",
    ],
    tail:
      "Quatorze compteurs vérifient l’album fini. Dix jugent le Composer et font échouer l’audit au-delà de leur tolérance ; quatre comptent ce qu’une main a posé ou ce que la police ne dessine pas, et ne font qu’avertir. Quand une correction revient, elle devient un compteur de plus.",
  },
  sort: {
    kicker: "La vue Tri",
    title: "Il dit ce qu’il a écarté, et pourquoi.",
    body: [
      "Chaque photo écartée est montrée, groupée par la raison qui lui a coûté sa place : plus de place dans l’album, quasi-doublon, autre prise de la même scène, définition trop faible pour ce format, panorama qui ne tient pas dans la page.",
      "Quand une autre photo l’a emporté, elle est montrée à côté. Un double-clic la remet dans le livre.",
      "C’est la partie que personne d’autre ne montre, et c’est elle qui fait la différence entre une curation automatique à laquelle on se fie et une curation qu’il faut vérifier.",
    ],
    figure: "Une planche s’affiche à sa taille rognée. Le fond perdu reste derrière la coupe, là où le massicot le prendra.",
  },
  print: {
    kicker: "Impression",
    title: "Un PDF ordinaire, à 300 dpi, que n’importe quel imprimeur accepte.",
    body: [
      "Aucun partenaire imposé, aucun filigrane, aucun logo, aucun code-barres de notre part sur votre livre. Les polices sont incorporées, le fond perdu suit le profil de l’imprimeur, et l’aperçu montre la page à sa taille rognée plutôt que de promettre une marge que le massicot emportera.",
      "Avant tout envoi, un prévol passe : pagination, fond perdu par bord, espace colorimétrique, polices incorporées, résolution effective case par case, zone sûre. Chaque message nomme la planche et la cause en toutes lettres, et donne le geste qui répare.",
      "Rien n’échoue jamais en silence, surtout pas au dernier écran du parcours.",
    ],
    profiles:
      "Quatre profils d’imprimeur sont livrés, et ils divergent sur presque chaque champ : fond perdu, un fichier ou deux, espace colorimétrique, qui calcule le dos. C’est exactement pour ça qu’un profil est une donnée, et jamais une règle enfouie dans le code.",
    code: "colophon --prevol --profil cloudprinter -o mon-album",
  },
  privacy: {
    kicker: "Ce qu’il ne fait pas",
    title: "Aucun compte, aucun cloud, aucune télémétrie, jamais.",
    body: [
      "Il n’y a pas de serveur où envoyer vos photos. Débranchez le réseau, tout continue de fonctionner, export compris. Le seul appel que Colophon passe est une question au lancement, à GitHub, pour savoir s’il existe une version plus récente ; elle n’emporte rien de vos photos et rien de votre album, et les Préférences la coupent.",
      "L’album est un dossier sur votre disque avec un JSON lisible dedans, réparable dans un éditeur de texte. Vos photos d’origine sont lues et jamais modifiées.",
      "Rien ici n’expire, ne vous surveille, ni ne retient un projet derrière un identifiant. L’absence est le produit.",
    ],
  },
  download: {
    kicker: "Installer",
    title: "Deux commandes, aujourd’hui.",
    unreleasedLede:
      "Les binaires ne sont pas encore publiés. Compiler depuis les sources demande une chaîne Rust, Node 20, et deux minutes.",
    unreleasedSteps: [
      { code: "cargo build --release", note: "Compile le moteur et la ligne de commande." },
      {
        code: "./target/release/colophon ~/Pictures/vacances -o album --format carre-21",
        note: "Compose l’album, puis écrit album.json et un PDF d’aperçu à côté.",
      },
    ],
    releasedLede:
      "Téléchargez, ouvrez, désignez un dossier. Aucun compte. L’app n’est pas signée par Apple, donc macOS refuse la première ouverture : clic droit, puis Ouvrir, comme le montre le README.",
    mac: "Télécharger pour macOS",
    win: "Télécharger pour Windows",
    linux: "Linux devrait compiler depuis les sources, mais personne n’y a encore vérifié l’app.",
    source: "Compiler depuis les sources",
    note: "Les prérequis et la marche complète sont dans le README du dépôt.",
  },
  faq: {
    kicker: "Questions",
    title: "Celles qu’on pose vraiment.",
    items: [
      {
        q: "Je peux imprimer où je veux ?",
        a: "Oui. La sortie est un PDF standard à 300 dpi et ce logiciel n’a aucun imprimeur partenaire à vous imposer. Chez un imprimeur, dans un labo, ou chez vous.",
      },
      {
        q: "Mes photos partent dans un cloud ?",
        a: "Non, il n’y a pas de serveur. Colophon fonctionne réseau coupé, et continuera de fonctionner le jour où ce projet cessera d’être maintenu.",
      },
      {
        q: "C’est de l’IA ?",
        a: "Aucun modèle de langage, aucun prompt, aucun appel réseau. Des hashs perceptuels pour les doublons, une mesure de netteté, l’exposition, et de la détection de visages pour ne pas couper les têtes. Tout est local, tout est expliqué, tout se corrige. Si un mode IA arrive un jour, il tournera avec votre clé, restera optionnel, et ne décidera jamais à votre place.",
      },
      {
        q: "Pourquoi pas InDesign ou Scribus ?",
        a: "Parce qu’ils partent d’une page blanche, et que la page blanche n’est pas le problème. Le problème, c’est de choisir 150 photos sur 600 et de les poser pour que le livre se lise. Pour composer chaque planche à la main, InDesign reste meilleur, et ce logiciel ne cherche pas à le remplacer.",
      },
      {
        q: "Et mes fichiers HEIC ?",
        a: "Sur macOS, lus nativement par le décodeur système, ImageIO. Rien à installer. Sur Windows et Linux, ils ne sont pas encore décodés : comptés et nommés à l’écran, jamais écartés en silence.",
      },
      {
        q: "Vous gagnez de l’argent comment ?",
        a: "Pas avec ça. Le logiciel est gratuit et le restera, l’export PDF pleine résolution aussi, hors ligne et sans compte.",
      },
      {
        q: "Windows ? Linux ?",
        a: "La chaîne de publication fabrique un installeur Windows, mais personne n’a encore lancé l’app sur une vraie machine Windows, et le HEIC, le RAW et l’import depuis Photos restent sur macOS. Linux n’a pas d’installeur : l’app devrait compiler depuis les sources, mais personne ne l’y a encore vérifiée.",
      },
      {
        q: "CMJN, layflat, couverture rigide ?",
        a: "Ni CMJN, ni layflat. L’espace colorimétrique et la reliure vivent dans le profil d’imprimeur, donc ils arrivent un profil à la fois, quand un vrai imprimeur les réclame. Le profil Cloudprinter rend déjà la feuille à plat de sa couverture rigide, dos compris.",
      },
    ],
  },
  foot: {
    title: "Colophon",
    body:
      "Composé en Charter et Avenir Next. Fabriqué avec Astro, sans traqueur, sans cookie, sans police servie depuis le serveur de quelqu’un d’autre. Dans l’app, la police de l’album est par défaut Source Sans 3, et celle que l’album porte est incorporée dans chaque PDF exporté.",
    links: [
      { label: "Code source", href: config.repo },
      { label: "Signaler un problème", href: `${config.repo}/issues/new/choose` },
      { label: "Discussions", href: config.discussions },
    ],
    legal: "GPL-3.0-or-later. Vos photos sont à vous, le fichier aussi.",
  },
};
