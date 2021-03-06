import { PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'
import { EmailPreferences } from './interfaces'

const emailPreferencesReducers = (state: EmailPreferences = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, emailPreferences: action.payload.emailPreferences }
    default:
      return state
  }
}

export default emailPreferencesReducers
