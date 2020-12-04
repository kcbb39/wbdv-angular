


require('./data/db')()





const questionDao = require('./daos/questions.dao.server')

questionDao.findAllQuestions().then(questions => {


  console.log(questions)


})
