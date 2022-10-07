import { IOrganizer, ISponsor } from './types'

export const year = new Date().getFullYear()
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

export const sponsors: ISponsor[] = [
  {
    logo: 'ajuntament.png',
    web: 'https://web.girona.cat/'
  },
  {
    logo: 'pycamp.png',
    web: 'https://pycamp.es/'
  },
  {
    logo: 'photopills.png',
    web: 'https://www.photopills.com/es'
  },
  {
    logo: 'apsl.png',
    web: 'https://apsl.tech/en/'
  },
  {
    logo: 'fundcraft.png',
    web: 'https://www.fundcraft.lu/'
  },
  {
    logo: 'gisce.png',
    web: 'https://gisce.net/es/'
  },
  {
    logo: 'kave_home.png',
    web: 'https://kavehome.com/es/es/'
  }
]
