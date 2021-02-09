'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    this.options = options || {
      endpoints: {
        pictures: 'http://api.portafolio-digital.com/picture',
        users: 'http://api.portafolio-digital.com/user',
        auth: 'http://api.portafolio-digital.com/auth'
      }
    }
  }

  getPicture (id, callback) {
    const opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/${id}`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  savePicture () {}

  likePicture () {}

  listPicture () {}

  listPictureByTag () {}

  saveUser () {}

  getUser () {}

  auth () {}
}

module.exports = Client
