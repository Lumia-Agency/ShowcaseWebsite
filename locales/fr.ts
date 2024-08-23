export default {
  // GLOBAL
  brand: {
    name: "Lumia",
    slogan: "Regroupement de freelances motivés !",
  },
  buttons: {
    back: "Retour",
    nextStep: "Étape suivante",
    finalizeAndSend: "Finaliser et envoyer",
  },
  generics: {
    optional: "(opt.)",
    authorizedFormats: "Formats autorisés : %formats%",
    willBeRedirected: "Tu vas être automatiquement redirigé vers la page d’accueil.",
    roles: {
      designer: "Concepteur",
      developer: "Développeur",
      graphicDesigner: "Graphiste",
      photograph: "Photographe",
      helper: "Conseiller",
      sysadmin: "Administrateur Système",
    },
  },
  navigation: {
    title: "Menu",
  },
  forms: {
    mandatoryFields: "Les champs marqués d’une * sont obligatoires !",
  },
  footer: {
    links: {
      utils: {
        title: "Liens utiles",
        legalNotice: "Mentions légales",
        cgv: "Conditions de vente",
        cgu: "Conditions d'utilisation",
      },
      projects: {
        title: "Nos SaaS populaires",
      },
    },
    legal: {
      rights: "Tous droits réservés",
      credits: "Conçu & Développé par",
    },
  },
  // PAGES
  home: {
    navLink: "Accueil",
    hero: {
      title: "Illumine ton monde digital",
      caption: "Bienvenue chez Lumia, où la créativité rencontre l’innovation. Nous transformons vos idées en expériences digitales inoubliables. Explorez nos services et découvrez comment nous pouvons faire briller votre projet.",
      cta: "Découvre-nous",
    },
    projects: {
      title: "Nos dernières merveilles",
      caption: "Découvrez nos projets récents, où l’innovation et la créativité s’unissent pour donner vie à des solutions digitales sur mesure. Chaque réalisation est le reflet de notre engagement à repousser les limites et à créer des expériences uniques. Plongez dans notre portfolio et laissez-vous inspirer par notre travail.",
      cta: "Voir la suite",
    },
    team: {
      title: "Rencontrez nos lumières",
      caption: "Chez Lumia, notre équipe est notre plus grande force. Chacun de nos experts apporte une touche unique et brillante à chaque projet. De la stratégie à la création, en passant par la technologie, nous avons réuni les meilleurs talents pour illuminer vos idées. Découvrez les visages passionnés derrière nos réussites et voyez comment notre diversité et notre collaboration font briller chaque réalisation.",
      cta: "Rejoins-nous",
    },
    testimonials: {
      title: "Ce que nos clients disent",
      caption: "La satisfaction de nos clients est notre plus grande récompense. Découvrez les témoignages de ceux qui ont vécu l'expérience Lumia et voyez comment nos solutions innovantes et notre dévouement ont transformé leurs projets. Leurs mots reflètent notre engagement à offrir des résultats exceptionnels et à dépasser les attentes. Laissez-vous inspirer par leurs histoires et rejoignez la liste de nos clients ravis.",
      cta: "Tout lire",
    },
  },
  work: {
    navLink: "Nos travaux",
    title: "Nos projets brillants",
    caption: "Chez Lumia, chaque projet est une aventure lumineuse. Nous transformons des idées audacieuses en réalités éclatantes, en mettant toute notre créativité et notre expertise au service de nos clients. Découvre nos réalisations les plus marquantes, où l'innovation rencontre la perfection. De la conception à la mise en œuvre, chaque projet est une preuve de notre passion et de notre engagement à illuminer le monde digital. Plonge dans notre galerie et laisses-toi inspirer par notre savoir-faire unique et notre touche magique.",
    searchPlaceholder: "Rechercher...",
    filterCTA: "Filtrer",
  },
  team: {
    navLink: "Notre équipe",
    title: "L’Équipe qui Déchire !",
    caption: "Chez Lumia, nous croyons que le sérieux peut rimer avec le plaisir. Découvrez une équipe dynamique, prête à relever tous les défis avec sourire et compétence.",
    joinUs: {
      title: "Rejoins la bande de Passionnés !",
      caption: "Tu rêves de faire partie d’une équipe qui allie créativité, technologie, et un brin de folie ? Chez Lumia, nous sommes toujours à la recherche de talents qui partagent notre passion pour l’innovation et l’excellence. Que tu sois un génie du code, un magicien du design ou un stratège marketing visionnaire, nous voulons entendre parler de toi ! Envoie-nous ta candidature et viens ajouter ta touche unique à notre aventure. Tu pourrais bien être notre prochain super-héro du digital !",
      cta: "Postuler aujourd'hui",
    },
  },
  contact: {
    navLink: "Nous contacter",
    joinTeam: {
      navLink: "Rejoindre l'équipe",
      title: "Envie de rejoindre nos lumières ?",
      caption: "Vous êtes passionné par le digital et avez un talent qui brille ? Rejoignez notre équipe de créatifs inspirés et d’experts visionnaires. Envoyez-nous votre candidature et illuminez notre agence de votre éclat unique. Nous avons hâte de vous rencontrer !",
      form: {
        submitted: {
          title: "MERCI !",
          caption: "Candidature reçue et en route vers nos experts ! On te donne des nouvelles sous 72h, alors reste dans les parages. On a hâte de te découvrir !",
        },
      },
      steps: {
        personalData: {
          label: "Informations personnelles",
          fields: {
            firstName: {
              label: "Prénom",
              placeholder: "John",
            },
            lastName: {
              label: "Nom",
              placeholder: "DOE",
            },
            email: {
              label: "Adresse mail",
              placeholder: "john.doe@exemple.fr",
            },
            phone: {
              label: "Numéro de téléphone",
              placeholder: "01 23 45 67 89",
            },
          },
        },
        aboutYou: {
          label: "À propos de toi",
          fields: {
            describe: {
              label: "Décris-toi en quelques mots",
              placeholder: "Donne le meilleur de toi-même pour nous présenter ton personnage (min 150ch.)",
            },
          },
        },
        jobs: {
          label: "Poste·s souhaité·s",
          fields: {
            job: {
              label: "Poste·s souhaité·s",
              placeholder: "Sélectionne au moins un poste",
            },
          },
        },
        yourWork: {
          label: "Tes travaux",
          fields: {
            website: {
              label: "Site web",
              placeholder: "https://johndoe.xyz",
            },
            instagram: {
              label: "Instagram",
              placeholder: "john.doe",
            },
            dribbble: {
              label: "Dribbble",
              placeholder: "john.doe",
            },
            github: {
              label: "GitHub",
              placeholder: "john.doe",
            },
            behance: {
              label: "Behance",
              placeholder: "john.doe",
            },
            pinterest: {
              label: "Pinterest",
              placeholder: "john.doe",
            },
            threads: {
              label: "Threads",
              placeholder: "john.doe",
            },
            other: {
              label: "Autre",
              placeholder: "https://exemple.fr",
            },
          },
        },
        documents: {
          label: "Documents",
          fields: {
            curriculum: {
              label: "CV",
              placeholder: "Joins ton CV",
            },
            motivation: {
              label: "Lettre de motivation",
              placeholder: "Joins ta lettre de motivation",
            },
          },
        },
      },
    },
    startAProject: {
      navLink: "Démarrer un projet",
      title: "Quel projet fait briller vos idées ?",
      caption: "C’est parti pour transformer vos idées en magie digitale ! Choisissez ce qui vous fait vibrer : un site web qui claque, une campagne marketing qui fait des étincelles, ou un design qui sort du lot. On est prêts à donner vie à vos projets. Alors, qu’est-ce qu’on va créer ensemble ?",
      field: {
        label: "Topologie du projet",
        placeholder: "Sélectionne une topologie",
        values: {
          fullWeb: {
            name: "Site Web Complet",
            caption: "Design et développement d'un site Internet dans son intégralité.",
          },
          webDesign: {
            name: "Conception Web",
            caption: "Design du site Internet réactif et fidèle aux attentes.",
          },
          webDevelopment: {
            name: "Développement d'un site",
            caption: "Mise en oeuvre de la maquette et mise en ligne du site Internet.",
          },
          photography: {
            name: "Photographie",
            caption: "Immortalisez les meilleurs moments, shooting publicitaires, etc...",
          },
        },
      },
    },
    startAFullWebSite: {
      title: "Créer votre site IDÉAL ✨",
      caption: "Racontez-nous tout sur votre projet de rêve ! Du design qui claque au développement qui déchire, on veut tout savoir pour créer un site web à votre image. Remplissez les détails, et on s’occupe de transformer vos idées en réalité digitale.",
      form: {
        submitted: {
          title: "MERCI !",
          caption: "Projet en transit vers nos génies du web ! Ils vont s’en occuper avec brio, et bientôt, votre vision prendra forme. Accrochez-vous, ça va briller !",
        },
      },
      steps: {
        aboutProject: {
          label: "À propos de ton projet",
          fields: {
            type: {
              label: "Type de projet",
              placeholder: "Sélectionne un type de projet",
              values: {
                showcase: {
                  name: "Site Vitrine",
                  caption: "Utile pour montrer un projet ou un produit.",
                },
                eCommerce: {
                  name: "Site e-commerce",
                  caption: "Parfait pour la vente de biens matériels ou virtuels.",
                },
                blogForum: {
                  name: "Blog / Forum",
                  caption: "Discussion seul ou à plusieurs, le meilleur exemple : La NewsLetter.",
                },
                saas: {
                  name: "SaaS",
                  caption: "Une application 100% fonctionnelle avec la facturation opérationnelle.",
                },
                other: {
                  name: "Autre",
                  caption: "Tout autre type de projets ne rentrant pas dans les préconfigurations.",
                },
              },
            },
            name: {
              label: "Nom",
              placeholder: "Duolingo",
            },
            description: {
              label: "Décris ton projet",
              placeholder: "Un projet ne va pas sans espérance. Donnes-toi à fond pour nous l'exposer au mieux (min 250ch.)",
            },
          },
        },
        aboutYou: {
          label: "À propos de toi",
          fields: {
            fullName: {
              label: "Nom complet",
              placeholder: "John DOE",
            },
            budget: {
              label: "Budget",
              placeholder: "250 000 €",
            },
            emailAddress: {
              label: "Adresse mail",
              placeholder: "john.doe@exemple.fr",
            },
            phoneNumber: {
              label: "Numéro de téléphone",
              placeholder: "01 23 45 67 89",
            },
          },
        },
        documents: {
          label: "Documents",
          fields: {
            technicalSpecs: {
              label: "Spécifications techniques",
              placeholder: "Choisis un fichier",
            },
            functionalSpecs: {
              label: "Spécifications fonctionnelles",
              placeholder: "Choisis un fichier",
            },
          },
        },
        conditions: {
          label: "Conditions",
          field: {
            label: "J'accepte les Conditions d'Utilisation",
            caption: "En acceptant les conditions, vous vous engagez à les respecter et à faire face aux sanctions en cas d'entorse.",
          },
        },
      },
    },
  },
};
