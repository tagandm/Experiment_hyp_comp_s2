
// Initialize jsPsych -----------------------------------------------------------------
var jsPsych = initJsPsych({
});

// browser exclusion ------------------------------------------------------------------
var browser_check = {
  type: jsPsychBrowserCheck,
  inclusion_function: (data) => {
    return data.browser === 'firefox'|| data.browser === 'chrome' && data.mobile === false
  },
  exclusion_message: (data) => {
    if(data.mobile){
      return "p>Vous devez utiliser un ordinateur pour participer à cette étude.</p>";
    } else if (data.browser !== 'firefox' && data.browser !== 'chrome'){
      return "<p>Vous devez utiliser Chrome ou Firefox pour participer à cette étude. </p>"+
             "<p>Si vous voulez participer, veuillez copier le lien de l'expérience avec un navigateur de recherche compatible</p>";
    }
  }
}

// Create Timeline --------------------------------------------------------------------------
var timeline = [];

// Welcome
var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Chères participantes et participants,</p>" +
  "<p class='instructions'>Cette étude vous prendra entre 15 et 20 minutes." +
  "<p class='instructions'>Vous pouvez vous retirer de l'étude à tout moment. Vos réponses sont anonymes et confidentielles. " +
  "Seules les tendances statistiques des réponses nous intéressent et il ne sera pas possible d'identifier les participantes et participants de l'étude. </p>" +
  "<p class='instructions'>En cliquant sur \u0022Continuer\u0022, vous donnez votre accord pour participer à cette étude.</p>",
  choices: ['Continuer']
};

// Instruction Scenario
var scenario_instruction_without_load = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class= 'instructions_questionnary'>Vous allez maintenant réaliser une tâche durant laquelle vous allez lire de courtes descriptions d'événements. " +
  "Pour chacun de ces événements, nous vous demandons de juger si, selon vous, ces événements ont bel et bien eu lieu.</p>",
  choices: ['Continuer']
};

var scenario_instruction_with_load = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class= 'instructions_questionnary'>Vous allez maintenant réaliser une tâche durant laquelle vous allez lire de courtes descriptions d'événements. " +
  "Pour chacun de ces événements, nous vous demandons de juger si, selon vous, ces événements ont bel et bien eu lieu.</p>" +
  "<p class= 'instructions_questionnary'>Avant chaque description, vous allez voir une grille que vous devez retenir pendant la lecture de l'évènement qui suit. " +
  "Nous vous demanderons de la rappeler juste après en choississant entre 4 grilles différentes.<p/>" +
  "<p class= 'instructions_questionnary'>Il est important que vous mémorisiez les matrices avec précision, tout en lisant et en répondant aux déclarations.<p/>",
  choices: ['Continuer']
};

