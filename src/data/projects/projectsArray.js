import bonAppetitImg from "../../assets/images/projects/bon-appetit.png"
import allomovieImg from "../../assets/images/projects/allomovies.png"
import shifumiImg from "../../assets/images/projects/shifumi.png"
import samusocialparisImg from "../../assets/images/projects/samusocialparis.jpg"
import popcornflixImg from "../../assets/images/projects/logo-popcornflix.png"
import instantjobsImg from "../../assets/images/projects/instant-jobs.png"

export const projects = [
    {
        id: 1,
        title: "bon appétit",
        image: bonAppetitImg,
        type: "école",
        status: "terminé",
        description: "site vitrine pour un restaurant fait avec html/css et javascript en groupe de 4.",
        tags: ["html", "css", "javascript", "restaurant"],
        github: "https://github.com/DogeBloxy/Bon-app-tit",
        live: "https://dogebloxy.github.io/Bon-app-tit/site_bon_appetit.html"
    },
    {
        id: 2,
        title: "allo-movies",
        image: allomovieImg,
        type: "école",
        status: "terminé",
        description: "site web permettant de faire son propre classement de films par catégorie en groupe de 2.",
        tags: ["html", "css", "vue.js", "classement"],
        github: "https://github.com/LavigneChappazFlorian/allomovies",
        live: "https://lavignechappazflorian.github.io/allomovies/"
    },
    {
        id: 3,
        title: "shifumi",
        image: shifumiImg,
        type: "école",
        status: "terminé",
        description: "petit mini-jeu de shifumi sur le thème de noël en groupe de 3.",
        tags: ["html", "css", "javascript", "noël"],
        github: "https://github.com/LavigneChappazFlorian/allomovies",
        live: "https://lavignechappazflorian.github.io/allomovies/"
    },
    {
        id: 4,
        title: "samusocialparis",
        image: samusocialparisImg,
        type: "école",
        status: "terminé",
        description: "projet d'un concours nommé \"brief créatifs\" dans la catégorie digital pour faire un site web statique en groupe de 5.",
        tags: ["html", "css", "javascript", "concours"],
        github: "https://github.com/LavigneChappazFlorian/allomovies",
        live: "https://lavignechappazflorian.github.io/allomovies/"
    },
    {
        id: 5,
        title: "popcornflix",
        image: popcornflixImg,
        type: "école",
        status: "terminé",
        description: "popcornflix est une application web de streaming de films qui permet aux utilisateurs de découvrir et d'explorer une large sélection de films fait en groupe de 2.",
        tags: ["react", "javascript", "tmdb"],
        github: "https://github.com/LavigneChappazFlorian/popcornflix",
        live: ""
    },
    {
        id: 6,
        title: "instant jobs",
        image: instantjobsImg,
        type: "école",
        status: "en cours",
        description: "instant jobs est une application web full-stack qui facilite la mise en relation entre employeurs et candidats.",
        tags: ["react", "typescript", "docker", "express.js"],
        github: "https://github.com/LemaitreEnzo/instant-jobs",
        live: ""
    },
]