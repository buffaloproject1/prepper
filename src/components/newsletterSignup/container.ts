import NewsletterSignup from '.'
import { connect } from 'react-redux'
import { onNewsletterReset, onNewsletterSubmit } from '../../store/ducks/newsletter/actions'

const mapStateToProps = (state: any) => {
  const { position } = state.visibilityFilter
  const { categories } = state.headerReducers
  const { categoryDetail } = state.headerReducers
  return {
    position,
    categories,
    categoryDetail,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSubmit: (email: string) => {
      dispatch(onNewsletterSubmit(email))
    },
    onReset: () => {
      dispatch(onNewsletterReset())
    },
  }
}

const NewsletterContainer = connect(mapStateToProps, mapDispatchToProps)(NewsletterSignup)

export default NewsletterContainer
