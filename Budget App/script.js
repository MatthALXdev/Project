let montantTotal = document.getElementById("montant-total");
let montantUtilisateur = document.getElementById("montant-utilisateur");
const boutonVerifMontant = document.getElementById("verifier-montant");
const boutonMontantTotal = document.getElementById("bouton-montant-total");
const titreProduit = document.getElementById("titre-produit");
const erreurBudget = document.getElementById("erreur-budget");
const erreurTitreProduit = document.getElementById("erreur-titre-produit");
const erreurCoutProduit = document.getElementById("erreur-cout-produit");
const montant = document.getElementById("montant");
const valeurDepenses = document.getElementById("valeur-depenses");
const montantSolde = document.getElementById("montant-solde");
const liste = document.getElementById("liste");
let montantTemp = 0;

// Partie de définition du budget
boutonMontantTotal.addEventListener("click", () => {
    montantTemp = montantTotal.value;
    // Entrée vide ou négative
    if (montantTemp === "" || montantTemp < 0) {
        erreurBudget.classList.remove("hide");
    } else {
        erreurBudget.classList.add("hide");
        // Définir le budget
        montant.innerHTML = montantTemp;
        // Définir le solde
        montantSolde.innerText = montantTemp - valeurDepenses.innerText;
        // Vider la zone de saisie
        montantTotal.value = "";
    }
});

// Fonction pour désactiver les boutons Modifier et Supprimer
const desactiverBoutons = (bool) => {
    let boutonsModif = document.getElementsByClassName("edit");
    Array.from(boutonsModif).forEach((element) => {
        element.disabled = bool;
    });
};

// Fonction pour modifier les éléments de la liste
const modifierElement = (element, modif = false) => {
    let divParent = element.parentElement;
    let soldeCourant = montantSolde.innerText;
    let depenseCourante = valeurDepenses.innerText;
    let montantParent = divParent.querySelector(".montant").innerText;
    if (modif) {
        let texteParent = divParent.querySelector(".produit").innerText;
        titreProduit.value = texteParent;
        montantUtilisateur.value = montantParent;
        desactiverBoutons(true);
    }
    montantSolde.innerText = parseInt(soldeCourant) + parseInt(montantParent);
    valeurDepenses.innerText =
        parseInt(depenseCourante) - parseInt(montantParent);
    divParent.remove();
};

// Fonction pour créer la liste
const creerListe = (nomDepense, valeurDepense) => {
    let contenuSousListe = document.createElement("div");
    contenuSousListe.classList.add("sublist-content", "flex-space");
    liste.appendChild(contenuSousListe);
    contenuSousListe.innerHTML = 
        `<p class="produit">${nomDepense}</p><p class="montant">${valeurDepense}</p>`;
    let boutonModif = document.createElement("button");
    boutonModif.classList.add("fa-solid", "fa-pen-to-square", "edit");
    boutonModif.style.fontSize = "1.2em";
    boutonModif.addEventListener("click", () => {
        modifierElement(boutonModif, true);
    });
    let boutonSuppr = document.createElement("button");
    boutonSuppr.classList.add("fa-solid", "fa-trash-can", "delete");
    boutonSuppr.style.fontSize = "1.2em";
    boutonSuppr.addEventListener("click", () => {
        modifierElement(boutonSuppr);
    });
    contenuSousListe.appendChild(boutonModif);
    contenuSousListe.appendChild(boutonSuppr);
    document.getElementById("liste").appendChild(contenuSousListe);
};

// Fonction pour ajouter des dépenses
boutonVerifMontant.addEventListener("click", () => {
    // Vérification des champs vides
    if (!montantUtilisateur.value || !titreProduit.value) {
        erreurTitreProduit.classList.remove("hide");
        return false;
    }
    // Activer les boutons
    desactiverBoutons(false);
    // Dépense
    let depense = parseInt(montantUtilisateur.value);
    // Dépense totale (existante + nouvelle)
    let somme = parseInt(valeurDepenses.innerText) + depense;
    valeurDepenses.innerText = somme;
    // Solde total (budget - dépense totale)
    const soldeTotal = montantTemp - somme;
    montantSolde.innerText = soldeTotal;
    // Créer la liste
    creerListe(titreProduit.value, montantUtilisateur.value);
    // Vider les champs de saisie
    titreProduit.value = "";
    montantUtilisateur.value = "";
});
