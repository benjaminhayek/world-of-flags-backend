const countries = [ { name: 'Mexico',
    flag: './images/flags/mexico.png',
    outline: './images/outlines/mexico.png',
    questions: 
     [ 'Tabasco Hoy',
       'El Financiero & The Oaxaca Times',
       'Oaxaca,Durango,Nayarit' ] },
  { name: 'Hungary',
    flag: './images/flags/hungary.png',
    outline: './images/outlines/hungary.png',
    questions: 
     [ 'Magyar Nemzet',
       'Its first king is known in English as St. Stephen & locally as Szent Istvan',
       'Nograd,Pest,Somogy' ] },
  { name: 'Vietnam',
    flag: './images/flags/vietnam.png',
    outline: './images/outlines/vietnam.png',
    questions: [ 'Nhan Dan' ] },
  { name: 'Ireland',
    flag: './images/flags/ireland.png',
    outline: './images/outlines/ireland.png',
    questions: 
     [ 'The Connaught Telegraph & The Galway Advertiser',
       'In this country\'s parliament, the Dail has 166 seats, the Seanad, 60' ] },
  { name: 'Sweden',
    flag: './images/flags/sweden.png',
    outline: './images/outlines/sweden.png',
    questions: 
     [ 'Svenska Dagbladet & Sundsvalls Tidning',
       'Ostergotland,Vasterbotten,Uppsala' ] },
  { name: 'South Africa',
    flag: './images/flags/south africa.png',
    outline: './images/outlines/south africa.png',
    questions: 
     [ 'The Cape Business News & The Natal Witness',
       'This country\'s post-apartheid national anthem is "Nkosi Sikelel\' Iafrka"',
       'Prince Edward & Marion, 2 small islands of this country, lie about 1200 miles southeast of Cape Town',
       'Namaqualand,Bushmanland,Zululand' ] },
  { name: 'Australia',
    flag: './images/flags/australia.png',
    outline: './images/outlines/australia.png',
    questions: 
     [ 'The Warrnambool Standard & The Alice Springs News',
       'It takes up an entire continent',
       'The Bunyip &The Alice Springs News',
       'Western Plateau,Great Victoria Desert,Great Artesian Basin' ] },
  { name: 'Grenada',
    flag: './images/flags/grenada.png',
    outline: './images/outlines/grenada.png',
    questions: 
     [ 'Site of a 1983 U.S. invasion, it\'s also known as the Isle of Spice',
       'Site of a 1983 U.S. invasion, it\'s also known as the Isle of Spice' ] },
  { name: 'Haiti',
    flag: './images/flags/haiti.png',
    outline: './images/outlines/haiti.png',
    questions: 
     [ 'The reverend Gerard Jean-Juste championed the cause of refugees from this Caribbean country',
       'The reverend Gerard Jean-Juste championed the cause of refugees from this Caribbean country',
       'Honoring the country\'s liberator, "La Dessalinienne" is this country\'s national anthem' ] },
  { name: 'Jamaica',
    flag: './images/flags/jamaica.png',
    outline: './images/outlines/jamaica.png',
    questions: 
     [ 'Kingston & Montego Bay are 2 of its largest towns',
       'Kingston & Montego Bay are 2 of its largest towns',
       'Goat is served as an entree; Spanish Town is the former capital; it\'s home to the Reggae Sunfest' ] },
  { name: 'St. Vincent and The Grenadines',
    flag: './images/flags/saint-vincent-and-the-granadines.png',
    outline: './images/outlines/saint-vincent-and-the-granadines.png',
    questions: 
     [ 'Saint paired with the Grenadines in a country\'s name',
       'Saint paired with the Grenadines in a country\'s name' ] },
  { name: 'Barbados',
    flag: './images/flags/barbados.png',
    outline: './images/outlines/barbados.png',
    questions: 
     [ 'A type of raw sugar is named for this easternmost island of the West Indies',
       'A type of raw sugar is named for this easternmost island of the West Indies' ] },
  { name: 'Israel',
    flag: './images/flags/israel.png',
    outline: './images/outlines/israel.png',
    questions: 
     [ 'Yitzhak Rabin was this country\'s first native-born prime minister',
       'In a 1948-49 war, this Middle Eastern country increased the territory it controlled by about 50%',
       'On May 14, 1948 Rachel Cohen & David Ben-Gurion signed this country\'s Declaration of Independence' ] },
  { name: 'Denmark',
    flag: './images/flags/denmark.png',
    outline: './images/outlines/denmark.png',
    questions: 
     [ 'From 1380 to 1918 Iceland was ruled by this country',
       'Most of Copenhagen is on the island of Sjaelland, this country\'s most densely populated area',
       'It\'s the only Scandinavian nation that borders only one other country (Germany)',
       'Lots of Lutherans live there; its parliament is the Folketing; its royal library is in Copenhagen',
       'Jyllands-Posten,Dagbladet' ] },
  { name: 'Switzerland',
    flag: './images/flags/switzerland.png',
    outline: './images/outlines/switzerland.png',
    questions: 
     [ 'More than half of this country is covered by the Alps & the Jura mounitains',
       'It\'s been said that this country "has but one hero, William Tell, and he is a myth"',
       'In 2002 this country shifted out of neutral & finally joined the U.N.',
       'About one-sixth of its people were born elsewhere; watches are still made in Jura; yodeling is still popular',
       'UBS is a bank based in this land, "The World\'s Piggy Bank"' ] },
  { name: 'Colombia',
    flag: './images/flags/colombia.png',
    outline: './images/outlines/colombia.png',
    questions: 
     [ 'Bogota, Bolivar & Boyaca are political divisions of this country' ] },
  { name: 'Monaco',
    flag: './images/flags/monaco.png',
    outline: './images/outlines/monaco.png',
    questions: 
     [ '(Jon of the Clue Crew indicates a map of the Western Mediterranean on the monitor.)  From Vatican City, the world\'s smallest independent country, travel about 280 miles northwest & you\'ll reach this second-smallest country at less than 1 square mile in size',
       'It uses the Monegasque franc',
       'It\'s the country where you\'ll find a theatre, library & rose garden all named for Grace Kelly',
       'It\'s famous for its luxury hotels; it\'s on the Riviera; Princess Stephanie was born there' ] },
  { name: 'Saudi Arabia',
    flag: './images/flags/saudi arabia.png',
    outline: './images/outlines/saudi arabia.png',
    questions: 
     [ 'In 2005 Prince Bandar ended 22 years as this country\'s ambassador to the U.S.',
       'There are no permanent lakes in this country that\'s home to Mecca' ] },
  { name: 'Belize',
    flag: './images/flags/belize.png',
    outline: './images/outlines/belize.png',
    questions: 
     [ 'If I\'m on the Hummingbird Highway headed for Belmopan, I\'m in this Central American country',
       'It\'s found in Central America',
       'A Central American country:Ends with E' ] },
  { name: 'Armenia',
    flag: './images/flags/armenia.png',
    outline: './images/outlines/armenia.png',
    questions: 
     [ 'Yerevan, the capital of this republic, lies about 35 miles from Mount Ararat',
       'President Robert Kocharian is its head of state, Primer Minister Andranik Markarian its head of government' ] },
  { name: 'Spain',
    flag: './images/flags/spain.png',
    outline: './images/outlines/spain.png',
    questions: 
     [ 'Lace up your sneakers & run with the bulls through the streets of Pamplona in this country' ] },
  { name: 'Philippines',
    flag: './images/flags/philippines.png',
    outline: './images/outlines/philippines.png',
    questions: 
     [ 'In February 2006 a coup attempted to overthrow President Gloria Arroyo of this country' ] },
  { name: 'Bahamas',
    flag: './images/flags/bahamas.png',
    outline: './images/outlines/bahamas.png',
    questions: 
     [ 'The Internet country code for this country near Florida is .bs' ] },
  { name: 'India',
    flag: './images/flags/india.png',
    outline: './images/outlines/india.png',
    questions: 
     [ 'Discovered in 1650, the 787-carat Great Mogul Diamond is the largest ever found in this country',
       'This country is credited with giving Buddhism to Asia & what are called Arabic numbers to the West',
       'The Sanskrit words at the bottom of this country\'s national emblem mean "truth alone triumphs"',
       'Huge Asian country whose national anthem is "Jana-Gana-Mana"',
       'The Deccan Herald& The Bihar Times',
       'Bihar,Chota Nagpur Plateau, Deccan Plateau' ] },
  { name: 'Portugal',
    flag: './images/flags/portugal.png',
    outline: './images/outlines/portugal.png',
    questions: 
     [ 'To tour a port wine lodge in the city of Oporto, you\'d have to go to this country',
       '3 rivers, the Minho, the Douro,& the Tagus, divide this country into 3 distinct geographic areas' ] },
  { name: 'Ethiopia',
    flag: './images/flags/ethiopia.png',
    outline: './images/outlines/ethiopia.png',
    questions: 
     [ 'In 1993 Eritrea formally declared its independence from this country',
       'Sorghum is a major crop; the Zagwe dynasty once ruled it; Addis Ababa University is there' ] },
  { name: 'Sri Lanka',
    flag: './images/flags/sri lanka.png',
    outline: './images/outlines/sri lanka.png',
    questions: 
     [ 'The Sinhalese make up nearly 75% of this island country\'s population',
       'This is "India\'s Teardrop"' ] },
  { name: 'Jordan',
    flag: './images/flags/jordan.png',
    outline: './images/outlines/jordan.png',
    questions: 
     [ 'Under Hussein I this country gave its women the right to vote in 1973',
       'It grows a lot of barley; its national anthem is "Long Live The King"; it\'s ruled by the man seen here(King Hussein)' ] },
  { name: 'Iceland',
    flag: './images/flags/iceland.png',
    outline: './images/outlines/iceland.png',
    questions: 
     [ 'Girls can see geysers in this country where the name originated' ] },
  { name: 'Italy',
    flag: './images/flags/italy.png',
    outline: './images/outlines/italy.png',
    questions: 
     [ 'Calabria is a region in the "toe" of this country\'s "boot"',
       'It\'s known as "The Land of the Apennines"',
       'The name of this Mediterranean country comes from an ancient Greek word for "calf" (as in cow, not leg)' ] },
  { name: 'Honduras',
    flag: './images/flags/honduras.png',
    outline: './images/outlines/honduras.png',
    questions: 
     [ 'This Central American country\'s name means "depths"; it\'s what Columbus named the region',
       'This Central American country is home to the ruins of Copan, one of the Mayan\'s largest cities' ] },
  { name: 'North Korea',
    flag: './images/flags/north-korea.png',
    outline: './images/outlines/north-korea.png',
    questions: 
     [ 'If you wear your DKNY to the DPRK, you\'ll be well dressed in this east Asian land' ] },
  { name: 'France',
    flag: './images/flags/france.png',
    outline: './images/outlines/france.png',
    questions: 
     [ 'Since 1819 Monaco\'s judicial system has been based on this neighbor\'s code',
       'This country borders both Belgium & Monaco',
       'Corse,Auvergne,Bretagne' ] },
  { name: 'Morocco',
    flag: './images/flags/morocco.png',
    outline: './images/outlines/morocco.png',
    questions: 
     [ 'The Spanish ports of Ceuta & Melilla actually lie on the Mediterranean coast of this North African nation',
       'In October 1956 the international city of Tangier became part of this country',
       'Al Bayane,La Gazette du Maroc' ] },
  { name: 'Rwanda',
    flag: './images/flags/rwanda.png',
    outline: './images/outlines/rwanda.png',
    questions: 
     [ 'About 90% of the people of this country which borders Burundi on the north are Hutu, about 9% Tutsi' ] },
  { name: 'Russia',
    flag: './images/flags/russia.png',
    outline: './images/outlines/russia.png',
    questions: 
     [ 'The Kremlin Cup is this country\'s most important tennis event',
       'The largest country in the world, it has 21 republics, 49 oblasts & 6 krays',
       'Murmansk in this country is the largest city in population found north of the Arctic Circle',
       'The world\'s longest oil pipeline runs 2,500 miles from Samara in this country to Mozyr in Belarus' ] },
  { name: 'Paraguay',
    flag: './images/flags/paraguay.png',
    outline: './images/outlines/paraguay.png',
    questions: 
     [ 'The 2 South American countries whose names end with the letters "guay"' ] },
  { name: 'Uruguay',
       flag: './images/flags/uruguay.png',
       outline: './images/outlines/uruguay.png',
       questions: 
        [ 'The 2 South American countries whose names end with the letters "guay"' ] },
  { name: 'Indonesia',
    flag: './images/flags/indonesia.png',
    outline: './images/outlines/indonesia.png',
    questions: 
     [ 'The name of Java, an island in this country, is also spelled Djawa' ] },
  { name: 'Uganda',
    flag: './images/flags/uganda.png',
    outline: './images/outlines/uganda.png',
    questions: 
     [ 'You\'ll find this African country\'s national museum in its capital, Kampala' ] },
  { name: 'Thailand',
    flag: './images/flags/thailand.png',
    outline: './images/outlines/thailand.png',
    questions: 
     [ 'For centuries before 1939, this country was known as Siam',
       'It\'s a leading tin producer; fish fights are all the rage; it\'s the country formerly known as Siam' ] },
  { name: 'Romania',
    flag: './images/flags/romania.png',
    outline: './images/outlines/romania.png',
    questions: 
     [ 'This country was once part of the Roman Empire & its name means "Land of the Romans"',
       'At the end of World War I, this country received the provinces of Bukovina, Banat & Transylvania from Austria-Hungary' ] },
  { name: 'Mauritania',
    flag: './images/flags/mauritania.png',
    outline: './images/outlines/mauritania.png',
    questions: 
     [ 'Of Malta, Mauritius or Mauritania, the one that isn\'t an island' ] },
  { name: 'Austria',
    flag: './images/flags/austria.png',
    outline: './images/outlines/austria.png',
    questions: 
     [ 'Burgenland, Vorarlberg & Salzburg are 3 of this German-speaking country\'s 9 provinces',
       'The Wiener Zeitung,The Osterreich Journal' ] },
  { name: 'Chile',
    flag: './images/flags/chile.png',
    outline: './images/outlines/chile.png',
    questions: 
     [ 'Its borders with Bolivia & Peru are much shorter than its border with Argentina',
       'Conger eel is a taste treat; the cowboys are called huasos; its national congress is in Valparaiso',
       'On Feb. 27, 2010 a magnitude 8.8 earthquake struck it' ] },
  { name: 'The Netherlands',
    flag: './images/flags/netherlands.png',
    outline: './images/outlines/netherlands.png',
    questions: 
     [ 'Numerous dikes cover the coast of Ijsselmeer in this country' ] },
  { name: 'Lebanon',
    flag: './images/flags/lebanon.png',
    outline: './images/outlines/lebanon.png',
    questions: [ 'A cedar tree is featured on this country\'s coat of arms' ] },
  { name: 'Slovakia',
    flag: './images/flags/slovakia.png',
    outline: './images/outlines/slovakia.png',
    questions: 
     [ 'Bratislava, capital of this eastern neighbor of the Czech Republic, was known as Pressburg until 1919' ] },
  { name: 'Malaysia',
    flag: './images/flags/malaysia.png',
    outline: './images/outlines/malaysia.png',
    questions: 
     [ 'This country\'s territory on Borneo is over 50% larger than its territory on the Asian mainland',
       'It has a tropical climate; its king is called the Yang Di-Pertuan Agong; there\'s a beautiful zoo near Kuala Lumpur' ] },
  { name: 'Kenya',
    flag: './images/flags/kenya.png',
    outline: './images/outlines/kenya.png',
    questions: 
     [ 'Politically, this country is divided into 7 provinces & Nairobi' ] },
  { name: 'Ecuador',
    flag: './images/flags/ecuador.png',
    outline: './images/outlines/ecuador.png',
    questions: 
     [ 'The Bay of Ancon de Sardinas is shared by Colombia & this neighbor to the south' ] },
  { name: 'Norway',
    flag: './images/flags/norway.png',
    outline: './images/outlines/norway.png',
    questions: 
     [ 'Olav V was crowned this Scandinavian country\'s king in 1957 & reigned there for 34 years',
       'Slightly larger than New Mexico  it contains the northernmost point in continental Europe',
       'Oppland,Nordland,Telemark' ] },
  { name: 'Angola',
    flag: './images/flags/angola.png',
    outline: './images/outlines/angola.png',
    questions: 
     [ 'On southern Africa\'s west coast, it\'s been independent of Portugal since 1975' ] },
  { name: 'The United Kingdom',
    flag: './images/flags/united-kingdom.png',
    outline: './images/outlines/united-kingdom.png',
    questions: 
     [ 'In 2007, the 100th anniversary of the founding of boy scouting was celebrated in this country where it began',
       'The Newham Recorder,The Luton News' ] },
  { name: 'Belgium',
    flag: './images/flags/belgium.png',
    outline: './images/outlines/belgium.png',
    questions: 
     [ 'Stanley Kowalski might yell out for a Stella Artois beer from this country' ] },
  { name: 'South Korea',
    flag: './images/flags/south-korea.png',
    outline: './images/outlines/south-korea.png',
    questions: 
     [ 'Daegu Polytechnic College & the Catholic University of Pusan are 2 colleges in this country' ] },
  { name: 'Cuba',
    flag: './images/flags/cuba.png',
    outline: './images/outlines/cuba.png',
    questions: 
     [ 'Hand-rolled Cohiba & Montecristo cigars originated in this country',
       'In 1998 Pope John Paul II concluded his visit to this country with a mass at the Plaza de la Revolucion' ] },
  { name: 'Burundi',
    flag: './images/flags/burundi.png',
    outline: './images/outlines/burundi.png',
    questions: 
     [ 'Hutus & Tutsis predominate in these 2 neighboring countries once part of German East Africa' ] },
  { name: 'Panama',
    flag: './images/flags/panama.png',
    outline: './images/outlines/panama.png',
    questions: 
     [ 'Popular newspapers in this Western Hemisphere nation include The Isthmian & The Bocas Breeze' ] },
  { name: 'Georgia',
    flag: './images/flags/georgia.png',
    outline: './images/outlines/georgia.png',
    questions: 
     [ 'This former Soviet republic is less than half the size of the U.S. state of the same name' ] },
    { name: 'Guyana',
    flag: './images/flags/guyana.png',
    outline: './images/outlines/guyana.png',
    questions: 
     [ 'Sadly, it was the site of the Jonestown mass suicide in 1978' ] },
  { name: 'Taiwan',
    flag: './images/flags/taiwan.png',
    outline: './images/outlines/taiwan.png',
    questions: 
     [ 'Its national anthem, "San-Min-Chu-I", was co-written by Dr. Sun Yat-sen' ] },
  { name: 'Samoa',
    flag: './images/flags/samoa.png',
    outline: './images/outlines/samoa.png',
    questions: 
     [ '"Please, Sir, I want" this Polynesian island that dropped "Western" from its name in 1997' ] },
  { name: 'Madagascar',
    flag: './images/flags/madagascar.png',
    outline: './images/outlines/madagascar.png',
    questions: 
     [ 'The Mozambique Channel separates this island nation from the African mainland',
       'In World War 2, the British occupied this island because it maintained ties with Vichy France' ] },
  { name: 'Somalia',
    flag: './images/flags/somalia.png',
    outline: './images/outlines/somalia.png',
    questions: 
     [ 'Barren and arid, this troubled country hasn\'t had a real working central government since 1991' ] },
  { name: 'Bolivia',
    flag: './images/flags/bolivia.png',
    outline: './images/outlines/bolivia.png',
    questions: 
     [ 'Alpacas are bred for wool there; Singani is a favorite drink; the National Museum of Arts is in La Paz' ] },
  { name: 'Liechtenstein',
    flag: './images/flags/liechtenstein.png',
    outline: './images/outlines/liechtenstein.png',
    questions: 
     [ 'It\'s about the same size as Washington, D.C.; it\'s a principality; it\'s next to Switzerland' ] },
  { name: 'Sudan',
    flag: './images/flags/sudan.png',
    outline: './images/outlines/sudan.png',
    questions: 
     [ 'Sandals are popular there; many of the people speak Dinka; the second largest city is Khartoum' ] },
  { name: 'Brunei',
    flag: './images/flags/brunei.png',
    outline: './images/outlines/brunei.png',
    questions: 
     [ 'Its official language is Malay; Bandar Seri Begawan is its capital; its head of state is a sultan' ] },
  { name: 'Peru',
    flag: './images/flags/peru.png',
    outline: './images/outlines/peru.png',
    questions: 
     [ 'Some locals eat a fruit called tuna; it\'s the home base of the Lima Times; llamas live there',
       'There are about 30 million people in this "Land of the Incas"' ] },
  { name: 'Ivory Coast',
    flag: './images/flags/ivory-coast.png',
    outline: './images/outlines/ivory-coast.png',
    questions: 
     [ 'It\'s a republic; it\'s in Africa; it has a tusk material in its name' ] },
  { name: 'Argentina',
    flag: './images/flags/argentina.png',
    outline: './images/outlines/argentina.png',
    questions: 
     [ 'Diario de los Andes,The Buenos Aires Herald',
       'El Cronista &El Patagonico',
       'Chaco Central,Pampa de las Salinas,Chaco Austral',
       'Cordoba,La Pampa,Tierra del Fuego' ] },
  { name: 'Poland',
    flag: './images/flags/poland.png',
    outline: './images/outlines/poland.png',
    questions: [ 'Przewodnik Katolicki &Glos Koszalinski' ] },
  { name: 'Greece',
    flag: './images/flags/greece.png',
    outline: './images/outlines/greece.png',
    questions: 
     [ 'Dimokratiki &Peloponnisos',
       'Thessaly,Epirus,Peloponnesus',
       'It contains portions of historical Epirus & Attica' ] },
  { name: 'China',
    flag: './images/flags/china.png',
    outline: './images/outlines/china.png',
    questions: [ 'Hebei,Hubei,Shandong' ] },
  { name: 'Canada',
    flag: './images/flags/canada.png',
    outline: './images/outlines/canada.png',
    questions: 
     [ 'The Mackenzie Mountains,Wood Buffalo National Park,the Queen Elizabeth Islands',
       'It\'s "America\'s Hat"' ] },
  { name: 'Egypt',
    flag: './images/flags/egypt.png',
    outline: './images/outlines/egypt.png',
    questions: [ 'Damietta,Suez,Gharbiya' ] },
  { name: 'Brazil',
    flag: './images/flags/brazil.png',
    outline: './images/outlines/brazil.png',
    questions: 
     [ 'Roraima,Maranhao,Amazonas',
       'The equator crosses it: ends with L' ] },
  { name: 'Turkmenistan',
    flag: './images/flags/turkmenistan.png',
    outline: './images/outlines/turkmenistan.png',
    questions: 
     [ 'Oral epics are sung by poets & composers known as bakhashi in this central Asian "stan" nation' ] },
  { name: 'Turkey',
    flag: './images/flags/turkey.png',
    outline: './images/outlines/turkey.png',
    questions: 
     [ 'Slightly larger than Texas, it borders the Black Sea & the Mediterranean Sea' ] },
  { name: 'Tunisia',
    flag: './images/flags/tunisia.png',
    outline: './images/outlines/tunisia.png',
    questions: 
     [ 'It thrusts out towards Sicily as the northernmost bulge of Africa' ] },
  { name: 'Tanzania',
    flag: './images/flags/tanzania.png',
    outline: './images/outlines/tanzania.png',
    questions: [ 'It shares dominion over Lake Victoria with Kenya & Uganda' ] },
  { name: 'Tonga',
    flag: './images/flags/tonga.png',
    outline: './images/outlines/tonga.png',
    questions: 
     [ 'This South Pacific island nation is ruled by a king & a 30-member legislative assembly' ] },
  
  { name: 'Afghanistan',
    flag: './images/flags/afghanistan.png',
    outline: './images/outlines/afghanistan.png',
    questions: 
     [ 'Fierce Pashtun fighters help make it the "Graveyard of Empires"' ] },
  { name: 'New Zealand',
    flag: './images/flags/new zealand.png',
    outline: './images/outlines/new zealand.png',
    questions: [ 'Some call it "Kiwiland"' ] },
  { name: 'Ukraine',
    flag: './images/flags/ukraine.png',
    outline: './images/outlines/ukraine.png',
    questions: 
     [ 'The Bread Basket of Europe", it stretches from Uzhgorod to Luhansk',
       'A reactor at Chernobyl there kept operating 14 years after the accident' ] },
  { name: 'Albania',
    flag: './images/flags/albania.png',
    outline: './images/outlines/albania.png',
    questions: 
     [ 'If Italy\'s boot kicked backwards, it would hit this country whose capital is Tirane' ] },
  { name: 'Singapore',
    flag: './images/flags/singapore.png',
    outline: './images/outlines/singapore.png',
    questions: 
     [ 'This Asian island nation was ceded to the British East India Company in 1819' ] },
  { name: 'Algeria',
    flag: './images/flags/algeria.png',
    outline: './images/outlines/algeria.png',
    questions: 
     [ 'This country\'s tallest peak, Mount Tahat, rises 9,850 feet in the Ahaggar Mountains in the Sahara Desert' ] },
  { name: 'Estonia',
    flag: './images/flags/estonia.png',
    outline: './images/outlines/estonia.png',
    questions: 
     [ 'This Baltic republic is bordered on the north by the Gulf of Finland' ] },
  { name: 'Mongolia',
    flag: './images/flags/mongolia.png',
    outline: './images/outlines/mongolia.png',
    questions: 
     [ 'At 1.7 people per square kilometer, this Central Asian nation is the world\'s most sparsely populated country' ] },
  { name: 'Bahrain',
    flag: './images/flags/bahrain.png',
    outline: './images/outlines/bahrain.png',
    questions: [ 'A Mideast island kingdom: ends with N' ] },
  { name: 'Bhutan',
    flag: './images/flags/bhutan.png',
    outline: './images/outlines/bhutan.png',
    questions: [ 'Average elevation about 8,000 feet: ends with N' ] },
  { name: 'Bosnia and Herzegovina',
    flag: './images/flags/bosnia-and-herzegovina.png',
    outline: './images/outlines/bosnia-and-herzegovina.png',
    questions: [ 'Bordering Croatia: ends with A' ] },
  { name: 'Kazakhstan',
    flag: './images/flags/kazakhstan.png',
    outline: './images/outlines/kazakhstan.png',
    questions: [ 'The largest landlocked country' ] } ]


  // { name: '',
  //   flag: './images/flags/',
  //   outline: './images/outlines/',
  //   questions: [ '' ] }

     module.exports = countries