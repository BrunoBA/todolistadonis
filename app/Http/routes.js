'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/','ActivityController.index');

// Route.get('/add'.'ActivitiesController.add');
// Route.get('/edit'.'ActivitiesController.edit');
// Route.get('/delete'.'ActivitiesController.delete');
// Route.get('/done'.'ActivitiesController.done');