var matrix =
  [
    "jspsych/img/1.png", "jspsych/img/2.png", "jspsych/img/3.png", "jspsych/img/4.png", "jspsych/img/5.png",
    "jspsych/img/6.png", "jspsych/img/7.png", "jspsych/img/8.png", "jspsych/img/9.png", "jspsych/img/10.png",
    "jspsych/img/11.png", "jspsych/img/12.png", "jspsych/img/13.png", "jspsych/img/14.png", "jspsych/img/15.png",
    "jspsych/img/16.png", "jspsych/img/17.png", "jspsych/img/18.png", "jspsych/img/19.png", "jspsych/img/20.png",
    "jspsych/img/21.png", "jspsych/img/22.png", "jspsych/img/23.png", "jspsych/img/24.png", "jspsych/img/25.png",
    "jspsych/img/26.png", "jspsych/img/27.png", "jspsych/img/28.png", "jspsych/img/29.png", "jspsych/img/30.png",
    "jspsych/img/31.png", "jspsych/img/32.png", "jspsych/img/33.png", "jspsych/img/34.png", "jspsych/img/35.png",
    "jspsych/img/36.png", "jspsych/img/37.png", "jspsych/img/38.png", "jspsych/img/39.png", "jspsych/img/40.png",
    "jspsych/img/41.png", "jspsych/img/42.png", "jspsych/img/43.png", "jspsych/img/44.png", "jspsych/img/45.png",
    "jspsych/img/46.png", "jspsych/img/47.png", "jspsych/img/48.png", "jspsych/img/49.png", "jspsych/img/50.png",
    "jspsych/img/51.png", "jspsych/img/52.png", "jspsych/img/53.png", "jspsych/img/54.png", "jspsych/img/55.png",
    "jspsych/img/56.png", "jspsych/img/57.png", "jspsych/img/58.png", "jspsych/img/59.png", "jspsych/img/60.png",
    "jspsych/img/61.png", "jspsych/img/62.png", "jspsych/img/63.png", "jspsych/img/64.png", "jspsych/img/65.png",
    "jspsych/img/66.png", "jspsych/img/67.png", "jspsych/img/68.png", "jspsych/img/69.png", "jspsych/img/70.png",
    "jspsych/img/71.png", "jspsych/img/72.png", "jspsych/img/73.png", "jspsych/img/74.png", "jspsych/img/75.png",
    "jspsych/img/76.png", "jspsych/img/77.png", "jspsych/img/78.png", "jspsych/img/79.png", "jspsych/img/80.png",
    "jspsych/img/81.png", "jspsych/img/82.png", "jspsych/img/83.png", "jspsych/img/84.png", "jspsych/img/85.png",
    "jspsych/img/86.png", "jspsych/img/87.png", "jspsych/img/88.png", "jspsych/img/89.png", "jspsych/img/90.png",
    "jspsych/img/91.png", "jspsych/img/92.png", "jspsych/img/93.png", "jspsych/img/94.png", "jspsych/img/95.png",
    "jspsych/img/96.png", "jspsych/img/97.png", "jspsych/img/98.png", "jspsych/img/99.png", "jspsych/img/100.png",
    "jspsych/img/101.png", "jspsych/img/102.png", "jspsych/img/103.png", "jspsych/img/104.png", "jspsych/img/105.png",
    "jspsych/img/106.png", "jspsych/img/107.png", "jspsych/img/108.png", "jspsych/img/109.png", "jspsych/img/110.png",
    "jspsych/img/111.png", "jspsych/img/112.png", "jspsych/img/113.png", "jspsych/img/114.png", "jspsych/img/115.png",
    "jspsych/img/116.png", "jspsych/img/117.png", "jspsych/img/118.png", "jspsych/img/119.png", "jspsych/img/120.png",
    "jspsych/img/121.png", "jspsych/img/122.png", "jspsych/img/123.png", "jspsych/img/124.png", "jspsych/img/125.png",
    "jspsych/img/126.png"
  ]

matrix = jsPsych.randomization.shuffle(matrix)
matrix = matrix.concat(matrix);

var preload = {
  type: jsPsychPreload,
  auto_preload: true,
  images: matrix
};

