import { Request, Response } from 'express'
import responsesUtils from '../../utils/responses'
import constants from '../../constants'

const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body

  /* ------------------------------------ Start of request validations ------------------------------------ */

  if (email === '') {
    return res.status(responsesUtils.httpCodes.HTTP_400_BAD_REQUEST).json(responsesUtils.errorResponse(constants.messages.EMAIL_REQUIRED))
  }

  if (password === '') {
    return res.status(responsesUtils.httpCodes.HTTP_400_BAD_REQUEST).json(responsesUtils.errorResponse(constants.messages.PASSWORD_REQUIRED))
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (emailRegex.test(email) === false) {
    return res.status(responsesUtils.httpCodes.HTTP_400_BAD_REQUEST).json(responsesUtils.errorResponse(constants.messages.INVALID_EMAIL))
  }

  if (password.length < 8) {
    return res.status(responsesUtils.httpCodes.HTTP_400_BAD_REQUEST).json(responsesUtils.errorResponse(constants.messages.INVALID_PASSWORD))
  }

  /* ------------------------------------ End of request validations ------------------------------------ */

  

}

const login = (req: Request, res: Response) => {
  const { email, password } = req.body
}

export default {
  signup,
  login,
}