import React from 'react'

export const Weatherform = (props) => {
    return (
        <div className='card card-body'>
            <form onSubmit={props.getWeather}>
           
                <div className='form-group' >

                    <input type="text" name="city" placeholder='Ingrese  nombre de ciudad' className='form-control' autoFocus required/>

                </div>
                <div className='form-group' >

                    <input type="text" name="country" placeholder='Ingrese  nombre de pais' className='form-control' autoFocus required />

                </div>
                <button className="btn btn-success btn-block">
               Obtener Clima
            </button>
            </form>
        </div>

    )
}
