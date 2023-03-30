[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/h5FXkH4A)
# Boba webshop using React & Typescript by Mimmi, Caisa, Felicia och Leon

## Installation

- `npm install` - Installerar alla NodeJS moduler & dependencies (körs en gång).

## Beskrivning

**Läs noga igenom hela uppgiftsbeskrivningen innan ni börjar.**

I den här laborationen ska ni i grupp om tre skapa en webbshop med hjälp av React och Typescript. Det ni ska skapa är fyra stycken sidor: en startsida, en produktsida, en kassasida och en bekräftelsesida.

### Startsidan & Produktsidan

Er sida ska presentera ett antal olika produkter på startsidan. Vilka typer av produkter som säljs är valfritt men det ska vara seriöst och välgjort. Det ska vara möjligt att klicka på en produkt för gå till produktsidan där användaren kan läsa mer om den valda produkten. Från både startsidan och produktsidan ska det vara möjligt att lägga till produkter i en kundvagn och det ska tydlig framgå för användaren när produkten läggs till i kundvagnen.

### Kassasidan

#### Kundvagn

Ska lista tillagda produkter (bild & titel) dess antal, pris och kundvagnens totalpris. Det ska vara möjligt att uppdatera kundvagnen - dvs ändra antalet av en produkt eller ta bort en produkt helt från kundvagnen. Totalpriset ska alltid uppdateras och vara korrekt.

#### Leveransuppgifter

Ska vara ett formulär där användaren fyller i namn, mail, telefonnummer och adress. Fälten i formuläret ska gå att automatisk fyllas i. Samtliga fält ska valideras så att endast rätt information kan matas in.

#### Bekräftelsesidan

När alla delar har fyllts i på kassasidan så ska användaren kunna slutföra köpet och då få en bekräftelse på köpet tillsammans med ett unikt ordernummer.

Tänk på att det inte ska gå att placera ordern två gånger, även om man navigerar tillbaka på sidan! All orderinformation som användaren har matat in skall presenteras i beskräftelsen som ett bevis på att ni har hanterat datan i alla formulären korrekt.

### Adminsidan (VG)

Designen på denna sida är valfri men skall utgå ifrån designsystemet ni använder er av. Det skall finnas en knapp på startsidan som tar användaren till adminsidan. På adminsidan skall ni lista alla produkter samt ge användaren möjlighet att ta bort, lägga till eller ändra samtliga produkter (CRUD). Om ni väljer att ha en separat sida, modal eller accordion för ändring/tilläggning av en produkt är valfritt men flödet ska vara routat. Samtliga produkter skall vara sparade i localstorage, detta betyder att om localstorage är tomt vid inladdning av sidan behöver samtliga fördefinierade produkter sparas till localstorage. URL används för bilder så det enkelt kan sparas i localstorage.

## Inlämning

För att bli godkänd på den här uppgiften MÅSTE ni använda GIT och GitHub. Inlämningen sker som vanligt på läroplattformen där ni ska zippa ihop projektmappen (kom ihåg att ta bort node_modules). I projektmappen ska det finnas (utöver all kod) en README.md fil. Den ska innehålla en titel, beskrivning av projektet, info om hur projektet byggs och körs samt länk till dokumentationen för designsystemet som används, mm.

## Presentation

Ni ska vid presentationstillfället hålla i en muntlig presentation för klassen. Ni ska gå igenom följande punker under presentationen:

- Presentation och genomgång av er webbshop.
- Utvalda delar av er kod, struktur och dess flöde.
- Reflektioner om projektets genomförande.
- Designsystemet ni valde, hur det används, samt egna reflektioner (VG).

### Krav för Godkänt

- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!

**Home**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Startsidan ska lista samtliga produkter.
- [x] Det ska gå att lägga till produkter i kundvagnen (header + toast + ls).
- [x] Det ska gå att klicka på en produkt och komma till en detaljsida.
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Produkt**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Detaljsidan ska visa all info om en produkt.
- [x] Det ska gå att lägga till produkten i kundvagnen (header + toast + ls).
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Kundvagn & Checkout**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Det ska gå att gå till checkoutsidan och se innehållet i kundvagnen (knapp & url).
- [x] Det ska gå att se det totala priset i kundvagnen.
- [x] Det ska gå att ändra produkterna i kundvagnen (header + vyn + pris + ls).
- [x] Det ska gå att ange leveransuppgifter i ett formulär.
- [x] Samtliga fält för checkoutsidans formulär ska ha valideringsregler.
- [x] Formulären vid utcheckningen ska gå att automatiskt fyllas i.
- [x] Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter.

### Krav för Väl Godkänt

- [x] Ett designsystem/komponentbibliotek används nästintill helt uteslutande för att bygga sidan (ex: MUI, ChakraUI, Mantine, etc).

**Admin**

- [x] Det finns en admin-sida för produkthantering
- [x] Det ska gå att se alla produkter på admin sidan
- [x] Det går att lägga till produkter via admin sidan + ls
- [x] Det går att ta bort produkter via admin sidan + ls
- [x] Det går att redigera produkter via admin sidan + ls
- [x] Samtliga fält för adminsidans formulär ska ha valideringsregler
