let service = require('./services/quiz.services.server')
service.findAllQuizzes().then(resp => {console.log(resp)})
