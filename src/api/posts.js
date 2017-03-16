import { fetch } from '../utils/ajax'
import api from '../../data/routes'

const posts = {
  getPosts: () => fetch(api.queryNextWorkDay.url),
  getArticle: () => fetch(api.queryEndowmentSituation.url)
}

export default posts