// Conspiracy
var scenario = [
  
 {number: "1",
  name: "tabacco",
  scenario: "Une entreprise spécialisée dans le tabac a effectué différentes études en laboratoire afin de connaître les effets du tabac sur la santé humaine. Les résultats ont révélé que le tabac était cancérigène. Cependant, l'entreprise ainsi que d'autres industries du tabac ont nié publiquement ces faits scientifiques en promouvant de faux bienfaits du tabac par des publicités mensongères soutenues par des médecins.",
  conspiracy: true},

  {number: "2",
  name: "snowden",
  scenario: "Les gouvernements américains et britanniques ont utilisé des programmes de surveillance de masse, leur donnant accès aux données des smartphones, incluant les contacts, les SMS, les conversations téléphoniques et les coordonnées GPS, ainsi qu'aux données de connexion Internet des utilisateurs. Ces pratiques reposaient sur des accords entre des entreprises majeures telles qu'Apple, Facebook, Google et Microsoft, et les agences de sécurité nationale américaines.",
  conspiracy: true},
  
  {number: "3",
  name: "watergate",
  scenario: "Le comité de réélection d'un président américain sortant a mené une vaste opération de sabotage politique, impliquant notamment des écoutes illégales, des vols de documents et des actes d'intimidation contre leurs adversaires politiques. Le président était au courant des opérations et a tenté de les couvrir en dissimulant des faits et en faisant obstruction à l'enquête.",
  conspiracy: true},
   
  {number: "4",
  name: "sang_cont",
  scenario: "Alors qu'ils étaient au courant, certains médecins et hauts fonctionnaires français ont laissé des patients recevoir des transfusions sanguines infectées par le VIH, et ce, en se basant sur des considérations économiques et financières, au détriment des considérations morales et sanitaires.",
  conspiracy: true},
   
  {number: "5",
  name: "mk_ultra",
  scenario: "Les services secrets américains ont créé un programme secret visant à développer des techniques pour influencer et manipuler le comportement humain, notamment par le biais de drogues, d'hypnose ou de privation sensorielle. Les sujets des expériences, recrutés sans leur consentement, étaient souvent des patients d'hôpitaux psychiatriques, des prisonniers, des prostituées ou des soldats.",
  conspiracy: true},
   
  {number: "6",
  name: "irangate",
  scenario: "Bien que le gouvernement américain ait émis une interdiction sur la vente d'armes à l'Iran, certains membres du gouvernement ont clandestinement effectué des transactions d'armement avec ce pays en échange de la libération d'otages américains. L'argent provenant de ces ventes a ensuite été détourné pour financer un groupe rebelle menant des opérations de guérilla en Amérique du Sud.",
  conspiracy: true},
   
  {number: "7",
  name: "dieselgate",
  scenario: "Une entreprise automobile a cherché à contourner les normes environnementales à l'aide d'un logiciel truquant le calcul des émissions d'une partie de ses véhicules. Ce logiciel manipulait les tests d'émissions pour faire paraître les véhicules moins polluants qu'ils ne l'étaient réellement.",
  conspiracy: true},
   
  {number: "8",
  name: "adm_Irak",
  scenario: "Le gouvernement américain a fourni de fausses preuves sur la présence d'armes de destruction massive, notamment nucléaires, chimiques et biologiques, pour justifier une intervention militaire en Irak.",
  conspiracy: true},
   
  {number: "9",
  name: "campagne_russe",
  scenario: "Durant des élections démocratiques en Allemagne, aux Etats-Unis, en France, aux Pays-Bas et au Royaume-Uni, des acteurs liés à la Russie ont entrepris des campagnes de manipulation de l'information dans le but de polariser les débats et influencer les résultats des élections. Ces activités comprenaient notamment du piratage informatique et de la diffusion ciblée de désinformation via les médias sociaux.",
  conspiracy: true},
   
  {number: "10",
  name: "panama",
  scenario: "Les dirigeants de plusieurs pays européens, dont la Russie, l'Ukraine et l'Islande, ont été mis en cause pour avoir dissimulé des activités financières à travers l'utilisation de sociétés écrans, souvent dans le but d'évasion fiscale.",
  conspiracy: true},
  
  {number: "11",
  name: "cambridge_analytica",
  scenario: "Une société britannique de conseil politique a illégalement obtenu et exploité des données personnelles d'utilisateurs de réseaux sociaux à des fins de manipulation et d'influence politique. Ces données ont été utilisées pour créer des profils psychologiques et comportementaux afin de créer des publicités politiques personnalisées durant les débats sur le Brexit.",
  conspiracy: true},
   
  {number: "12",
  name: "hacking_team",
  scenario: "Une entreprise de sécurité informatique italienne s'est révélée être spécialisée dans le développement et la vente de logiciels de surveillance à des gouvernements et à des agences de renseignements de plusieurs pays tel que l'Arabie Saoudite, l'Egypte, les Emirats arabes unis, le Maroc, le Soudan ou le Kazakhstan.",
  conspiracy: true},
   
  {number: "13",
  name: "fifa",
  scenario: "Dans le monde du football, un vaste réseau de corruption à l'échelle mondiale impliquait des dirigeants de la FIFA, des sociétés de marketing sportif, des médias et des fonctionnaires gouvernementaux. Des actes de corruption, tels que des pots-de-vin, des commissions illégales et des fraudes dans divers domaines ont été perpétrés. Des millions de dollars ont été secrètement échangés dans le but d'influencer des décisions politiques et de s'enrichir.",
  conspiracy: true},
   
  {number: "14",
  name: "tonkin",
  scenario: "Afin de justifier l'escalade militaire dans la guerre du Vietnam, l'administration américaine a prétendu qu'il y avait eu des attaques contre des navires de guerre américains par la marine nord-vietnamienne. Ces attaques n'ont en réalité jamais eu lieu.",
  conspiracy: true},
   
  {number: "15",
  name: "tuskeegee",
  scenario: "Lors d'une série d'études visant à comprendre l'évolution naturelle de la syphilis, le service de santé publique des Etats-Unis et une de ses universités ont caché à des hommes afro-américains leur diagnostic réel et les ont amenés à croire qu'ils recevaient des soins médicaux pour leurs problèmes de santé alors qu'ils étaient en réalité laissés sans traitement, même après la découverte d'un remède efficace.",
  conspiracy: true},
   
  {number: "16",
  name: "lavon",
  scenario: "Les services de renseignement israéliens ont tenté de commettre un attentat à la bombe contre des installations occidentales en Egypte et de le faire passer pour des attaques venant d'extrémistes égyptiens. L'objectif était de discréditer le gouvernement égyptien et de pousser les puissances occidentales à maintenir leur soutien à Israël.",
  conspiracy: true},
   
  {number: "17",
  name: "ajax",
  scenario: "Les services secrets américains et britanniques ont orchestré des actions clandestines, de la propagande, des manifestations et des manipulations politiques pour favoriser l'émergence d'un coup d'Etat contre le premier ministre iranien qui cherchait à nationaliser l'industrie pétrolière du pays. Leur objectif était de préserver leurs intérêts économiques et géopolitiques en Iran.",
  conspiracy: true},
   
  {number: "18",
  name: "paperclip",
  scenario: "Les Etats-Unis ont intégré secrètement des scientifiques liés au parti nazi dans des programmes de recherche et de développement militaires et scientifiques, leur permettant d'échapper aux poursuites et de bénéficier de l'immunité en échange de leurs expertises.",
  conspiracy: true},
   
  {number: "19",
  name: "condor",
  scenario: "Plusieurs pays d'Amérique latine, notamment l'Argentine, le Chili, le Paraguay, l'Uruguay et le Brésil ont coordonné leurs efforts pour mettre en œuvre des actions transfrontalières de répression politique incluant la surveillance, l'enlèvement, la torture et l'assassinat de dissidents politiques et militants soupçonnés de représenter une menace pour les régimes en place.",
  conspiracy: true},
   
  {number: "20",
  name: "hormone",
  scenario: "Des hormones de croissance contaminées par des substances délétères pour le cerveau ont été commercialisées alors que les laboratoires et autorités sanitaires français connaissaient les risques de contamination. Les entreprises pharmaceutiques les commercialisant ont choisi de ne pas divulguer ces informations sur la contamination pour des raisons économiques.",
  conspiracy: true},
   
  {number: "21",
  name: "indus_sucre",
  scenario: "L'industrie sucrière a financé des recherches visant à minimiser les liens entre le sucre et les problèmes de santé. Ces études étaient conçues pour mettre en avant d'autres facteurs, tels que les graisses saturées, comme principaux contributeurs aux maladies cardiaques.",
  conspiracy: true},
   
  {number: "22",
  name: "indus_climat",
  scenario: "Certaines grandes entreprises pétrolières ont mené des campagnes de désinformation pour semer le doute sur la réalité du changement climatique et sur le rôle des combustibles fossiles dans ce phénomène. Ces entreprises ont délibérément minimisé les effets du changement climatique et exercé des pressions pour bloquer les politiques de lutte contre le réchauffement climatique.",
  conspiracy: true},
  
  {number: "23",
  name: "rainbow_warrior",
  scenario: "Les services de renseignement français ont organisé un attentat à la bombe contre un navire de Greenpeace pour l'empêcher de poursuivre ses activités contre les essais nucléaires français dans le Pacifique.",
  conspiracy: true},
  
  {number: "24",
  name: "sterilization",
  scenario: "Le gouvernement péruvien a mené un programme de stérilisation forcée de milliers de femmes indigènes pour contrôler les naissances de cette population.",
  conspiracy: true},
  
  {number: "25",
  name: "chaos",
  scenario: "Les services secrets américains ont mené une opération secrète pour surveiller et infiltrer les groupes et mouvements anti-gouvernementaux impliqués dans les protestations contre la guerre du Vietnam.",
  conspiracy: true},
  
  {number: "26",
  name: "afrikaner_broed",
  scenario: "Une organisation secrète sud-africaine composée de descendants de colons néerlandais a participé au maintien et à la promotion du système de ségrégation raciale de l'apartheid.",
  conspiracy: true},
  
  {number: "27",
  name: "dsk",
  scenario: "Des opposants politiques à un candidat à la présidentielle français ont fait arrêter ce dernier pour des agressions sexuelles qu'il n'avait pas commises dans le but de le discréditer dans sa course à la présidence.",
  conspiracy: false},
  
  {number: "28",
  name: "somme",
  scenario: "Les services techniques de l'Etat français ont délibérément provoqué l'inondation de la vallée de la Somme en alimentant ce fleuve avec l'eau de la Seine. Cette action a causé d'importants dommages matériels aux populations locales au profit de la protection de Paris, elle aussi soumise à la montée des eaux.",
  conspiracy: false},
  
  {number: "29",
  name: "kennedy",
  scenario: "Les services secrets américains ont orchestré l'assassinat d'un président des Etats-Unis en raison de désaccords avec ce dernier, notamment concernant des opérations militaires.",
  conspiracy: false},
  
  {number: "30",
  name: "grand_remp",
  scenario: "Certains politiques et intellectuels français encouragent et planifient un remplacement de la population française et européenne par des populations originaires d'Afrique, et ce, dans le but —entre autres— de déconstruire l'identité française.",
  conspiracy: false},
   
  {number: "31",
  name: "franc_maçon",
  scenario: "Des membres de loges maçonniques appartenant à l'élite intellectuelle et politique ont joué un rôle prépondérant dans la planification et l'exécution de la Révolution française. Ils ont renversé la monarchie et instauré une république pour promouvoir leurs intérêts économiques et consolider leur pouvoir politique.",
  conspiracy: false},
   
  {number: "32",
  name: "nouvel_ordre_mondial",
  scenario: "Des riches et influentes familles veulent créer un gouvernement mondial en unifiant toutes les nations sous un contrôle économique et médiatique centralisé afin d'instaurer un état policier mondial.",
  conspiracy: false},
   
  {number: "33",
  name: "cgmt_cl",
  scenario: "Les gouvernements et entreprises inventent des données sur le changement climatique et les utilisent comme prétexte pour introduire de nouvelles taxes et réglementations, afin d'accroître leur contrôle sur l'économie.",
  conspiracy: false},
   
  {number: "34",
  name: "sida",
  scenario: "Les pays occidentaux ont créé et propagé le virus du SIDA afin de nuire à des régions politiquement instables, des pays en voie de développement et des régions porteuses d'enjeux stratégiques. Le continent africain a été particulièrement touché par cette pratique et l'affaiblissement délibéré des populations locales a contribué à les rendre dépendantes des groupes pharmaceutiques.",
  conspiracy: false},
   
  {number: "35",
  name: "ben_laden",
  scenario: "Les services secrets américains ont mis en scène l'arrestation et la mort d'Oussama ben Laden, le fondateur d'Al-Qaïda décédé quelques années plus tôt. Cette action médiatique a permis d'accroître la popularité du président en place.",
  conspiracy: false},
   
  {number: "36",
  name: "chemtrail",
  scenario: "Les traînées laissées par les avions contiennent des produits chimiques dont l'existence et la fonction sont cachées à la population par les gouvernements.",
  conspiracy: false},
   
  {number: "37",
  name: "indus_agro",
  scenario: "Les industries agroalimentaires empoisonnent délibérément la population pour permettre aux industries pharmaceutiques d'engendrer davantage de bénéfice.",
  conspiracy: false},
   
  {number: "38",
  name: "11_sept",
  scenario: "Conscient de la préparation d'un attentat terroriste par Al-Qaïda, le gouvernement américain a choisi de laisser les événements se dérouler délibérément afin d'engager en représailles des interventions militaires au Moyen-Orient et de défendre ainsi ses intérêts financiers.",
  conspiracy: false},
   
  {number: "39",
  name: "avion",
  scenario: "Le crash de l'avion dans lequel a péri l'ancien premier ministre polonais, ainsi que de nombreux membres du gouvernement, a été commandité par l'opposition politique, aidée par des agents russes.",
  conspiracy: false},
   
  {number: "40",
  name: "haarp",
  scenario: "Le gouvernement américain dispose d'une technologie secrète permettant de manipuler les conditions météorologiques et de provoquer des catastrophes naturelles telles que des tempêtes et des cyclones. Il s'en sert pour générer des crises et ainsi manipuler l'agenda médiatique et les flux migratoires.",
  conspiracy: false},
   
  {number: "41",
  name: "hydroxychloroquine",
  scenario: "Le gouvernement français a refusé de recommander l'hydroxychloroquine, pourtant efficace contre la COVID-19, comme traitement contre cette dernière pour permettre aux entreprises pharmaceutiques de développer des vaccins qui sont plus lucratifs que la hydroxychloroquine.",
  conspiracy: false},
   
  {number: "42",
  name: "labo_covid",
  scenario: "Le gouvernement chinois a créé le COVID-19 dans un laboratoire et l'a volontairement utilisé comme une arme biologique dans le but d'affaiblir économiquement et géopolitiquement les pays occidentaux.",
  conspiracy: false},
   
  {number: "43",
  name: "vaccin_hepatite_B",
  scenario: "En échange de pot-de-vin de la part de compagnies pharmaceutiques, certains scientifiques ont volontairement manipulé des données pour cacher le fait que le vaccin contre l'hépatite B pouvait favoriser le développement de la sclérose en plaques.",
  conspiracy: false},
   
  {number: "44",
  name: "lune",
  scenario: "Le gouvernement américain et la NASA ont mis en scène la réussite des missions Apollo (américaines) d'alunissage pour permettre une démonstration de force face aux Russes durant la guerre froide.",
  conspiracy: false}, 
   
  {number: "45",
  name: "ogm",
  scenario: "Certaines entreprises agroalimentaires ont continué de commercialiser des OGM (organismes génétiquement modifiés) après la publication d'un rapport scientifique démontrant leur dangerosité, et ce, pour des intérêts économiques.",
  conspiracy: false},
  
  {number: "46",
  name: "loterie",
  scenario: "Certains gouvernements et groupes secrets manipulent et truquent les numéros gagnants des loteries pour empêcher les personnes avec des revenus modestes de s'enrichir et pour récupérer une portion des fonds de la population.",
  conspiracy: false},
  
  {number: "47",
  name: "indus_boissons",
  scenario: "Des entreprises de boissons gazeuses mettent secrètement de la caféine dans leurs recettes pour créer une dépendance à l'égard des boissons qu'ils commercialisent et, à terme, engendrer davantage de bénéfices.",
  conspiracy: false},
  
  {number: "48",
  name: "tmps_reaction",
  scenario: "Certains médias truquent les réactions des personnalités publiques avec lesquelles ces médias ont des désaccords politiques lors de leurs apparitions à la télévision. L'objectif est de les faire paraître moins compétentes et, à terme, d'influencer l'opinion publique.",
  conspiracy: false},
  
  {number: "49",
  name: "juif",
  scenario: "Les intellectuels, politiques et hommes d'affaires juifs contrôlent les gouvernements, médias et institutions financières dans le but de favoriser les intérêts de la communauté juive.",
  conspiracy: false},
   
  {number: "50",
  name: "lady_diana",
  scenario: "A la demande de la famille royale, les services secrets britanniques ont assassiné une princesse de Galles et ont maquillé cela en accident de voiture.",
  conspiracy: false},
  
  {number: "51",
  name: "ondes_nocives",
  scenario: "Pour protéger leurs profits, les entreprises de télécommunication cachent des données scientifiques montrant que les ondes électromagnétiques émises par les appareils électroniques tels que les téléphones portables, les antennes de téléphonie mobile et les réseaux sans fil ont des effets néfastes sur la santé humaine (cancer, trouble du sommeil, etc.).",
  conspiracy: false},
  
  {number: "52",
  name: "lsd_cia",
  scenario: "Dans le cadre d'opérations secrètes, les services secrets américains ont intoxiqué les habitants d'un village français avec du LSD répandu par avion. Les services secrets se sont donc rendus coupables de la mort de 5 personnes et de l'internement de 50 autres.",
  conspiracy: false},
  ]

  for (let i = 0; i < scenario.length; i++) {
    scenario[i].correct_matrix = matrix[i * 4];
    scenario[i].filled_matrix_a = matrix[i * 4 + 1];
    scenario[i].filled_matrix_b = matrix[i * 4 + 2];
    scenario[i].filled_matrix_c = matrix[i * 4 + 3];
  
    scenario[i].matrix_order = [matrix[i * 4], matrix[i * 4 + 1], matrix[i * 4 + 2], matrix[i * 4 + 3]];
    scenario[i].matrix_order_randomization = jsPsych.randomization.shuffle(scenario[i].matrix_order);
  }

