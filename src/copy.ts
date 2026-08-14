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
    note: "Free and open source, GPL-3.0. macOS today, Windows next.",
  },
  run: {
    kicker: "One run",
    from: { n: "575", label: "photographs in the folder" },
    to: { n: "152", label: "in the finished book" },
    tail:
      "on <b>48 spreads</b> across <b>12 chapters</b>, in under a minute, with every discarded frame listed and explained.",
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
      "open a chapter on a weak frame, or run five spreads without a breathing page",
      "repeat the same template four times in a row",
      "retouch a single pixel of your photograph",
    ],
    tail:
      "Ten counters check the finished album and refuse to pass if any of them trips. When a correction keeps coming back, it becomes a new counter.",
  },
  sort: {
    kicker: "The Sort view",
    title: "It tells you what it dropped, and why.",
    body: [
      "Every discarded photograph is shown, grouped by the reason it lost its place: too soft, near-duplicate, another shot of the same scene, too small to print at this size, panorama that does not fit the page.",
      "Next to each one sits the frame it lost to. One click puts it back in the book.",
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
      "There is no server to send your photographs to. Pull the network cable and everything still works, the export included.",
      "The album is a folder on your disk with a readable JSON file in it, which you can repair in a text editor. Your original photographs are read and never modified.",
      "Nothing here expires, phones home, or holds a project hostage behind a login. The absence is the product.",
    ],
  },
  download: {
    kicker: "Get it",
    title: "Two commands, today.",
    unreleasedLede:
      "Signed binaries are not published yet. Building from source takes a Rust toolchain, Node 20, and a couple of minutes.",
    unreleasedSteps: [
      { code: "cargo build --release", note: "Builds the engine and the command line." },
      {
        code: "./target/release/colophon ~/Pictures/holidays -o album --format carre-21",
        note: "Composes the album, then writes album.json and a preview PDF next to it.",
      },
    ],
    releasedLede: "Download, open, point it at a folder. No installer questions, no account.",
    mac: "Download for macOS",
    win: "Download for Windows",
    linux: "Linux builds from source and runs. A signed package is still missing.",
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
        a: "No model, no prompt, no cloud inference. Perceptual hashes for duplicates, a sharpness measure, exposure, and face detection so heads do not get sliced. All local, all explained, all overridable. If an AI mode ever ships it will use your own key, stay optional, and never decide anything by itself.",
      },
      {
        q: "Why not just use InDesign or Scribus?",
        a: "Because they start from an empty page, and the empty page is not the hard part. Choosing 150 photographs out of 600 and placing them so the book reads is the hard part. If you would rather design every spread by hand, InDesign is the better tool and this one is not trying to replace it.",
      },
      {
        q: "What about my HEIC files?",
        a: "Read natively through the system decoder, ImageIO on macOS and WIC on Windows. Nothing to install.",
      },
      {
        q: "How do you make money?",
        a: "Not from this. The software is free and stays free, and so does the full-resolution PDF export, offline and without an account. An optional way to order a printed copy may come later, for people who would rather click once than deal with a print shop. If it never arrives, nothing here changes.",
      },
      {
        q: "Windows? Linux?",
        a: "Windows is next, and it is a real port rather than a checkbox. Linux compiles and runs from source today; what is missing is a signed package and someone to test it on more than one distribution.",
      },
      {
        q: "CMYK, layflat, hard covers?",
        a: "Not yet. Colour space and binding live in the printer profile, so they arrive one profile at a time, when a real print shop asks for them.",
      },
    ],
  },
  foot: {
    title: "Colophon",
    body:
      "Set in Charter and Avenir Next. Built with Astro, no tracker, no cookie, no font served from someone else’s server. The album typeface inside the app is Source Sans 3, embedded in every PDF it exports.",
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
      "Logiciel libre qui transforme un dossier de photos en album prÃªt Ã  imprimer en moins d’une minute. Hors ligne, sans compte, et vous imprimez oÃ¹ vous voulez.",
  },
  nav: { work: "Comment ça marche", promise: "Ce qui est garanti", print: "Impression", faq: "Questions" },
  hero: {
    title: "Un dossier de photos entre.<br />Un livre <em>qu’on montre</em> en sort.",
    lede: "Colophon lit le dossier, Ã©carte ce qui affaiblirait l’album, compose toutes les planches, et vous rend un brouillon avec lequel vous pouvez discuter. Tout tourne sur votre machine, sans compte, et le PDF part chez l’imprimeur de votre choix.",
    cta: "Obtenir Colophon",
    ctaAlt: "Lire le code",
    note: "Libre et gratuit, GPL-3.0. macOS aujourd’hui, Windows ensuite.",
  },
  run: {
    kicker: "Une composition",
    from: { n: "575", label: "photos dans le dossier" },
    to: { n: "152", label: "dans le livre fini" },
    tail:
      "sur <b>48 planches</b> et <b>12 chapitres</b>, en moins d’une minute, chaque photo Ã©cartÃ©e Ã©tant listÃ©e et expliquÃ©e.",
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
      "un visage dÃ©tectÃ© qui touche un bord recadrÃ©, Ã  moins de 4 % de l’image",
      "deux quasi-doublons, ou deux prises de la même scène, sur une même planche",
      "une ouverture de chapitre sur une photo faible, ni cinq planches sans respiration",
      "quatre fois le mÃªme gabarit d’affilÃ©e",
      "la moindre retouche d’un pixel de votre photo",
    ],
    tail:
      "Dix compteurs vÃ©rifient l’album fini et refusent de passer si l’un d’eux se dÃ©clenche. Quand une correction revient, elle devient un compteur de plus.",
  },
  sort: {
    kicker: "La vue Tri",
    title: "Il dit ce qu’il a Ã©cartÃ©, et pourquoi.",
    body: [
      "Chaque photo écartée est montrée, groupée par la raison qui lui a coûté sa place : trop floue, quasi-doublon, autre prise de la même scène, définition trop faible pour ce format, panorama qui ne tient pas dans la page.",
      "Ã cÃ´tÃ© de chacune se trouve la photo qui l’a emportÃ©. Un clic la remet dans le livre.",
      "C’est la partie que personne d’autre ne montre, et c’est elle qui fait la diffÃ©rence entre une curation automatique Ã  laquelle on se fie et une curation qu’il faut vÃ©rifier.",
    ],
    figure: "Une planche s’affiche Ã  sa taille rognÃ©e. Le fond perdu reste derriÃ¨re la coupe, lÃ  oÃ¹ le massicot le prendra.",
  },
  print: {
    kicker: "Impression",
    title: "Un PDF ordinaire, Ã  300 dpi, que n’importe quel imprimeur accepte.",
    body: [
      "Aucun partenaire imposÃ©, aucun filigrane, aucun logo, aucun code-barres de notre part sur votre livre. Les polices sont incorporÃ©es, le fond perdu suit le profil de l’imprimeur, et l’aperÃ§u montre la page Ã  sa taille rognÃ©e plutÃ´t que de promettre une marge que le massicot emportera.",
      "Avant tout envoi, un prévol passe : pagination, fond perdu par bord, espace colorimétrique, polices incorporées, résolution effective case par case, zone sûre. Chaque message nomme la planche et la cause en toutes lettres, et donne le geste qui répare.",
      "Rien n’Ã©choue jamais en silence, surtout pas au dernier Ã©cran du parcours.",
    ],
    profiles:
      "Quatre profils d’imprimeur sont livrÃ©s, et ils divergent sur presque chaque champ : fond perdu, un fichier ou deux, espace colorimÃ©trique, qui calcule le dos. C’est exactement pour Ã§a qu’un profil est une donnÃ©e, et jamais une rÃ¨gle enfouie dans le code.",
    code: "colophon --prevol --profil cloudprinter -o mon-album",
  },
  privacy: {
    kicker: "Ce qu’il ne fait pas",
    title: "Aucun compte, aucun cloud, aucune télémétrie, jamais.",
    body: [
      "Il n’y a pas de serveur oÃ¹ envoyer vos photos. DÃ©branchez le rÃ©seau, tout continue de fonctionner, export compris.",
      "L’album est un dossier sur votre disque avec un JSON lisible dedans, rÃ©parable dans un Ã©diteur de texte. Vos photos d’origine sont lues et jamais modifiÃ©es.",
      "Rien ici n’expire, ne tÃ©lÃ©phone Ã  la maison, ni ne retient un projet derriÃ¨re un identifiant. L’absence est le produit.",
    ],
  },
  download: {
    kicker: "Installer",
    title: "Deux commandes, aujourd’hui.",
    unreleasedLede:
      "Les binaires signés ne sont pas encore publiés. Compiler depuis les sources demande une chaîne Rust, Node 20, et deux minutes.",
    unreleasedSteps: [
      { code: "cargo build --release", note: "Compile le moteur et la ligne de commande." },
      {
        code: "./target/release/colophon ~/Pictures/vacances -o album --format carre-21",
        note: "Compose l’album, puis Ã©crit album.json et un PDF d’aperÃ§u Ã  cÃ´tÃ©.",
      },
    ],
    releasedLede: "TÃ©lÃ©chargez, ouvrez, dÃ©signez un dossier. Aucune question d’installeur, aucun compte.",
    mac: "Télécharger pour macOS",
    win: "Télécharger pour Windows",
    linux: "Linux compile et tourne depuis les sources. Il manque un paquet signé.",
    source: "Compiler depuis les sources",
    note: "Les prérequis et la marche complète sont dans le README du dépôt.",
  },
  faq: {
    kicker: "Questions",
    title: "Celles qu’on pose vraiment.",
    items: [
      {
        q: "Je peux imprimer où je veux ?",
        a: "Oui. La sortie est un PDF standard Ã  300 dpi et ce logiciel n’a aucun imprimeur partenaire Ã  vous imposer. Chez un imprimeur, dans un labo, ou chez vous.",
      },
      {
        q: "Mes photos partent dans un cloud ?",
        a: "Non, il n’y a pas de serveur. Colophon fonctionne rÃ©seau coupÃ©, et continuera de fonctionner le jour oÃ¹ ce projet cessera d’Ãªtre maintenu.",
      },
      {
        q: "C’est de l’IA ?",
        a: "Aucun modÃ¨le, aucun prompt, aucun appel rÃ©seau. Des hashs perceptuels pour les doublons, une mesure de nettetÃ©, l’exposition, et de la dÃ©tection de visages pour ne pas couper les tÃªtes. Tout est local, tout est expliquÃ©, tout se corrige. Si un mode IA arrive un jour, il tournera avec votre clÃ©, restera optionnel, et ne dÃ©cidera jamais Ã  votre place.",
      },
      {
        q: "Pourquoi pas InDesign ou Scribus ?",
        a: "Parce qu’ils partent d’une page blanche, et que la page blanche n’est pas le problÃ¨me. Le problÃ¨me, c’est de choisir 150 photos sur 600 et de les poser pour que le livre se lise. Pour composer chaque planche Ã  la main, InDesign reste meilleur, et ce logiciel ne cherche pas Ã  le remplacer.",
      },
      {
        q: "Et mes fichiers HEIC ?",
        a: "Lus nativement par le décodeur système, ImageIO sur macOS et WIC sur Windows. Rien à installer.",
      },
      {
        q: "Vous gagnez de l’argent comment ?",
        a: "Pas avec Ã§a. Le logiciel est gratuit et le restera, l’export PDF pleine rÃ©solution aussi, hors ligne et sans compte. Une commande intÃ©grÃ©e optionnelle viendra peut-Ãªtre, pour ceux qui prÃ©fÃ¨rent cliquer une fois plutÃ´t que gÃ©rer un imprimeur. Si elle n’arrive jamais, rien ne change ici.",
      },
      {
        q: "Windows ? Linux ?",
        a: "Windows est la prochaine Ã©tape, et c’est un vrai portage. Linux compile et tourne depuis les sources ; il manque un paquet signÃ© et quelqu’un pour le tester sur plus d’une distribution.",
      },
      {
        q: "CMJN, layflat, couverture rigide ?",
        a: "Pas encore. L’espace colorimÃ©trique et la reliure vivent dans le profil d’imprimeur, donc ils arrivent un profil Ã  la fois, quand un vrai imprimeur les rÃ©clame.",
      },
    ],
  },
  foot: {
    title: "Colophon",
    body:
      "ComposÃ© en Charter et Avenir Next. FabriquÃ© avec Astro, sans traqueur, sans cookie, sans police servie depuis le serveur de quelqu’un d’autre. La police de l’album, dans l’app, est Source Sans 3, incorporÃ©e dans chaque PDF exportÃ©.",
    links: [
      { label: "Code source", href: config.repo },
      { label: "Signaler un problème", href: `${config.repo}/issues/new/choose` },
      { label: "Discussions", href: config.discussions },
    ],
    legal: "GPL-3.0-or-later. Vos photos sont à vous, le fichier aussi.",
  },
};
