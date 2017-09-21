'use strict'

class ActivityController {

  static get inject() {
    return [
      'App/Model/Activity'
    ]
  }

  constructor (Activity) {

    this.Activity = Activity

  }


  * index (request, response) {

    // Pegar a quantidade total
    // Pegar a quantidade de concluídas
    // Pegar todas as atividades  

    // Retornar a view por completa

    yield response.sendView('todo.list');

  }

  * add (request, response) {

    //Validar o request

    // Salvar o request, apenas o nome.. 

    // Retornar request(nome), e id adicionado no banco,
    //junto dos valores no json{message: '...', status: 
    //'...'}
  }

  * edit (request, response) {

    // Validar o request

    // Salvar o request com os valore passados...

    // Retornar request json{message:'...', status:'...'}

  }


  * delete (request, response) {

    // Validar se o request em questão não está concluído

    // Retornar um JSON com erros, se houver, caso contrário 
    //enviar com os status e message

  }
  

  * done (request, response) {

    // Trazer o campo relativo a conclusão da atividade
    // A atividade será sempre alterada para o valor oposto
    //ao que foi retornado pela função

    // A menssagem também mudará de acordo com a conclusão da
    //atividade

  }

}

module.exports = ActivityController
