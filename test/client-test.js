'use strict'

const test = require('ava')
const portafolio = require('../index')
//  const fixtures = require('./index')

//  en este caso, solo vamos a validar que exista el cliente, por eso no utilizamos una función async
test('client', t => {
  //  creamos un metdo para que nos muestre una referencia de la librería
  const client = portafolio.createClient()

  //  el metodo getPicture solo nos hará el llamado a la ruta
  t.is(typeof client.getPicture, 'function')
  //  será encargado de hacer el http request post de la ruta
  t.is(typeof client.savePicture, 'function')
  //  esta llamará a la ruta like
  t.is(typeof client.likePicture, 'function')
  //  nos llamará a la ruta listar imágenes
  t.is(typeof client.listPicture, 'function')
  //  nos llamará a la ruta listar imagen por tag
  t.is(typeof client.listPictureByTag, 'function')
  //  nos llamará a la ruta guardar usuario
  t.is(typeof client.saveUser, 'function')
  //  nos llamará a la ruta obtener usuario
  t.is(typeof client.getUser, 'function')
  //  nos llamará a la ruta de autenticar usuario
  t.is(typeof client.auth, 'function')
})