true_side = jsPsych.randomization.sampleWithoutReplacement(["vraie_right", "vraie_left"], 1);

var pre_scenario_categorization = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable ('correct_matrix'),
  stimulus_width: 250,
  trial_duration: 2000,
  choices: "NO_KEYS",
  prompt: "<p>Retenez la grille ci-dessus.</p>"
};

var scenario_categorization = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function(){
  return "<p class='instructions'>"+jsPsych.timelineVariable ('scenario')+"</p>" + "<p class='stimuli'>A votre avis, est-ce que cette affirmation est...<br></p>"},
  choices: function (){
    if (true_side == "vraie_right"){
      return ["fausse", "vraie"]
    } else {
      return ["vraie", "fausse"]
    }
  }
}

var post_scenario_categorization = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "Quelle est la grille présentée précédemment ?",
  choices: function() {
    var matrix_order_randomization = jsPsych.timelineVariable('matrix_order_randomization');
    return matrix_order_randomization
  },
  button_html: '<img src="%choice%" style="width: 250px; height: auto;"/>'
};

var feedback = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  stimulus: function() {
    var response = jsPsych.data.get().last().values()[0].response;
    var matrix_order_randomization = jsPsych.timelineVariable('matrix_order_randomization');
    var correct_matrix = jsPsych.timelineVariable('correct_matrix');
    var correct_choice = matrix_order_randomization.indexOf(correct_matrix);
    var is_correct = response === correct_choice;
    console.log(response);
    console.log(matrix_order_randomization);
    console.log(correct_matrix);
    console.log(correct_choice);
    console.log(is_correct);

    jsPsych.data.addDataToLastTrial({
      is_correct: is_correct
    });

    if (is_correct) {
      return "<p class='stimuli'>Votre réponse est correcte.</p>";
    } else {
      return `
      <p class='stimuli'>Votre réponse est incorrecte.</p>
      <p class='stimuli'>Veuillez faire plus attention aux grilles présentées.</p>`;
    }
  }
};

