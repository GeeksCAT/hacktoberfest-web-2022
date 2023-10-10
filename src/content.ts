import { ILogo, IEvent, ISpeaker } from './types'

export const weWillHave = ['Marató de PRs', 'Xerrades i tallers', 'Lightning talks']
export const eventBriteURL =
  'https://www.eventbrite.es/e/entradas-festa-opensource-girona-2023-geekscat-gdg-718595698077'
export const startTime = '9:30h'
export const dueTime = '19h'
export const eventDate = 'dissabte 21/10/2023'

export const organizers: ILogo[] = [
  {
    logo: 'logo-geekscat.png',
    name: 'Geeks.Cat',
    web: 'https://geekscat.org/'
  },
  {
    logo: 'gdg_girona.png',
    name: 'Google Dev Group Girona',
    web: 'https://gdg.community.dev/gdg-girona'
  }
]

export const supporters: ILogo[] = [
  {
    logo: 'ajuntament.png',
    name: 'Ajuntament de Girona',
    web: 'https://web.girona.cat/',
    title: 'finançament'
  },
  {
    logo: 'assoc-catosfera-logo-2019.png',
    name: 'Catosfera',
    web: 'https://catosfera.cat/',
    title: 'espais i logística'
  }
]

export const sponsors: ILogo[] = [
  {
    logo: 'apsl.png',
    name: 'APSL',
    web: 'https://apsl.tech/es/'
  },
  {
    logo: 'gisce.png',
    name: 'GISCE',
    web: 'https://gisce.net/es/'
  },
  {
    logo: 'fundcraft.png',
    name: 'FundCraft',
    web: 'https://www.fundcraft.lu/'
  },
  {
    logo: 'photopills.png',
    name: 'PhotoPills',
    web: 'https://www.photopills.com/es'
  },
  {
    logo: 'kave_home.png',
    name: 'Kave Home',
    web: 'https://kavehome.com/es/ca/'
  },
  {
    logo: 'clouding.png',
    name: 'Clouding',
    web: 'https://clouding.io/'
  },
  {
    logo: 'dobleseo.png',
    name: 'Dobleseo',
    web: 'https://dobleseo.pro'
  }
]

export const diary: IEvent[] = [
  {
    hour: '9:30',
    rooms: [
      {
        name: 'Pati',
        event: 'Obertura de portes',
        link: null
      }
    ]
  },
  {
    hour: '11:00',
    rooms: [
      {
        name: 'Pati',
        event: 'Home Assistant',
        link: null
      },
      {
        name: 'Claustre',
        event: 'Marató PR',
        link: null
      }
    ]
  }
]

export const speakers: ISpeaker[] = [
  {
    name: 'Gessi Paniagua',
    twitter: 'gessipani',
    talk: 'Taller introducció a Django',
    summary: [
      'Vols aprendre a programar i crear les teves pròpies aplicacions web?',
      "Durant el taller aprendrem com emprar el <a class='text-third' href='https://www.djangoproject.com/' target='_blank'>framework web Django</a> seguint la filosofia Django Girls: petits grups liderats per una mentora que segueixen el tutorial d'iniciació a Django."
    ],
    bio: [
      'Miembro de PyLadies España, Python España y co-fundadora de LinuxChixAr, actualmente trabaja en Mática Partners como Data Engineer.'
    ]
  },
  {
    name: 'Pau Boix',
    talk: "Control de l'automatització de tasques recurrents emprant Airflow",
    summary: [
      '<a class="text-third" target="_blank" href="https://airflow.apache.org/">Apache Airflow</a> és una plataforma open source de gestió de fluxes de treball.',
      "A la presentació veurem els conceptes bàsics d'Airflow i com podem desenvolupar el nostre primer DAG."
    ],
    bio: [
      "En Pau s'acaba de graduar com a enginyer infromàtic per la UdG i porta més d'un any treballant a Som Energia on ha realitzat el seu TFG centrat en l'implantació d'Apache Airflow a la cooperativa."
    ]
  },
  {
    name: 'Pablo Ridolfi',
    twitter: 'pabloridolfi',
    talk: 'ESP32 emprant C + SSL',
    summary: [
      'Obtén el máximo rendimiento de tu ESP32: desarrolla aplicaciones en lenguaje C con el <a class="text-third" target="_blank" href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/">framework ESP-IDF</a>.',
      'La familia de microcontroladores ESP32 se ha vuelto un estándar de facto para el desarrollo de hardware IoT gracias a sus prestaciones de conectividad y su compatibilidad con plataformas como Arduino y Micropython.',
      'En esta presentación abordaremos aspectos básicos del Espressif IoT Development Framework (ESP-IDF) que nos permitirá desarrollar aplicaciones en lenguaje C buscando obtener el mayor rendimiento de esta plataforma de hardware. Finalmente realizaremos un ejercicio de conectividad SSL desde un dispositivo basado en ESP32 hacia un servidor en la nube.'
    ],
    bio: [
      'Pablo es ingeniero en electrónica (Universidad Tecnológica Nacional) y magíster en sistemas embebidos (Universidad de Buenos Aires). Actualmente es lead field application engineer en Satellogic, donde es responsable por maximizar las métricas de rendimiento, confiabilidad y calidad de la flota de satélites LEO de la compañía.'
    ]
  },
  {
    name: 'Oriol Piera',
    twitter: 'cortsenc',
    talk: "Introducció a Odoo, l'ERP de Python",
    summary: [
      "Durant la xerrada es presentarà <a class='text-third' target='blank' href='https://www.odoo.com/'>Odoo</a> i veurem com podem fer el nostre primer mòdul."
    ],
    bio: []
  },
  {
    name: 'Jorge Salazar',
    linkedin: 'jorgesalazarm',
    talk: 'OS datawarehouse',
    summary: [
      'How to create a highly operational Data Warehouse with Open-Source tools through a layered architecture that allows responding to the business needs that Data Scientists and business intelligence specialists solve.',
      'Possible Big Data and Data Lake strategies. Proposal for the development cycle of solutions with Machine Learning.'
    ],
    bio: [
      'Computer engineer Jorge Salazar Marrero with more than 13 years of experience in Data environments. I worked as Team Lead of a team of Data Analysts at Hewlett Packard Enterprise and I currently work as Team Lead of the Kave Home S.L. Data Team.'
    ]
  },
  {
    name: 'Israel Saeta',
    // linkedin: 'dukebody',
    twitter: 'dukebody',
    talk: 'Crea la teva web amb un Static Site Generator',
    summary: [
      "En els últims anys s'han anat popularitzant els Static Site Generators (SSG) com a una alternativa senzilla, eficient i segura per crear pàgines webs.",
      'En aquesta xerrada explicarem els principis bàsics i mostrarem exemples en alguns dels sistemes de SSG més populars.'
    ],
    bio: [
      'Apassionat de la informàtica des de petitet. Vaig aprendre a programar amb recursos gratuïts i llibres. Actualment treballo a TravelPerk dirigint un equip i programant en Python i una mica en JavaScript quan tinc temps :)',
      'També he col·laborat en múltiples comunitats relacionades amb Python com PyBCN i Python España.'
    ]
  }
]
