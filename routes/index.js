import express from 'express';
import {paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje
} from '../controllers/paginasController.js'
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

//req es lo que envío, res lo que express me envía
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
//Comodín
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

export default router;