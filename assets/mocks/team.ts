import type { Team } from "~/types/team";

export default {
  members: [
    {
      identifier: "loic.maes",
      fullName: "Loïc MAES",
      roles: [
        "designer",
        "developer",
        "photograph",
        "helper",
      ],
      superPower: "Artisan des mots.",
      anecdote: "Peux citer toutes les répliques de DeadPool.",
      socials: [
        "https://www.maesloic.fr/",
        "https://www.instagram.com/uiux.loicmaes",
        "https://github.com/loicmaes",
        "https://www.linkedin.com/in/maesloic",
      ],
      gradientColors: {
        light: {
          from: "#E5A46E",
          to: "#FFF0E3",
        },
      },
      pictureUrl: "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      identifier: "tom.czekaj",
      fullName: "Tom CZEKAJ",
      roles: [
        "developer",
        "sysadmin",
        "helper",
      ],
      superPower: "Sorcier du Système.",
      anecdote: "Aime les tacos autant que coder.",
      socials: [
        "https://github.com/xen0xys",
        "https://www.linkedin.com/in/tom-czekaj",
      ],
      gradientColors: {
        light: {
          from: "#6EAEE5",
          to: "#D7ECFF",
        },
      },
      pictureUrl: "https://images.unsplash.com/photo-1636041247094-a9e97be7a77a?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
} as Team;
