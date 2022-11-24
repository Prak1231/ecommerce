const jwt = require('jsonwebtoken')
const User = require('../../mongoModels/user')
const responseUtil = require('../../helper/response')
const messageUtil = require('../../helper/message')

exports.isAuth = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
      const user = await User.findById(decode.userId)
      console.log(user)
      if (!user) {
        return responseUtil.authorizationErrorResponse(
          res,
          messageUtil.server.unAuthorized,
        )
      }

      req.user = user
      next()
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        return responseUtil.authorizationErrorResponse(
          res,
          messageUtil.server.unAuthorized,
        )
      }
      if (error.name === 'TokenExpiredError') {
        return res.json({
          success: false,
          message: 'sesson expired try sign in!',
        })
      }

      return responseUtil.authorizationErrorResponse(
        res,
        messageUtil.server.serverError,
      )
    }
  } else {
    return responseUtil.authorizationErrorResponse(
      res,
      messageUtil.server.unAuthorized,
    )
  }
}