load_condition = jsPsych.randomization.sampleWithoutReplacement(["with_load", "without_load"], 1);

var scenario_instruction = {
  timeline: (function (){
    if (load_condition == "with_load"){
      return [scenario_instruction_with_load];
    } else {
      return [scenario_instruction_without_load]
    }
  }) ()
}

var scenario_procedure = {
  timeline: (function (){
  if (load_condition == "with_load"){
    return [pre_scenario_categorization, scenario_categorization, post_scenario_categorization, feedback];
  } else {
    return [scenario_categorization]
  }
})(),
  timeline_variables: scenario,
  randomize_order: true,
    data: {
      number: jsPsych.timelineVariable('number'),
      name: jsPsych.timelineVariable('name'),
      group: jsPsych.timelineVariable('conspiracy'),
      correct_matrix: jsPsych.timelineVariable('correct_matrix'), 
      filled_matrix_a: jsPsych.timelineVariable('filled_matrix_a'), 
      filled_matrix_b: jsPsych.timelineVariable('filled_matrix_b'), 
      filled_matrix_c: jsPsych.timelineVariable('filled_matrix_c'),
      matrix_order: jsPsych.timelineVariable('matrix_order_randomization')
    },
  }      

//Survey
var instruction_questionnary = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p class='instructions_questionnary'>Nous allons tout d'abord vous poser quelques questions sur votre vision du monde.</p>" ,
  choices: ['Continuer']
}

