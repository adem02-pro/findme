export interface User {
    id?: string,
    firstname: string,
    lastname: string,
    age: number,
    username: string,
    email: string
    pwd: string,
    path?: string,
    reseaux?: Reseaux,
    description?: string
}

export interface Reseaux {
  facebook?: {value: string, reseau: string},
  instagram?: {value: string, reseau: string},
  mail?: {value: string, reseau: string},
  twitter?: {value: string, reseau: string},
  snapchat?: {value: string, reseau: string},
  youtube?: {value: string, reseau: string}
}
