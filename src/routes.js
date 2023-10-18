import patientController from './patientController'
import clinicalController from './clinicalController'

module.exports = (router)=>{
    router.get('/patients',patientController.getAll)
    router.post('/patients',patientController.create)
    router.put('/patients',patientController.update)
    router.delete('/patients',patientController.delete)

    router.get('/clinicals/:patientId', clinicalController.getAll)
    router.post('/clinicals',clinicalController.create)
}