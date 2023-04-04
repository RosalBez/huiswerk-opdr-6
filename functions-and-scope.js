// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken.
// Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// > maak een loop - if 8 of hoger >> laat zien wie het is
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// > dmv een .length
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// > door een variabele aan te maken en die op 0 start en +1 te doen zodra de loop een 8 of hoger 'ziet'
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

function cumLaude (gradeArray, minimumNumber) {
    let amountOfCumLaude = []
    for (let i = 0; i < gradeArray.length; i++) {
        if (gradeArray[i] >= minimumNumber) {
            amountOfCumLaude.push(gradeArray[i])
        }
    }
    return amountOfCumLaude.length
}
    console.log(cumLaude([6, 4, 5], 8))  // bij gradeArray kun je nu ieder willekeurig array meegeven als argument dus kun je alle gewenste outputs krijgen




/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6 //

// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
//* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
//>>> gemiddled is alles cijfers samen gedeeld door het aantal cijfers in de reeks <<<<<<
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
//>>>> de length is nodig zodat alle cijfers worden meegenomen en het totaal van de lenght (hoeveel cijfers zijn er) <<<<<
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
//>>> met een for loop via grades.lenght kun je in iedergeval alle cijfers langs lopen, deze cijfers moeten bij elkaar opgeteld worden en uiteindelijk gedeeld worden door de lenght
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

function averageGrade (gradeArray) {                //dit is ook 2b want gradeArray zorgt ervoor dat je verschillende arrays als argument mee kan geven)
    let totalGrade = 0
    for (let i = 0; i < gradeArray.length; i++) {
        totalGrade += gradeArray[i]
    }
    const averageNumber = totalGrade / gradeArray.length
    return averageNumber
}
console.log(averageGrade(grades).toFixed(2))  // tofix zorgt voor afronding op 2 decimalen (opdr 2c) die'2'in dit geval geeft aan dat je 2 decimalen wilt je kunt hier dus ook 4-5etc neerzetten



/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!




/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9



function highestNumber (gradeArray) {               //3a en 3b door parameter gradeArray mee te geven kun je iedere array in deze functie kwijt
    let highestGrade = 0
    for (let i = 0; i < gradeArray.length; i++) {
        if (gradeArray[i] > highestGrade)
            highestGrade = gradeArray[i]
    }
    return highestGrade
}

console.log(highestNumber(grades))


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
