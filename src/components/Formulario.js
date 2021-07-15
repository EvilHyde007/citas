import React, {Fragment, useState } from 'react'

const Formulario = () => {

    //state de citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',

    });

    //funcion q se ejecuta cuandose escribeen un input
    const actualizarState =e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    //extraer los valores

    const {mascota, propietario, fecha, hora, sintomas}= cita;

    //cuando se  preciona en agregar citas
    const submitCita = () => {

        alert('enviando');
       /*  e.preventDefault();
        console.log(mascota) */

        //validar
        /* if(mascota.trim()=== '' || propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== '' ){
            console.log("error")
            return;
        } */

        //asignar id

        //crear cita

        //reiniciar el form
        


    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form
                    onSubmit={submitCita}

            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
            </form>

            <form>
                <label>Nombre Dueño </label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    onChange={actualizarState}
                    value={propietario}
                
                />
            </form>

            <form>
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                                    
                />
            </form>

            <form>
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                                 
                />
            </form>

            <label>Sintomas</label>
            <textarea 
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
             ></textarea>

             <button
                
                type="Submit"
                className="u-full-width button-primary"
                
             >Agregar Cita</button>



        </Fragment>
        
     );
}
 
export default Formulario; 

