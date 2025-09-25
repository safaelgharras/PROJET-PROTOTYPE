function compterOccurrences(){
    let competences = ["C1", "C3", "C2", "C1", "C8", "C2", "C1", "C4"];
    let codeChoisi = prompt("Ecris le code à chercher(ex: C1, C2, C3...):")
    let compteur = 0;
      for (let i = 0; i < competences.length; i++) {
        if (competences[i] === codeChoisi) {
          compteur++;
        }
      }
    console.log("Le code " + codeChoisi + " apparait " + compteur + " fois. ")
    }
    compterOccurrences();
    