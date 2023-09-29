export interface ILogo {
  logo: string
  name: string
  web: string
  title?: string
}

export interface IMenuOption {
  name: string
  ref: string
}

export interface IEventRoom {
  name: string
  event: string
  link: string | null
}

export interface IEvent {
  hour: string
  rooms: IEventRoom[]
}

export interface ISpeaker {
  name: string
  talk: string
  summary: string[]
  bio: string[]
  twitter?: string
  linkedin?: string
}
