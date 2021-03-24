import { LOGIN_STEPS } from '../login/types'
import initialState from './initialState'
import { PROFILE_STEPS } from './types'

const profileReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING:
      return { ...state, profileStep: PROFILE_STEPS.LOADING }
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, profileStep: PROFILE_STEPS.LOADING_SUCCESS, ...action.payload }
    case PROFILE_STEPS.LOADING_FAILURE:
      return state
    case PROFILE_STEPS.UPDATING:
      return { ...state, profileStep: PROFILE_STEPS.UPDATING }
    case PROFILE_STEPS.UPDATING_SUCCESS:
      return state
    case PROFILE_STEPS.UPDATING_FAILURE:
      return state
    case LOGIN_STEPS.LOGIN_SUCCESS:
      return { ...state, accessToken: action.payload.accessToken, userId: action.payload.userData[0].user_id }
    default:
      return state
  }
}

export default profileReducers