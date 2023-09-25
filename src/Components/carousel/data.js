import account from "./images/account.jpg";
import home from "./images/home.png";
import create from "./images/create.png";
import connexion from "./images/connexion.png";
import cart from "./images/cart.png";
import shop from "./images/shop.png";
import bdd from "./images/bdd.png";
import responsive from "./images/responsive.jpg";

const pagess = [
    {
        id: 1,
        image: home,
        title: "Page d'accueil",
        description: "Un site e-commerce pour des refuges animaliers",
    },
    {
        id: 2,
        image: bdd,
        title: "bdd",
        description: "Utilisation de la base de données MySQL",
    },
    {
        id: 3,
        image: responsive,
        title: "fgf",
        description: "Un site responsive",
    },
    {
        id: 4,
        image: shop,
        title: "Page d'achat",
        description: "Ajouter au panier",
    },
    {
        id: 5,
        image: create,
        title: "Nouvel ami",
        description: "Créer un nouveau compte",
    },
    {
        id: 6,
        image: connexion,
        title: "Page connexion",
        description: "Se connecter",
    },
    {
        id: 7,
        image: cart,
        title: "Mon panier",
        description: "Vérifier, supprimer et valider des commandes dans le panier",
    },
    {
        id: 8,
        image: account,
        title: "Mon compte",
        description: "Se renseigner, modifier, supprimer l'information",
    }
]

export default pagess;