# MTA-RPC

1. Kroki w instalacji:
  - Pobieramy node.js https://nodejs.org/en/
  - Po instalacji node.js pobieramy to repozytorium (Dla zielonych: Klikasz zielony przycisk Code i download zip)
  - Po pobraniu wyjmujesz folder RichPresence-master i przerzucasz go gdziekolwiek.
  - Po wykonaniu tego kroku klikasz installer.bat instalują ci się dodatki które są niezbędne do działania.
  - Uruchamiamy przez start.bat wpisujemy nazwę serwera (Patrz punkt 3) i powinno działać.
  
  
  
  2. Edycja danych:
    - Tworzymy aplikacje w https://discord.com/developers/applications
    - Nazywamy ją jakkolwiek byle żeby była nazwa
    - Przechodzimy do zakładki [
                                 - Rich presence następnie Art assets i dodajemy pliki graficzne (.png,.jpeg,.jpg) najlepiej 512x512
                                 - Czekamy od 5 do 10 minut aż, strona przetworzy grafiki i będą one tam widoczne
                                 ]
    - Po odczekaniu, widzimy nasze pliki graficzne, otwieramy w edytorze tekstu plik index.js i zmieniamy następujące dane:
       
       - **host**: (Podajemy IP Serwera w " ") np. "51.22.111.111"
       - **port**: (Podajemy tutaj port serwera bez " ") np. 220003
       - **ClientId**: (Podajemy tutaj nasze application id z discord developer portal) np. "122313114141414"
       - **largeImageKey**: (W przetłumaczeniu Duża ikona/logo, czyli tutaj podajemy nazwę pliku z assets (discord developer portal))
       - **smallImageKey**: (W przetłumaczeniu mała ikona/logo, czyli tutaj podajemy nazwę pliku z assets (discord developer portal))
       - **smallImageText**: (W przetłumaczeniu tekst po najechaniu na mniejszy obrazek) np. "Moje RPC"
       - **largeImageText**: (W przetłumaczeniu tekst po najechaniu na wiekszy obrazek) np. "RPC"                   


      **Kontakt discord**: Whitee#5842

3. Dostępne serwery:
  ProjectRPG,
  4life,
  ParadiseRPG,
  Polish Real Life,
  New Real Life,
  ffs,
  top-dayz,
  multirpg,
  megarpg
  
    **Wszystko powinno zostać wpisane zgodnie z tym jak jest napisane powyżej** 
    


**Brakuje ci jakiegoś serwera na liście bądź masz jakiś problem? Nie ma problemu, skonatkuj się ze mną bezpośrednio przez discord: Whitee#5842**
