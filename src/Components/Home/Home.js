import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <main className="index margins">
        <div id='contacto__flex'></div>
        <h2 className="index__main__title">Bienvenido a Karam Hecho a Mano!</h2>
        <p className="index__main__p">Karam Hecho a Mano es el resultado de muchos años de amor por el bordado a mano, de
            esfuerzo y compromiso. Somos amantes de la naturaleza, colores y texturas. Creamos productos de diseño, arte
            y magia.
            Somos un grupo de mujeres apasionadas y comprometidas con nuestro producto. Cada uno, tiene un valor
            personal único ya que lleva un pedacito de nuestro sentimiento en el momento de realizarlo. Es el valor de
            lo artesanal, de lo hecho a mano.
        </p>
        <div className="galeriahome margins">
            <div className="galeriahome__img1 galeriahome_common">
                <Link to='/products/category/bolso' className="galeriahome__common__">
                    <div className="galeriahome_common__text">Bolsos</div>
                    <div className="galeriahome_common__text__comprar">Comprar</div>
                </Link>
            </div>
            <div className="galeriahome__img2 galeriahome_common">
                <Link to='/products/category/almohadon' className="galeriahome__common__">
                    <div className="galeriahome_common__text">Almohadones</div>
                    <div className="galeriahome_common__text__comprar">Comprar</div>
                </Link>
            </div>
            <div className="galeriahome__img3 galeriahome_common">
                <Link to='/products/category/ropadecama' className="galeriahome__common__">
                    <div className="galeriahome_common__text">Ropa de Cama</div>
                    <div className="galeriahome_common__text__comprar">Comprar</div>
                </Link>
            </div>
        </div>

    </main>
  )
}

export default Home