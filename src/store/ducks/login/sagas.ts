import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { LOGIN_STEPS } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const submitLogin = (creditials: { username: string; password: string }) => {
  return axios.post('https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/login', creditials)
}

export function* submitLoginAsync(action: any) {
  console.log('HELLO', action)
  yield put({
    type: LOGIN_STEPS.LOGGING_IN,
  })

  const { username, password } = action.payload
  const creditials = { username, password }
  console.log('submit: ', creditials)
  if (creditials) {
    try {
      const loginResponse = yield call(submitLogin, creditials)
      localStorage.setItem('hasLoggedInBefore', 'true')
      yield put({
        type: LOGIN_STEPS.LOGIN_SUCCESS,
        payload: loginResponse.data.message,
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: LOGIN_STEPS.LOGIN_FAILURE,
      })
    }
  } else {
    yield put({
      type: LOGIN_STEPS.LOGIN_FAILURE,
    })
  }
}