import React from 'react'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <main className="nosotros__main">
        <h2 className="nosotros__main__img__container__title">Sobre nosotros!</h2>
        <div className="nosotros__main__img1">
            <div className="nosotros__main__img__container">

                <p className="nosotros__main__img__container__p">Karam Hecho a Mano es el resultado de muchos años de amor
                    por el bordado a mano, de esfuerzo y compromiso. Somos amantes de la naturaleza, colores y texturas.
                    Creamos productos de diseño, arte y magia. </p>
            </div>
        </div>
        <div className="nosotros__main__img2">
            <div className="nosotros__main__img__container">
                <p className="nosotros__main__img__container__p">Somos un grupo de mujeres apasionadas y comprometidas con
                    nuestro producto. Cada uno, tiene un valor personal único ya que lleva un pedacito de nuestro
                    sentimiento en el momento de realizarlo. Es el valor de lo artesanal, de lo hecho a mano.</p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros