<template>
  <div class="container-md container-fluid mt-5">
    <h1>Laboration 4</h1>
    <h4 class="my-3">Du ska i denna laborationsuppgift göra följande:</h4>
    <p class="my-3">
      Den här gången vill jag att du ska bygga en Admin sida som visar en lista
      på alla användare som finns på en sida. Användarna får du skapa själv och
      dessa ska lagras som objekt i en array i vuex. Du bör även ha ett sätt att
      lägga till och ta bort användare från listan i din applikation. På toppen
      av din sida ska du även ha en navigeringsmeny där du kan skifta mellan en
      inloggnings vy och vyn på alla användare. Inloggnings vyn ska innehålla
      ett inloggningsformulär där man får ange en email och ett lösenord, det
      här formuläret skall alltid vara centrerat på sidan oavsett vilken storlek
      på fönster man har. Du ska också ha ett adminUser objekt i din vuex store
      som ser ut ungefär såhär:
    </p>
    <code>
      adminUser: { email: ”mail@mail.com”, password: “BytMig123”, loggedIn:
      false }
    </code>
    <p class="my-3">
      När man loggar in ska du jämföra informationen i inloggningsformuläret med
      adminUser i vuex. Om allt stämmer så ska du ändra loggedIn till true Jag
      vill även att du ändrar innehållet i navbaren beroende på om man har
      loggat in eller inte. Är man ej inloggad så ska inte länken som går till
      sidan där du listar användarna visas. Då ska du istället bara ha en länk
      till din login sida. När man har loggat in så ska du byta ut innehållet i
      navbaren till en logga ut knapp och visa länken till användarlistan.
      Trycker man på logga ut knappen så ska du ändra loggedIn i adminUser till
      false och dirigera om routern till inloggnings vyn. Tänk på att all data
      ska hanteras via vuex och att du får hämta rätt data till respektive
      komponent
    </p>
  </div>
</template>
