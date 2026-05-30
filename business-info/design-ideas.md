# Koncepti i Varijacije za Dizajn Web Stranice

Ova datoteka sadrži različite ideje i varijacije dizajna za ključne sekcije web stranice Anemona Natura d.o.o. Ideje su strukturirane tako da ih AI agent ili dizajner može iskoristiti za izradu mockupa (npr. u Pencilu ili Figmi) kako bi klijent mogao odabrati najbolju kombinaciju.

---

## 1. Hero Sekcija / Iznad Preloma (Above the Fold)
Cilj je istaknuti kredibilitet (3 milijuna eura bespovratnih sredstava i logotipe partnera) odmah pri učitavanju stranice, bez pretrpavanja prostora kontakt formom.

### Varijacija A: Hero s "Trakom Povjerenja" (Trust Ribbon)
* **Izgled:** Klasični puni zaslon s pozadinskom slikom šume.
* **Sadržaj:** Lijevo poravnata tipografija (naslov i podnaslov) s jasnim pozivom na akciju (CTA gumb "Zatražite besplatno savjetovanje").
* **Elementi povjerenja:** Na samom dnu hero sekcije (iznad preloma) nalazi se suptilna, poluprozirna horizontalna traka s tekstom *"Preko 3.000.000 € ostvarenih bespovratnih sredstava za klijente"* i nizom malih, jednobojnih (monokromatskih) logotipa partnera (RH, EU, Ruralni razvoj).
* **Interakcija:** Klik na CTA gumb glatko skrola (smooth scroll) korisnika do kontakt forme na dnu stranice.

### Varijacija B: Podijeljeni Hero s Karticom Povjerenja (Split-Hero)
* **Izgled:** Dvo-stupčasti raspored iznad preloma.
* **Lijevi stupac:** Glavni naslov o šumarskom savjetovanju i CTA gumb ("Kontaktirajte nas").
* **Desni stupac:** Istaknuta "Kartica povjerenja" (Trust Card) s čvrstom zelenom pozadinom na kojoj se nalazi veliki natpis *"3.000.000+ €"*, opis *"Bespovratnih sredstava osigurano za naše klijente"*, te logotipi partnera u podnožju te kartice.

### Varijacija C: Minimalistički Centrirani Hero
* **Izgled:** Centrirani naslov i podnaslov na vrhu stranice.
* **Sadržaj:** Dva gumba jedan pored drugog: primarni CTA ("Pošalji upit") i sekundarni ("Istraži usluge").
* **Elementi povjerenja:** Neposredno ispod gumba nalazi se kompaktna značka ili tekstualni balončić: *"★ 3 milijuna € ostvarenih bespovratnih sredstava"*, dok se logotipi partnera nalaze u samom zaglavlju (navbaru) pored glavnog logotipa tvrtke.

---

## 2. Prikaz Usluga na Početnoj Stranici
Cilj je prikazati detaljne informacije o 7 različitih usluga (uključujući specifikacije vozila i popise elaborata) bez stvaranja "zida od teksta" na početnoj stranici.

### Varijacija A: Interaktivni Panel s Karticama (Tabs)
* **Izgled:** Horizontalni ili vertikalni izbornik s nazivima 7 usluga.
* **Interakcija:** Klikom na pojedinu uslugu, sadržaj desno (ili ispod) se dinamički mijenja i prikazuje detaljan popis (npr. popis svih 10 točaka za procjenu vrijednosti šume ili specifikacije Mercedes Benz Arocs tegljača).
* **Prednost:** Izuzetno uredno, štedi vertikalni prostor na stranici.

### Varijacija B: Mreža Kartica s Proširenjem (Accordion Cards)
* **Izgled:** Mreža (grid) od 3 stupca koja prikazuje usluge kao kartice s ikonama i kratkim opisima od 2-3 rečenice.
* **Interakcija:** Svaka kartica ima gumb "Saznaj više". Klikom na gumb kartica se širi prema dolje i otkriva detaljan popis stavki, dok se ostale kartice prilagođavaju.

### Varijacija C: Podijeljeni Zaslon s Ljepljivim Izbornikom (Split-Screen Scroll)
* **Izgled:** Dvostupčasta sekcija na početnoj stranici.
* **Lijevi stupac:** Ljepljivi (sticky) popis usluga koji prati skrolanje i označava aktivnu uslugu.
* **Desni stupac:** Dugi skrolajući sadržaj u kojem je svaka usluga detaljno opisana sa svim svojim stavkama, slikama kamiona i pripadajućim informacijama.

### Varijacija D: Vizualne Kartice s Modalnim Prozorom (Modals)
* **Izgled:** Atraktivne kartice s fotografijama u pozadini za svaku od usluga.
* **Interakcija:** Klikom na karticu otvara se prekrivajući prozor (modal) koji sadrži sve detaljne tekstualne opise i popise.
* **Prednost:** Fokusira dizajn na vizualnu estetiku, a detaljan tekst prikazuje samo korisnicima koji pokažu izravan interes.

---

## 3. Kontakt Forma i Navigacijski Tok
Kontakt forma se uklanja iz hero sekcije i integrira u logičan tok stranice.

### Varijacija A: Sidro na Dnu Stranice (Scroll-to-Contact)
* **Koncept:** Kontakt forma je smještena isključivo na samom dnu početne stranice, neposredno iznad podnožja (footera), kao velika i vizualno prepoznatljiva sekcija.
* **Tok:** Svi CTA gumbi u navigaciji, hero sekciji i kod opisa usluga vode izravno (smooth-scroll) na ovu sekciju.

### Varijacija B: Ljepljiva Ladica za Kontakt (Slide-in Drawer)
* **Koncept:** Klikom na bilo koji kontakt gumb ne dolazi do skrolanja, već se s desne strane zaslona otvara elegantna "ladica" s kontakt formom.
* **Prednost:** Korisnik može poslati upit bez napuštanja sekcije u kojoj se trenutno nalazi i čita o uslugama.

---

## 4. Integracija EU Projekata (/eu-projekti)
Klijent želi zadržati specifične informacije i slike o EU projektima.

### Varijacija A: Zasebna Stranica s Teaserom na Početnoj
* **Koncept:** Stranica `/eu-projekti` ostaje zasebna podstranica s cjelokupnim tekstom i galerijom ostvarenih konverzija šuma.
* **Na početnoj stranici:** Postavlja se vizualno atraktivan "teaser" blok koji objašnjava da tvrtka nudi usluge za EU projekte i gumb "Saznajte više o sufinanciranju" koji vodi na `/eu-projekti`.

### Varijacija B: Integrirana Sekcija (Single-Page s preusmjeravanjem)
* **Koncept:** Cjelokupan sadržaj EU projekata se seli na početnu stranicu kao jedna od glavnih sekcija.
* **Poveznica:** Ruta `/eu-projekti` u navigaciji automatski vodi korisnika na početnu stranicu i skrola ga do te sekcije.