//Attention check 
var attention_check = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>Quand nous allons vous demandez d'indiquer votre couleur préférée, veuillez s'il vous plait écrire le mot \u0022baguette\u0022.</p>" +
              "<p class='instructions_questionnary'>En vous basant sur le texte ci-dessus, veuillez indiquer votre couleur préférée ?</p>",
      name: 'attention_check',
      required: true
    }
  ],
  button_label: 'Continuer'
}

///Questionnary CMQ
var cmq_label = [
  "<br>0%<br><br>Certain·e que non", 
  "<br>10%",
  "<br>20%",
  "<br>30%",
  "<br>40%",
  "<br>50%",
  "<br>60%",
  "<br>70%",
  "<br>80%", 
  "<br>90%", 
  "<br>100%<br><br>Certain·e que oui"
  ];
          
var cmq_questionnary = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnary'>Pour chacune de ces affirmations ci-dessous, veuillez cocher la case correspondant au chiffre approprié pour indiquer, selon vous, dans quelle mesure vous pensez que ces affirmations sont vraies.</p>"+ 
  "<p class='instructions_questionnary'>Il n'y a pas de réponse objectivement vraie ou fausse, nous sommes intéressés par vos opinions personnelles.</p>",
  questions: [
       {prompt: "Beaucoup de choses très importantes se produisent dans le monde dont le grand public n'est pas informé.", name: 'cmq_1', labels: cmq_label, required: true},
       {prompt: "Les politiciens ne nous disent généralement pas ce qui motive réellement leurs décisions.", name: 'cmq_2', labels: cmq_label, required: true},
       {prompt: "Les agences gouvernementales surveillent étroitement les citoyens.", name: 'cmq_3', labels: cmq_label, required: true},
       {prompt: "Des événements qui, en apparence, ne semblent pas avoir de lien sont souvent le résultat d'activités secrètes.", name: 'cmq_4', labels: cmq_label, required: true},
       {prompt: "Il existe des organisations secrètes qui influencent considérablement les décisions politiques.", name: 'cmq_5', labels: cmq_label, required: true},  
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}         
          
