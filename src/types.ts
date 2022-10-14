export interface ILogo {
  logo: string
  name: string
  web: string
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
  twitter: string
  summary: string
}
