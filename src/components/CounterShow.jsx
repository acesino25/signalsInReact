import React from 'react'
import { signal } from '@preact/signals-react'
import Counter from './Counter'
import { count } from './Counter'


const CounterShow = () => {
  return (
    <div>
        <h1 style={{fontSize: '24px', color: 'red', fotnWeight: 'bold'}}>
            {count}
        </h1>
    </div>
  )
}

export default CounterShow