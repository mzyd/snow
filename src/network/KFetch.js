function timeoutFetch(fetchPromise, timeout = 10000) {
  let timeoutFn = null
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutFn = () => {
      reject({ message: '请求超时' })
    }
  })

  // 这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  const abortablePromise = Promise.race([fetchPromise, timeoutPromise])

  setTimeout(() => {
    timeoutFn()
  }, timeout)

  return abortablePromise
}

const KFetch = {

  baseUrl: 'https://api.abc.com/api',
  headerType: { 'content-type': 'application/json' },

  GET (url, params=null, header={}, timeout = 10000) {
    let finallyUrl = this.baseUrl + url
    const getPromise = new Promise((resolve, reject) => {
      fetch(finallyUrl, {
        headers: Object.assign(header, this.headerType),
        body: JSON.stringify(params)
      })
        .then(res => res.json())
        .then(resData => resolve(resData))
        .catch(err => {
          reject(err)
        })
    })
    return timeoutFetch(getPromise, timeout)
  },

  POST (url, params=null, header={}, timeout = 10000) {
    let finallyUrl = this.baseUrl + url
    const postPromise = new Promise((resolve, reject) => {
      fetch(finallyUrl, {
        method: 'POST',
        headers: Object.assign(header, this.headerType),
        body: JSON.stringify(params)
      })
        .then(res => res.json())
        .then(resData => {
          resolve(resData)
        })
        .catch(err => {
          reject(err)
        })

    })
    return timeoutFetch(postPromise, timeout)
  }
}

export default KFetch
