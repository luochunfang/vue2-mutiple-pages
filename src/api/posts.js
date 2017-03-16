/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-03-16 16:27:53
* @Last Modified by:   dlidala
* @Last Modified time: 2017-03-16 16:47:38
*/

import { fetch } from '../utils/ajax'
import api from '../../data/routes'

const posts = {
  getPosts: () => fetch(api.queryNextWorkDay.url),
  getArticle: () => fetch(api.queryEndowmentSituation.url)
}

export default posts