/// Demographic Questions
var instruction_demographic_questionnary = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions_questionnary'>Vous avez presque fini l'étude. Veuillez répondre à ces dernières questions.</p>",
  choices: ['Continuer']
}
          
var gender = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>Vous vous identifiez en tant que...</p>", 
      options: ["Femme", "Homme", "Autre"],
      name: 'gender',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}
          
var age = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>Quel âge avez-vous ? (en année, par exemple 32)</p>",
      placeholder: 'XX',
      name: 'age',
      required: true
    }
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}


var comment = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions'>Avez-vous des commentaires ?</p>",
      name: 'comment',
      rows: 5
    }
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

var waiting_demand = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Vous avez maintenant fini de répondre à l'ensemble des questions. " +
  "Après avoir cliquer sur continuer, les données vont être sauvegardées pendant le chargement.</p>",
  choices: ['Continuer']
}

var thanks = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
  "<p class='instructions'>Merci pour votre participant. " +
  "Vos réponses ont bien été enregistrées, vous pouvez rejoindre la personne en charge de l'étude pour récupérer votre crédit.",
  choices: "NO_KEYS"
}
          
//Save data ---------------------------------------------------------------------------------
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;
const experiment_id = "iuj0p36PHGEa";

jsPsych.data.addProperties({
  subject_id: subject_id,
})

var save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: experiment_id,
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
}

//timeline
timeline.push 
  (browser_check,
  preload,
  welcome,
  instruction_questionnary,
  cmq_questionnary,
  scenario_instruction,
  scenario_procedure,
  instruction_demographic_questionnary,
  attention_check,
  gender,
  age,
  comment,
  waiting_demand,
  save_data,
  thanks
  )

jsPsych.run(timeline)



  
 