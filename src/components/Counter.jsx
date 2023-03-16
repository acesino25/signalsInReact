import React from 'react'

/**
 * Signals es una manera elegante de resolver el seteo de estados
 * en realidad no trabajamos sobre el estado ya, trabajamos sobre signals
 * reduce la carga de la complejidad de los estados
 * evitando el sobre re-renderizado en cada cambio del state
 * 
 * En un ejemplo, si detectamos en un contador el cambio, ya sea incremento o decremento
 * el componente pedirá re-renderizar.
 * 
 * El planteamiento de esto no es significativo para el rendimiento en algo pequeño
 * 
 * Una señal es un OBJETO que tiene un valor, y puede observarse por cambios
 * cuando cambia todos los observadores detectan este cambio
 * 
 * Lo instalamos:
 * npm i @preact/signals-react
 */


/*
    Una de las principales ventajas 
    es que podemos exportar indireccionalmente
    el estado declarado con signals
*/
export const count = signal(0)  // Exportamos para usar en CounterShow
import { signal, effect, batch } from '@preact/signals-react'
import CounterShow from './CounterShow'

const Counter = () => {
    /* El componente solo se renderiza una vez */
    console.log('Renderizado')
    /* como useSTATE */
    /* solo, que NO desestructuramos */
    
    const double = signal(1)

    /* Handle onClick */
    const update = (val) =>{
        /*return(
            /* al objeto 'count' 
            le modificamos el valor 'value' *
            count.value += val
        )*/

        /**
         * Podemos hacer una modificación en masa a través
         * del uso de la batch() function
         * que recibe una función como argumento
         * batch(()=>{})
         */
        batch(()=>{
            count.value += val
            double.value = count.value*2
        })
    }

    /* on count CHANGE */
    /**
     * Detecta el cambio del valor, toma una función como argumento
     * y la ejecuta.
     * Si NO pusiésemos una señal en el cuerpo de la función que pasamos
     * se ejecutará solo una vez, cuando hace el primer render
     */
    effect(()=>{
        /* para trabajar con effect accedemos al objeto en su propiedad value */
        console.log(count.value)
        
    })


  return (
    /* En lo visual usamos el nombre de la signal puro, sin .value */
    <div>
        <CounterShow></CounterShow>
        Counter {count}
        Multiplier {double}
        <button onClick={()=>update(1)}>Increment</button>
        <button 
        onClick={()=>update(-1)}
        style={{bakgroundColor: 'red'}}>Decrement</button>
    </div>
  )
}

export default Counter