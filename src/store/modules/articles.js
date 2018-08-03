import { getArticles } from '@/api'

const PROMISE_DELAY = 500

export const state = {
  responseData: [],
  responseError: '',
  authorLabel: 'Author: '
}

export const getters = {
  articles: state => state.responseData,
  hasArticles: state => state.responseData.length > 0,
  error: state => state.responseError
}

export const mutations = {
  saveArticles(state, articles) {
    articles.forEach(element => {
      state.responseData.push(
        {
          'url': element.url,
          'image': element.urlToImage,
          'author': element.author,
          'authorUrl': element.url,
          'date': element.publishedAt,
          'dateUrl': element.url,
          'title': element.title,
          'description': element.description
        }
      )
    })
  },
  saveError(state, error) {
    state.responseError = error.message
  },
  saveAuthorLabel(state, text) {
    state.authorLabel = text
  }
}

export const actions = {
  getArticles({ commit }) {
    return new Promise((resolve, reject) => {
      getArticles()
        .then(res => {
          setTimeout(() => {
            const posts = res.data.articles
            commit('saveArticles', posts)
            resolve(posts)
          }, PROMISE_DELAY)
        })
        .catch(error => {
          state.responseError = error.message
          reject(error)
        })
    })
  }
}
