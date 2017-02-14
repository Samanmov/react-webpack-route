import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Serial from './serial/serial.component.jsx'
import SerialDetail from './serial/serial-detail.component.jsx'
import Movie from './movie/movie.component.jsx'
import MovieDetail from './movie/movie-detail.component.jsx'




//
const data = [
    {
        id: 1,
        name: 'Westworld',
        year: '2016',
        genre: 'Drama , Mystery , Sci-Fi , Western',
        country: 'USA',
        media: 'https://static.hbonordic.com/categoryThumbnails/cc8f45eb-3b62-477a-8547-be5c3f051385.jpg',
        rating: '9.1 / 10',
        summary: "Det här är en ambitiös och mycket fantasifull dramaserie som tar äventyrslusten och jakten på spänning till en helt ny och farlig nivå. I den futuristiska fantasiparken kallad Westworld avviker en grupp androider från sina programmerares noggrant planerade skript med besvärande och märkligt beteende. Med fantastiska skådespelare, som Anthony Hopkins, Ed Harris, Evan Rachel Wood, James Marsden, Thandie Newton och Jeffrey Wright i rollerna, har serien inspirerats av filmen från 1973, skriven och regisserad av Michael Crichton (Jurassic Park), och omarbetad till TV av Jonathan Nolan (Interstellar, The Dark Knight) och Lisa Joy (Pushing Daisies, Burn Notice).",
        trailer: "IuS5huqOND4",
        poster: "https://static.hbonordic.com/categoryThumbnails/3519d7d7-c2be-441a-bd71-c34a69342363.jpg"

    },
    {
        id: 2,
        name: 'The Walking Dead',
        year: '2010-',
        genre: ' Drama , Horror ,Thriller',
        country: 'USA',
        media: 'https://static.hbonordic.com/categoryThumbnails/82c296b5-f50f-46ae-9843-b9f8b92f00c2.jpg',
        rating: '8.5 / 10',
        summary: "När han vaknar upp från att ha legat i koma på ett övergivet sjukhus upptäcker polisen Rick Grimes att den värld han levde i är försvunnen – den har ödelagts av en zombie-epidemi av apokalyptiska proportioner. I närheten, i utkanterna av Atlanta, kämpar ett litet läger för att överleva medan de döda förföljer dem från alla håll och kanter. Kan Rick och de andra hålla fast vid sin mänsklighet medan de kämpar för att leva i den här skrämmande nya världen? Och i så hemska förhållanden och med rivalitet sinsemellan - kan de ens överleva varandra? The Walking Dead är ett storslaget överlevnadsäventyr från regissören av The Shawshank Redemption och producenten bakom The Terminator och Aliens.",
        trailer: "R1v0uFms68U",
        poster: "https://static.hbonordic.com/categoryThumbnails/0d9951e1-a32e-46c8-bf81-0e7ce0e7ac60.jpg"
    },
    {
        id: 3,
        name: 'Fear The Walking Dead',
        year: '2015-',
        genre: 'Drama , Horror ,Thriller',
        country: 'BMW',
        media: 'https://static.hbonordic.com/categoryThumbnails/3eccd100-19cd-4b29-adc8-868e569ccb26.jpg',
        rating: ' 7.1 / 10',
        summary: "Fear the Walking Dead är en avskalad dramaserie i samma värld som The Walking Dead där vi får följa en trasig familj under upptakten av de odödas apokalyps. I en stad full av människor på jakt efter sina drömmar och på flykt undan sina hemligheter och sitt förflutna, hotar en mystisk farsot att rasera den lilla stabilitet som studievägledaren Madison Clark och engelskläraren Travis Manawa har lyckats skapa. De vardagsproblem som uppstår i mötet mellan två familjer där barnen präglas av bitterhet, verklighetsflykt och missbruk, får stå tillbaka när samhället börjar falla samman. Det är en obeveklig evolution där endast de starkaste överlever, och vår dysfunktionella familj måste antingen börja om på nytt eller bejaka sina mörkare sidor.",
        trailer: 'yzXglr5bc3w',
        poster: "https://static.hbonordic.com/categoryThumbnails/78a5fb40-25e8-45d4-92dc-a6f064a225f9.jpg"
    },
    {
        id: 4,
        name: 'Vikings',
        year: '2013-',
        genre: 'Action, Drama, History, Romance, War',
        country: 'USA',
        media: 'https://static.hbonordic.com/categoryThumbnails/69f2cef1-cd4d-4e44-895d-6b0982ac3497.jpg',
        rating: '8.7 / 10',
        summary: "Vikingarnas värld kommer till liv genom Ragnar Lothbroks resa. Han var den förste viking som trädde ut från de nordiska legenderna och hamnade i historiens blad – en man på gränsen till myt. Vår berättelse tar sin början i 700-talets Skandinavien där Ragnar Lothbrok är en krigare och lantbrukare som drömmer om att hitta rikedomar genom att gå mot traditionen att utföra räder i öst. Ragnar har i hemlighet arbetat på ett projekt som kommer att för alltid förändra vikingarnas värld. Men först måste Ragnar övertyga Earl Haraldson, den mäktige ledaren, som inte alls är beredd att dela med sig av det erkännande resan kan ge till Ragnar om den lyckas.",
        trailer: "G3DwTh_aPKw",
        poster: "https://static.hbonordic.com/categoryThumbnails/e59a5e15-dae9-4641-93ed-dfe20af4013b.jpg"
    },
    {
        id: 5,
        name: 'Taboo',
        year: '2017',
        genre: 'Drama',
        country: 'Storbritannien',
        media: 'https://static.hbonordic.com/categoryThumbnails/19733dce-0f6f-4cf3-9211-8f5d3cd5b049.jpg',
        rating: '9.1 / 10',
        summary: "Den här serien utspelar sig 1814, och vi får följa James Keziah Delaney, en man som har varit vid världens ände och återvänt helt förändrad. Han har länge antagits vara död, men återvänder hem till London från Afrika för att ärva det som återstår av sin fars fraktimperium och bygga upp sin tillvaro igen. Men arvet från hans far för inget gott med sig, och med fiender som lurar i varje hörn, måste James vara extra smidig för att undvika att skriva under sin egen dödsdom. Ett kusligt släktmysterium växer fram, omgivet av konspirationer, mord och förräderi, i den här spännande historien om kärlek och svek.",
        trailer: "6ZYAQSlIhM4",
        poster:"https://static.hbonordic.com/categoryThumbnails/160dbacb-9b5f-4595-a0c0-3471433f6314.jpg"
    },
    {
        id: 6,
        name: 'The Magicians',
        year: '2015-',
        genre: 'Fantasy',
        country: 'USA',
        media: 'https://static.hbonordic.com/categoryThumbnails/9f93492f-eefd-4ea8-b214-e36e36958998.jpg',
        rating: '7.5 / 10',
        summary: "Den här serien baseras på Lev Grossmans bästsäljande bokserie The Magicians. Vi får följa Quentin Coldwater, en mycket intelligent men socialt tillbakadragen man i 20-årsåldern som i hemlighet är besatt av en serie fantasy-romaner som han läste som barn om det magiska landet Fillory. Bortsett från det är Quentins liv ganska enformigt, tills han antas till en väldigt hemlig, exklusiv magiskola i delstaten New York, där han får en grundlig och omfattande utbildning i modern trollerikonst. Men magin ger honom inte den lycka, de äventyr och den mening med livet som han väntade sig… förrän han och hans vänner upptäcker att Fillory finns på riktigt.",
        trailer: "QS_20JPaEnA",
        poster:"https://static.hbonordic.com/categoryThumbnails/eaae8d34-fd38-465e-8168-aec273671a1a.jpg"
    },
    {
        id: 7,
        name: 'Penny Dreadful',
        year: '2015-',
        genre: 'Skräck',
        country: 'USA',
        media: 'https://static.hbonordic.com/categoryThumbnails/7342a4e2-7c5d-46a0-89f7-018b1ce5d97b.jpg',
        rating: '8.2 / 10',
        summary: "Penny Dreadful är en skrämmande psykologisk thriller skapad, skriven och producerad av trefaldigt Oscarsnominerade John Logan. I Penny Dreadful blir några av litteraturens mest skräckinjagande figurer - inklusive doktor Frankenstein och hans varelse, Dorian Gray och flera ikoniska personer från romanen Dracula – inblandade med varandra i det viktorianska London. Serien väver samman dessa klassiska skräckhistorier, samtidigt som personerna de handlar om kämpar med sitt monstruösa utanförskap.",
        trailer: "YFXHfEqMcis",
        poster: "https://static.hbonordic.com/categoryThumbnails/4fe1e3fc-955c-4dfc-81b3-16f39b7c61a5.jpg"
    },
    {
        id: 8,
        name: 'Game of Thrones',
        year: '2015-',
        genre: 'Drama',
        country: 'USA',
        media: 'https://static.hbonordic.com/categoryThumbnails/4fc0749d-821a-452c-bea4-233bf0ed2d2d.jpg',
        rating: '9.5 / 10',
        summary: "I ett land där somrarna är decennier långa och vintrarna kan vara en livstid, är det oroligheter. Från den intrigerande södern och de vilda länderna i öster till den frusna norden och den uråldriga muren som skyddar riket från mörkret bortom den, håller två mäktiga familjer på med en katt-och-råtta-lek om vem som ska styra de Sju Kungarikena i Westeros. Medan svek, lust, intriger och övernaturliga krafter skakar dessa kungariken i grunden, kommer kampen om Järntronen att få oförutsedda och långtgående följder. Vintern kommer. Kampen om Järntronen kan börja.",
        trailer: "iGp_N3Ir7Do",
        poster: "https://static.hbonordic.com/categoryThumbnails/ac13118d-a943-46a3-a82d-7f853948afc5.jpg"
    }     
];
const post = [
    {
        id: 1,
        name: 'Red Dragon',
        year: '2002',
        genre: 'Crime, Drama, Thriller',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-009d50bd999/HBON-AAQDE-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-9108656.jpg',
        rating: ' 7.2 / 10',
        summary: "Filmen är baserad på Thomas Harris roman Röda draken. Det är den sista av de tre filmer där kannibalen Dr Hannibal Lecter spelas av Sir Anthony Hopkins. Den utspelar sig dock kronologiskt före hans första film När lammen tystnar. I denna film tar Graham hjälp av Lecter, som avtjänar sitt livstidsstraff i fängelse, för att spåra och fånga tandfen, spelad av Ralph Fiennes. En tidigare gjord film baserad på samma roman är Manhunter från 1986.",
        trailer: "HxDb6Z62nqk",
        director: " Brett Ratner",
        poster: "https://static.hbonordic.com/1f10ced-009d50bd999/HBON-AAQDE-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-9108651.jpg"

    },
    {
        id: 2,
        name: 'Shutter Island',
        year: '2010',
        genre: ' Mystery, Thriller ',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-00b5e8ce49d/HBON-AAWBU-000-PGM-01-01-2500-HD-169-SR-1920x1080-50000-11534525.jpg',
        rating: '8.1 / 10',
        summary: "En kvinna som begått mord har rymt från ett mentalsjukhus beläget på ön Shutter Island. Rymlingen antas gömma sig på ön, vilket gör att kriminalkommissarie Teddy Daniels skickas dit för att hitta henne, men han blir istället indragen i en livsfarlig katt- och råttalek och det visar sig snart att sjukhuset bär på mycket mörka hemligheter.",
        trailer: "5iaYLCiq5RM",
        director: "Martin Scorsese",
        poster: "https://static.hbonordic.com/1f10ced-00b5e8ce49d/HBON-AAWBU-000-PGM-01-01-2500-HD-169-SR-1920x1080-50000-11534516.jpg"
    },
    {
        id: 3,
        name: 'American Gangster',
        year: '2007',
        genre: 'Drama',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-009fdffb992/HBON-AAQGL-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-9216716.jpg',
        rating: ' 7.8 / 10',
        summary: "Filmen berättar den sanna historien om Frank Lucas (Denzel Washington), en småtjuv från Harlem som under 1970-talet tar sig upp genom gangsterhierarkin och skapar sig ett brottsimperium. Hans namn når kultstatus innan han slutligen stoppas av en ensam snut, vars enda drivkraft är att rensa gatorna från brott. Den hårdkokte snuten Richie Roberts (Russell Crowe) bestämmer sig dock för att hitta Lucas och få honom fälld. Roberts jakt på Lucas utvecklas till en hjärnornas kamp mellan två män på varsin sida om lagen.",
        trailer: 'BV_nssS6Zkg',
        director: "Ridley Scott",
        poster: "https://static.hbonordic.com/1f10ced-009fdffb992/HBON-AAQGL-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-9216715.jpg"
    },
    {
        id: 4,
        name: 'Catch Me If You Can',
        year: '2002',
        genre: 'Drama',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-00b5e7e9465/HBON-AAWBG-000-PGM-01-01-2500-HD-169-ST-1920x1080-50000-11657386.jpg',
        rating: '8.0 / 10',
        summary: "16-årige Frank Abagnale Jr. tvingas tillsammans med familjen flytta till en mindre bostad på grund av sin fars pengabekymmer, och när föräldrarna skiljer sig och faderns problem med pengar fortsätter rymmer Frank och lovar återställa allt, såväl faderns finanser som föräldrarnas förhållande. Genom en ovanlig förmåga att få andra att tro på honom i alla situationer. Även om han inte har rätt lyckas han lura alla att tro att han är läkare, pilot och advokat innan han fyllt 18 år. Agenten Carl Hanratty från den federala polismyndigheten FBI försöker spåra honom, men han är till synes alltid ett steg efter.",
        trailer: "71rDQ7z4eFg",
        director: "Steven Spielberg",
        poster: "https://static.hbonordic.com/1f10ced-00b5e7e9465/HBON-AAWBG-000-PGM-01-01-2500-HD-169-ST-1920x1080-50000-11657386.jpg"
    },
    {
        id: 5,
        name: 'Changeling',
        year: '2008',
        genre: 'Biography, Crime, Drama',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-009fe001088/HBON-AAQGM-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-9212484.jpg',
        rating: '7.8 / 10',
        summary: "Christine Collins är en ensamstående mor med sin son Walter i det sena 1920-talets Los Angeles. Hon älskar sin son över allt annat och de har det bra tillsammans. En dag tvingas hon arbeta extra och tvingas lämna Walter hemma en eftermiddag, när hon kommer hem är Walter spårlöst försvunnen. Stadens polis, som kämpar med hårda rykten om korruption, börjar leta efter pojken och efter fem månader av ovisshet får Christine veta att man funnit Walter vid liv. Det visar sig snart bara vara ett problem, det är inte hennes son polisen har hittat. ",
        trailer: "PmfjureC-5I",
        director: "Clint Eastwood",
        poster:"https://static.hbonordic.com/1f10ced-009fe001088/HBON-AAQGM-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-9212478.jpg"
    },
    {
        id: 6,
        name: 'All Good Things',
        year: '2010',
        genre: 'Crime, Drama, Mystery ',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-009433a7b32/HBON-AAPDE-000-PGM-01-01-2500-HD-169-ST-1920x1080-50-8068696.jpg',
        rating: '6.3 / 10',
        summary: "Denna film av Andrew Jarecki baseras på berättelsen om Robert Durst, ättling till den förmögna Durst-släkten, som misstänktes men aldrig åtalades för mordet på hustrun Kathie som försvann 1982.",
        trailer: "B7_VwoZKPRM",
        director: "Andrew Jarecki",
        poster:"https://static.hbonordic.com/1f10ced-009433a7b32/HBON-AAPDE-000-PGM-01-01-2500-HD-169-ST-1920x1080-50-8068700.jpg"
    },
    {
        id: 7,
        name: 'Public Enemies',
        year: '2009',
        genre: 'Biography, Crime, Drama',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-009fe07606f/HBON-AAQGT-000-PGM-01-02-2500-HD-169-SR-1920x1080-50-9219430.jpg',
        rating: '7 / 10',
        summary: "Filmen utspelar sig under Den stora depressionen och handlar om den verklighetsbaserade historien om FBI-agenten Melvin Purvis (Christian Bale) att försöka stoppa brottslingarna John Dillinger (Johnny Depp), Baby Face Nelson (Stephen Graham) och Pretty Boy Floyd (Channing Tatum). I rollen som Dillingers flickvän Billie Frechette ses Marion Cotillard och Giovanni Ribisi spelar Alvin Karpis",
        trailer: "Q8xOgO7_eT8",
        director: "Michael Mann",
        poster: "https://static.hbonordic.com/1f10ced-009fe07606f/HBON-AAQGT-000-PGM-01-02-2500-HD-169-SR-1920x1080-50-9219423.jpg"
    },
    {
        id: 8,
        name: 'The Duchess',
        year: '2009',
        genre: ' Biography, Drama, History ',
        country: 'USA',
        media: 'https://static.hbonordic.com/1f10ced-00915255c97/HBON-AAPDR-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-7851831.jpg',
        rating: '9.5 / 10',
        summary: "Hertigen av Devonshire (Ralph Fiennes) kommer på besök till Lady Spencer (Charlotte Rampling) och hennes dotter Georgiana (Keira Knightley) med en uppgift: att avla en arvinge. Lady Spencer hävdar att damerna i deras släkt alltid föder pojkar och föreslår hertigen att gifta sig med Georgiana. Upplysningen blir det avgörande för hertigen, som gör Georgiana till hertiginna.",
        trailer: "FFg-oduezDs",
        director: "Saul Dibb",
        poster: "https://static.hbonordic.com/1f10ced-00915255c97/HBON-AAPDR-000-PGM-01-01-2500-HD-169-SR-1920x1080-50-7851829.jpg"
    }     
];

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/movies" component={Movie} post={post}/>
            <Route path="/movies/:id" component={MovieDetail}  post={post}/>
            <Route path="/series" component={Serial} data={data}/>
            <Route path="/series/:id" component={SerialDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);