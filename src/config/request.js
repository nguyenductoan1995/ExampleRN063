import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

// Add a response interceptor
axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 405) {
      const { error } = err.response.data || null
      if (error) {
        return Promise.reject(error)
      }
    }
    return Promise.reject(err)
  },
)

function request(data) {
  return axios(data)
}

export default request
