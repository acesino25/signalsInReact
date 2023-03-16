# signalsInReact
Working the basics of signals library in react

Signals es una librería usada para hacer más eficiente el proceso
de asignar múltiples acciones  y cambios de estados sobre valores.

Imagina una serie de 20 inputs que re renderizan el componente en
cada onChange. O que simplemente llaman a una acción en cada onChange.
La pérdida de eficiencia llegaría a superar los márgenes de lo deseado
en algunos dispositivos.

Signals trabaja con signals(value) en lugar de useState(value)

const valor = value()
-   Esto crea un objeto -

El objeto valor tiene la propiedad .value, que podemos llamar a la ora de
asignar.
Pero a la hora de imprimir solo llamamos a la constante valor.

en un onClick podemos pasar una función ()=>update(arg)

y la función const update = (arg)=>{
    return(
        valor.value += arg
    )
}


effect(()=>{})

es la manera en la que reemplazamos el useEffect y escuchamos por las signals que pasemos dentro. Si no hay ninguna declarada solo se ejecutará una vez, cuando es renderizado por primera vez


tenemos otra función a la hora de la asignación:
    batch(()=>{

    })
Su propósito es actualizar varias signals