'use strict'

const mysqlModels = require('../../mysqlModels')
const User = require('../../mongoModels/user')

exports.getUsersFromMysql = () => {
  return mysqlModels.user.findAll()
}

exports.getUsersFromMongo = () => {
  return User.find()
}

exports.createUser = (data) => {
  return User.create(data)
}

exports.getUser = (id) => {
  return User.findOne({ _id: id })
}

exports.updateUser = (id, data) => {
  return User.findByIdAndUpdate(id, { $set: data }, { new: true })
}

exports.deleteUser = (id) => {
  return User.findByIdAndRemove({ _id: id })
}
