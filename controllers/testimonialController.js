import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    
    //Validar
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'});
    };

    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo está vacío'});
    };

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vacío'});
    };
    
    if(errores.length > 0){

        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else{
        //Alamacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    };
}

export {
    guardarTestimonial
}