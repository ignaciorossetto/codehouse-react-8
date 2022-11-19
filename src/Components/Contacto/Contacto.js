import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className="contacto margins">
        <div className="contacto__titulo">
            <h2 className="contacto__titulo__H2">Contactate con nosotros!</h2>
        </div>
        <div className="contacto__flex">
            <div className="contacto__form ">

                <form action="" method="post" encType="text/plain">
                    <div className="contacto__form__name">
                        <input type="text" placeholder="Nombre" required/>
                    </div>
                    <div className="contacto__form__email">
                        <input type="text" placeholder="E-mail" required/>
                    </div>
                    <div className="contacto__form__celphone">
                        <input type="text" placeholder="Celular de contacto" required/>
                    </div>
                    <div className="contacto__form__textarea">
                        <textarea name="" className="" cols="30" rows="10" maxLength="2000"
                            placeholder="Escribe aqui tu consulta!"></textarea>
                    </div>
                    <div className="contacto__form__submit">
                        <input type="submit" value="Enviar consulta!"/>
                    </div>
                    <div className="contacto__form__delete">
                        <input type="reset" value="Borrar contenido!"/>
                    </div>

                </form>

            </div>
            <div className="contacto__map">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.3264297650862!2d-64.2368474845657!3d-31.377561581417094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299290ec9675f%3A0x1f47fc2d6c21349a!2sKaram%20Hecho%20A%20Mano!5e0!3m2!1ses!2sar!4v1655301006185!5m2!1ses!2sar"
                    width="380" height="280" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title='aa' className="contacto__map__iframe"></iframe>
                <div>
                    <h3 className="contacto__map__tituloinf">Locales!</h3>
                    <select name="" id="" className="contacto__map__select">
                        <option value="asdad" aria-placeholder="Hola">Cordoba</option>
                        <option value="asdad">Buenos Aires</option>
                        <option value="asdad">Rosario</option>
                    </select>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Contacto