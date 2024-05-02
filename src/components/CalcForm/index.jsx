import { useState } from 'react'

import style from './CalcForm.module.css'

const CalcForm = () => {
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    function calculaImc() {
        const imc = (Number(peso / altura ** 2))

        return imc
    }

    function resultadoTipoPeso(imc) {

        if (imc >= 40) return 'Obesidade grau 3'
        if (imc >= 35) return 'Obesidade grau 2'
        if (imc >= 30) return 'Obesidade grau 1'
        if (imc >= 25) return 'Sobrepeso'
        if (imc >= 18.5) return 'Peso normal'
        if (imc < 18.5) return 'Abaixo do peso'
    }

    function setResultado(e) {
        e.preventDefault()
        const resultado = document.querySelector('#resultado')
        resultado.style.display = 'block'

        const imc = calculaImc()

        const resultImc = resultadoTipoPeso(imc)


        if (peso === '' || isNaN(peso)) {
            resultado.classList.add(style.invalido)
            resultado.innerHTML = 'Peso inválido'

        } else if (altura === '' || isNaN(altura)) {
            resultado.classList.add(style.invalido)
            resultado.innerHTML = 'Altura inválida'
        }
        else {
            resultado.classList.remove(style.invalido)
            resultado.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultImc})`
        }
    }

    return (
        <>
            <form className={style.formulario} onSubmit={setResultado}>
                <label htmlFor="peso">Peso:</label>
                <input className={style.formularioInput} type="text" id="peso" onChange={e => setPeso(e.target.value)} />
                <label htmlFor="altura">Altura:</label>
                <input className={style.formularioInput} type="text" id="altura" onChange={e => setAltura(e.target.value)} />

                <button type="submit" className={style.botao}>Enviar</button>
            </form>
            <div id='resultado' className={style.resultado}>
            </div>
        </>
    )
}

export default CalcForm