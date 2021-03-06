export enum PROFILE_STEPS {
  LOAD = 'LOAD',
  LOADING = 'LOADING',
  UPDATING = 'UPDATING',
  LOADING_SUCCESS = 'LOADING_SUCCESS',
  LOADING_FAILURE = 'LOADING_FAILURE',
  UPDATING_SUCCESS = 'UPDATING_SUCCESS',
  UPDATING_FAILURE = 'UPDATING_FAILURE',
}

export enum HOUSEHOLD_ROLE {
  OWNER = 'OWNER',
  APPROVING_MEMEBER = 'APPROVING_MEMBER',
  MEMEBER = 'MEMBER',
}

export interface HouseholdMember {
  firstName?: string
  lastName?: string
  avatar?: string
  phoneNumber?: string
  email: string
  password?: string
  role: HOUSEHOLD_ROLE
}
