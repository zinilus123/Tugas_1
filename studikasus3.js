const hero = ["Layla","Ling","Franco","Fanny","Miya","Eudora"];
let heroF = 0;

for (let i = 0; i < hero.length; i++) {
    let heroF = hero[i];
    
    if (heroF.startsWith("F")) {
        console.log(heroF + " -> Hero Assassin/Tank Favorit");
    } else {
        console.log(heroF + " -> Hero Biasa");
    }
}