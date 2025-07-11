import { Sequelize } from "sequelize";
import db from "../config/db.js";

//Se crean lo campos de acuerdo con la BD de Table plus
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
});