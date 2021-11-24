

/*
Rutas para el PATH
/api/auth
 */
const { check } = require('express-validator');
const  { 
    crearUsuario,
    renovarToken
} = require('../controllers/auth')


//const express = require('express');

//const router = express.Router();

const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


router.get ('/', (req, res) => {
    res.json({
        message:'Bienvenidos a nuestra API - Login'
    });
})


router.post ('/new', 
   [
       check('name', 'El nombre es obligatorio').not().isEmpty(),
       check('email', 'El email es obligatorio').isEmail(),
       check('password', 'La contraseña debe tener 8 caracteres como minimo').isLength({ min:8 }),
       validarCampos
    
   ],

crearUsuario);


router.post ('/renew', renovarToken);

module.exports = router;