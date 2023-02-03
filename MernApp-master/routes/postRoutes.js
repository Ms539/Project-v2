const router = require ('express').Router()
const postCtrl = require ('../controllers/postCtrl')
const auth = require('../middlewares/auth')
const CheckOwner = require ('../middlewares/checkOwner')

router.post('/addNewPost', auth , postCtrl.addPost)
router.get('/AllPost' , auth, postCtrl.getAllPost)
router.get('/myPost' , auth , postCtrl.getUserPost)
router.delete('/deletePost/:id',auth,CheckOwner, postCtrl.deltePost)
router.put('/updatePost/:id', auth , CheckOwner ,postCtrl.updatePost)


module.exports = router