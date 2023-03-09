const successResponse = (data: object) => ({
  success: true,
  data,
})

const errorResponse = (message: string) => ({
  success: false,
  error: {
    message,
  }
})

const httpCodes = {
  HTTP_200_OK: 200,
  HTTP_400_BAD_REQUEST: 400,
}

export default {
  successResponse,
  errorResponse,
  httpCodes,
}