import { all, takeEvery } from 'redux-saga/effects';
import { fetchHeaderProductCategoryDetailAsync } from './ducks/header/sagas';
import { HEADER_ACTION_TYPES } from './ducks/header/types';
import { createHouseholdFromNewsletterAsync, createHouseholdFromSurveyAsync } from './ducks/household/sagas';
import { CREATE_HOUSEHOLD_FROM } from './ducks/household/types';
import { localStorageLoginAsync, submitLoginAsync } from './ducks/login/sagas';
import { LOGIN_STEPS } from './ducks/login/types';
import { submitNewsletterEmailAsync } from './ducks/newsletter/sagas';
import { NEWSLETTER_ACTION_TYPES } from './ducks/newsletter/types';
import { createProfileAsync, fetchProfileAsync } from './ducks/profile/sagas';
import { PROFILE_STEPS } from './ducks/profile/types';
import { RECIPEBOX } from './ducks/recipesBox/types';
import { submitSearchAsync } from './ducks/search/sagas';
import { SEARCH_ACTION_TYPES } from './ducks/search/types';
import {
  fetchRecipesBoxAsync,
  submitRecipeBoxArticleAddAsync,
  submitRecipeBoxArticleDeleteAsync,
  submitRecipeBoxRecipeAddAsync,
  submitRecipeBoxRecipeDeleteAsync,
} from './ducks/recipesBox/sagas'
import {
  removeRecipeAsync,
  submitHelloContactAsync,
  submitPartnershipContactAsync,
  submitRecipeContactAsync,
  submitSuggestionContactAsync,
  uploadRecipeAsync,
} from './ducks/contact/sagas'
import {
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS,
} from './ducks/contact/types'

function* watchFetchHeaderProductCategoryDetail() {
  yield takeEvery(HEADER_ACTION_TYPES.CATEGORY_SELECTED, fetchHeaderProductCategoryDetailAsync)
}

function* watchSubmitNewsletterEmail() {
  yield takeEvery(NEWSLETTER_ACTION_TYPES.SUBMIT, submitNewsletterEmailAsync)
}

function* watchSearch() {
  yield takeEvery(SEARCH_ACTION_TYPES.SEARCH, submitSearchAsync)
}

function* watchLogin() {
  yield takeEvery(LOGIN_STEPS.SUBMIT_LOGIN, submitLoginAsync)
}

function* watchProfile() {
  yield takeEvery(PROFILE_STEPS.LOAD, fetchProfileAsync)
}

function* watchHelloContact() {
  yield takeEvery(CONTACT_HELLO_STEPS.SUBMIT_HELLO, submitHelloContactAsync)
}

function* watchRecipeContact() {
  yield takeEvery(CONTACT_RECIPE_STEPS.SUBMIT_RECIPE, submitRecipeContactAsync)
}

function* watchSuggestionContact() {
  yield takeEvery(CONTACT_SUGGESTION_STEPS.SUBMIT_SUGGESTION, submitSuggestionContactAsync)
}

function* watchPartnershipContact() {
  yield takeEvery(CONTACT_PARTNERSHIP_STEPS.SUBMIT_PARTNERSHIP, submitPartnershipContactAsync)
}

// function* watchCreateHouseholdFromNewsletter() {
//   yield takeEvery(CREATE_HOUSEHOLD_FROM.NEWSLETTER, createHouseholdFromNewsletterAsync)
// }

function* watchCreateHouseholdFromSurvey() {
  yield takeEvery(CREATE_HOUSEHOLD_FROM.SURVEY, createHouseholdFromSurveyAsync)
}

function* watchUploadRecipe() {
  yield takeEvery(CONTACT_RECIPE_STEPS.UPLOAD_RECIPE, uploadRecipeAsync)
}

function* watchRemoveRecipe() {
  yield takeEvery(CONTACT_RECIPE_STEPS.TRY_REMOVE_RECIPE, removeRecipeAsync)
}

function* watchFetchRecipesBox() {
  yield takeEvery(RECIPEBOX.TRY_FETCH_RECIPEBOX, fetchRecipesBoxAsync)
}

function* watchRecipeBoxAddRecipe() {
  yield takeEvery(RECIPEBOX.TRY_ADD_RECIPE, submitRecipeBoxRecipeAddAsync)
}

function* watchRecipeBoxDeleteRecipe() {
  yield takeEvery(RECIPEBOX.TRY_DELETE_RECIPE, submitRecipeBoxRecipeDeleteAsync)
}

function* watchRecipeBoxAddArticle() {
  yield takeEvery(RECIPEBOX.TRY_ADD_ARTICLE, submitRecipeBoxArticleAddAsync)
}

function* watchRecipeBoxDeleteArticle() {
  yield takeEvery(RECIPEBOX.TRY_DELETE_ARTICLE, submitRecipeBoxArticleDeleteAsync)
}

function* watchLocalStorageLogin() {
  yield takeEvery(LOGIN_STEPS.TRY_LOCAL_STORAGE_LOGIN, localStorageLoginAsync)
}

export default function* rootSaga() {
  yield all([
    watchCreateHouseholdFromSurvey(),
    watchFetchHeaderProductCategoryDetail(),
    watchFetchRecipesBox(),
    watchHelloContact(),
    watchLogin(),
    watchPartnershipContact(),
    watchProfile(),
    watchRecipeBoxAddRecipe(),
    watchRecipeBoxDeleteRecipe(),
    watchRecipeContact(),
    watchRemoveRecipe(),
    watchSearch(),
    watchSubmitNewsletterEmail(),
    watchSuggestionContact(),
    watchUploadRecipe(),
    watchRecipeBoxAddArticle(),
    watchRecipeBoxDeleteArticle(),
    watchLocalStorageLogin()
  ])
}
