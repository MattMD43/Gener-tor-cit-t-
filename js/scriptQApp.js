'use strict'

document.getElementById('button').addEventListener('click', generateQuotes);

function generateQuotes(e)
{
    e.preventDefault();
  
    let newQ = document.getElementById('output');
    newQ.classList.add('centered');
 
    
    let quote =  [`
     <i>„Co ještě včera chápalo společenské vědomí jako neslušné, to dnes běžně omlouvá, aby to zítra zřejmě přijímalo jako přirozené a pozítří možná dokonce jako příklad slušnosti."</i> <br> Václav Havel`,
     `<i>„Povýšenost nikdy nemá žádnou omluvu. Pochází buď z malého sebevědomí, nebo se opírá o dočasné a povrchní úspěchy.“</i> <br> Dalajláma`,
    `<i>„Život je jako hra, dokud hraješ neprohraješ!“ Kovy, youtuber</i> <br>`,
    `<i>„Milióny lidí touží po nesmrtelnosti, a přitom nevědí co mají dělat, když v neděli odpoledne prší.“</i> <br> Susan Ertz`,
    `<i>„Kdybychom psy naučili mluvit, ztratili bychom posledního přítele.“</i> <br> Sofoklés`,
    `<i>„Inteligentní lidé se snaží problémy řešit, geniální se je snaží nedělat.“</i> <br> Albert Einstein`,
    `<i>„Všechny placené práce absorbují a degradují mysl.“</i> <br> Aristotelés`,
    `<i>„Má dost kdo je spokojen s málem.“</i> <br> České lidové přísloví`,
    `<i>„Člověk by se nikdy neměl ostýchat přiznat svůj omyl. Tím přece dává najevo, že se vyvíjí a že je chytřejší než včera.“</i> <br> Jonathan Swift `,
    `<i>„Kdos uši dostal, aby jima slyšel, proč si je palcem zacpáváš? A komu rozum z vysokosti přišel, proč po něm nohou šlapáváš? - Věštkyně“ </i> <br> Karel Jaromír Erben`,
    `<i>„Čím slabší je tělo, tím víc poroučí, čím silnější, tím více poslouchá.“ </i> <br> Jean Jacques Russeau`,
    `<i>„Pamatuj, že i ta nejtěžší hodina ve tvém životě, má jen 60 minut.“ </i> <br> Sofoklés`,
    `<i>„Jestli najdeš v životě cestu bez překážek, určitě nikam nevede.“ </i> <br> Arthur C. Clarke`,
    `<i>„Dej každému dni příležitost, aby se stal nejkrásnějším dnem tvého života.“ </i> <br> Mark Twain`,
    `<i>„Existuje tisíce způsobů, jak zabít čas, ale žádný, jak ho vzkřísit.“ </i> <br> Albert Einstein`,
    `<i>„Vize bez akce je sněním, akce bez vize je noční můrou.” </i> <br> Japonské přísloví`,
    `<i>„Všichni rádi věříme tomu, že problém spočívá v druhých lidech. Dává nám to pocit, že jednáme správně a že my sami nemusíme nic měnit.” </i> <br> John Whitmore, zakladatel moderního koučování`,
    `<i>„Jednoduchost je nekonečná dokonalost. Dokonalost je nekonečná jednoduchost.” </i> <br> Leonardo da Vinci`,
    `<i>„Problém současného světa je, že hlupáci jsou skálopevně jistí, ale lidé inteligentní jsou plní pochybností.” </i> <br> Bertrand Russell, matematik, nositel Nobelovy ceny`,
    `<i>„Náš problém není v tom, že toho víme málo. Náš problém je, že mnoho z toho, co víme, není pravda.”  </i> <br> Will Rogers`,
    `<i>„Chcete-li uspět zdvojnásobte počet svých neúspěchů.” </i> <br> Thomas J. Watson Jr., bývalý prezident IBM`,
    `<i>„Ignorance častěji než inteligence plodí sebevědomí.” </i> <br> Charles Darwin`,
    `<i>„Ten, kdo ví a neví, že ví, spí. Probuďte ho.
    Ten, kdo neví a ví, že neví, je prostý. Poučte ho.
    Ten, kdo neví a neví, že neví, je hloupý. Vyhněte se mu.
    Ten, kdo ví a ví, že ví, je moudrý. Následujte ho.” </i> <br> Arabské přísloví`,
    `<i>„Učitelé nesmějí být podobni sloupům u cest, jež ukazují, kam jít, ale samy nikam nejdou.” </i> <br> Jan Amos Komenský`,
    `<i>„Není nic těžšího než vyjádřit významnou myšlenku tak, aby jí každý rozuměl”  </i> <br> Arthur Schopenhauer, německý filozof`,
    `<i>„Čím více je rozhodovací problém složitější, tím více máme tendenci vybírat výchozí variantu.”  </i> <br> Dan Ariely, profesor psychlogie a behaviorální ekonomie, Duke University (USA)`,
    `<i>„Mysl je místo samo o sobě, které samo sobě může udělat nebe z pekla a peklo z nebe.”</i> <br>John Milton, anglický básník`,
    `<i>„Pokud to neumíš vysvětlit jednoduše, nerozumíš tomu dostatečně dobře.”</i> <br> Albert Einstein`,
    `<i>„Je zhola zbytečné se ptát, má-li život smysl či ne. Má takový smysl, jaký mu dáme.”</i> <br>Seneca `,
    `<i>„Je-li člověk nespojený se svým stavem, může jej změnit dvěma způsoby. Buď změní podmínky svého života, nebo svůj duševní postoj. První není vždy možné, to druhé je možné vždy.”</i> <br>Ralph Waldo Emerson `,
    `<i>„Ať si komplikujete život sebevíc, on sám se zjednoduší.”</i> <br>Gertrude Stein `,
    `<i>„Představte si to ticho, kdyby lidí říkali jen to, co vědí.”</i> <br>Karel Čapek `,
    `<i>„Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít.”</i> <br> Jan Werich`,
    `<i>„Správně vidíme jen srdcem. Co je důležité je očím neviditelné.”</i> <br>Antoine de Saint-Exupéry `,
    `<i>„Svět patří těm, co se neposerou.”</i> <br>Charles Bukowski `,
    `<i>„Všichni vědí naprosto přesně, jak mají žít druzí. Zato nikdy nevědí, jak mají žít oni sami.(Alchymista).”</i> <br>Paulo Coelho `,
    `<i>„Když už člověk jednou je, tak má koukat aby byl. A když kouká, aby byl a je, tak má být to, co je a nemá být to, co není, jak tomu v mnoha případech je.”</i> <br>Jan Werich `,
    `<i>„Když něco opravdu chceš, celý vesmír se spojí, abys to mohl uskutečnit.”</i> <br>Paul Coelho `,
    `<i>„Každá revoluce končí tím, když se nová prasata dostanou ke korytům.”</i> <br>Eric Arthur Blair `,
    `<i>„Jediný sen je silnější, než tisíce skutečností.”</i> <br>J. R. R. Tolkien `,
    `<i>„Kdo chce, hledá způsob. Kdo nechce, hledá důvod.”</i> <br>Jan Werich `
    ];

let qGen = quote[(Math.floor(Math.random()*quote.length))];
newQ.innerHTML = qGen;
  

}