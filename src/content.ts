import { ILogo, IEvent } from './types'

export const weWillHave = ['Marató de PRs', 'Xerrades i tallers', 'Lightning talks']
export const eventBriteURL = 'https://www.eventbrite.es/e/entradas-festa-opensource-girona-2022-geekscat-439113368907'
export const startTime = '9:30h'
export const dueTime = '19h'
export const eventDate = '23/10/2022'

export const organizers: ILogo[] = [
  {
    logo: 'logo-geekscat.png',
    name: 'Geeks.Cat',
    web: 'https://geekscat.org/'
  },
  {
    logo: 'logo-pythongirona.png',
    name: 'Python Girona',
    web: 'https://pythongirona.cat/'
  }
]

export const supporters: ILogo[] = [
  {
    logo: 'ajuntament.png',
    name: 'Ajuntament de Girona',
    web: 'https://web.girona.cat/'
  },
  {
    logo: 'pyladies.png',
    name: 'PyLadies ES',
    web: 'https://pyladies.org/'
  },
  {
    logo: 'pycamp.png',
    name: 'PyCamp ES',
    web: 'https://pycamp.es/'
  }
]

export const sponsors: ILogo[] = [
  {
    logo: 'photopills.png',
    name: 'PhotoPills',
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
