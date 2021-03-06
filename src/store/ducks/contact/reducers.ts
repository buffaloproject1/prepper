import initialState, { RecipeUploadStatus } from './initialState';
import {
  CONTACT_ACTION_TYPES,
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS,
} from './types'

const contactReducers = (state = initialState, action: { type: string; id: string; filter: string; payload: any }) => {
  switch (action.type) {
    case CONTACT_ACTION_TYPES.SHOW_HELLO:
    case CONTACT_ACTION_TYPES.SHOW_RECIPE:
    case CONTACT_ACTION_TYPES.SHOW_SUGGESTION:
    case CONTACT_ACTION_TYPES.SHOW_PARTNERSHIP:
      return { ...state, contactTabShowing: action.type }
    case CONTACT_HELLO_STEPS.DEFAULT:
    case CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE:
    case CONTACT_HELLO_STEPS.HELLO_SUBMIT_SUCCESS:
    case CONTACT_HELLO_STEPS.SUBMITTING_HELLO:
    case CONTACT_HELLO_STEPS.HELLO_RESET:
      return { ...state, helloStep: action.type }
    case CONTACT_RECIPE_STEPS.DEFAULT:
    case CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE:
    case CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_SUCCESS:
    case CONTACT_RECIPE_STEPS.SUBMITTING_RECIPE:
    case CONTACT_RECIPE_STEPS.RECIPE_RESET:
      return { ...state, recipeStep: action.type }
    case CONTACT_SUGGESTION_STEPS.DEFAULT:
    case CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE:
    case CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_SUCCESS:
    case CONTACT_SUGGESTION_STEPS.SUBMITTING_SUGGESTION:
    case CONTACT_SUGGESTION_STEPS.SUGGESTION_RESET:
      return { ...state, suggestionStep: action.type }
    case CONTACT_PARTNERSHIP_STEPS.DEFAULT:
    case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_FAILURE:
    case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_SUCCESS:
    case CONTACT_PARTNERSHIP_STEPS.SUBMITTING_PARTNERSHIP:
    case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_RESET:
      return { ...state, partnershipStep: action.type }
    case CONTACT_RECIPE_STEPS.UPDATE_RECIPE_UPLOAD_STATUS: {
      const uploadedRecipeStatuses = [...state.recipesUploaded]
      const index = state.recipesUploaded.findIndex(
        (item: RecipeUploadStatus) => item.fileName === action.payload.fileName,
      )
      if (index === -1) {
        uploadedRecipeStatuses.push(action.payload)
      } else {
        uploadedRecipeStatuses[index] = action.payload
      }
      return { ...state, recipesUploaded: uploadedRecipeStatuses }
    }
    case CONTACT_RECIPE_STEPS.REMOVE_RECIPE: {
      const filteredRecipes = state.recipesUploaded.filter((item: RecipeUploadStatus) => {
        return item.fileName !== action.payload.fileName
      })
      return { ...state, recipesUploaded: filteredRecipes }
    }

    case CONTACT_RECIPE_STEPS.UPDATE_RECIPE_NAME:
      return { ...state, recipeName: action.payload.recipeName}
    case CONTACT_RECIPE_STEPS.UPDATE_RECIPE_EMAIL:
      return { ...state, recipeEmail: action.payload.recipeEmail}
    case CONTACT_RECIPE_STEPS.UPDATE_RECIPE_MESSAGE:
      return { ...state, recipeMessage: action.payload.recipeMessage}
    case CONTACT_RECIPE_STEPS.RECIPE_FORM_RESET:
      return { ...state, recipeName: '', recipeEmail: '', recipeMessage: ''}
    default:
      return state
  }
}

export default contactReducers
