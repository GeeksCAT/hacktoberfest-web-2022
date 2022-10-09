import { IOrganizer, ISupporter, ISponsor, IEvent } from './types'

export const weWillHave = ['Marató de PRs', 'Xerrades i tallers', 'Lightning talks']
export const eventBriteURL = 'https://www.eventbrite.es/e/entradas-festa-opensource-girona-2021-geekscat-1878194520370'
export const startTime = '9:30h'
export const dueTime = '19h'

export const organizers: IOrganizer[] = [
  {
    logo: 'logo-pythongirona.png',
    name: 'Python Girona',
    web: 'https://pythongirona.cat/'
  },
  {
    logo: 'logo-geekscat.png',
    name: 'Geeks.Cat',
    web: 'https://geekscat.org/'
  }
]

export const supporters: ISupporter[] = [
  {
    logo: 'ajuntament.png',
    name: 'Ajuntament de Girona',
    web: 'https://web.girona.cat/'
  },
  {
    logo: 'pycamp.png',
    name: 'PyCamp ES',
    web: 'https://pycamp.es/'
  },
  {
    logo: 'logo-geekscat.png',
    name: 'PyLadies ES',
    web: 'https://pyladies.org/'
  }
]

export const sponsors: ISponsor[] = [
  {
    logo: 'photopills.png',
    name: 'PhotoPillsx',
    web: 'https://www.photopills.com/es'
  },
  {
    logo: 'apsl.png',
    name: 'APSL',
    web: 'https://apsl.tech/en/'
  },
  {
    logo: 'fundcraft.png',
    name: 'FundCraft',
    web: 'https://www.fundcraft.lu/'
  },
  {
    logo: 'gisce.png',
    name: 'GISCE',
    web: 'https://gisce.net/es/'
  },
  {
    logo: 'kave_home.png',
    name: 'Kave Home',
    web: 'https://kavehome.com/es/es/'
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
