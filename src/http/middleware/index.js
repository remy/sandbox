let binary = require('./_binary-handler')
let parse = require('./_parse')
let _static = require('./_static-path')
let fallback = require('./_fallback')
let cors = require('./_cors')

module.exports = function loadMiddleware (app) {
  // Binary payload / base64 encoding handler
  app.use(binary)

  // Sometimes parse JSON or URL-encoded bodies
  parse(app)

  // Direct static asset delivery via /_static
  app.use(_static)

  // Route fallthrough to @proxy + ASAP
  app.use(fallback)

  // Special CORS handling
  app.use(cors)

  return app
}
