export type Gender = 'male' | 'female' | 'non_binary' | 'other' | 'not_say' | null

export interface ICredentials {
  email: string
  password: string
}

export interface IRegistration {
  email: string
  password: string
  profile_name: string
  gender: Gender
}
