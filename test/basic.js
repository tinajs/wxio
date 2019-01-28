
import './helpers/globals'
import test from 'ava'
import sinon from 'sinon'
import wxio from '..'

test('async function should returns a promise', async t => {
  let promise = wxio.setStorage()

  t.true(typeof promise.then === 'function')
  t.true(typeof promise.catch === 'function')
  t.true(typeof promise.cancel === 'function')

  t.pass()
})

test('wxio should use the Promise class in global', async t => {
  let spy = global.Promise.prototype.someExtraMethod = sinon.spy()

  let promise = wxio.request()
  t.true(typeof promise.someExtraMethod === 'function')

  promise.someExtraMethod()
  t.true(spy.called)

  t.pass()
})

test('wxio.request should returns a promise', async t => {
  let promise = wxio.request()

  t.true(typeof promise.then === 'function')
  t.true(typeof promise.catch === 'function')
  t.true(typeof promise.cancel === 'function')

  t.pass()
})

test('module function', async t => {
  let manager = wxio.getFileSystemManager()
  let promise = manager.getFileInfo()

  t.true(typeof promise.then === 'function')
  t.true(typeof promise.catch === 'function')
  t.true(typeof promise.cancel === 'function')

  let message = await promise

  t.is(message, 'GET_FILE_INFO_SUCCESS')

  t.pass()
})
