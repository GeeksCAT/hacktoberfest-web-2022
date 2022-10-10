export interface IOrganization {
  logo: string
  name: string
  web: string
}

export interface IOrganizer extends IOrganization {}

export interface ISupporter extends IOrganization {}

export interface ISponsor extends IOrganization {}

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
