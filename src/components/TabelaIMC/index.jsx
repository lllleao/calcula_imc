import style from './Calculadora.module.css'

const TabelaIMC = () => {
    const imcs = ['Menos do que 18.5', 'Entre 18.5 e 24.9', 'Entre 25 e 29.9', 'Entre 30 e 34.9', 'Entre 35 e 39.9', 'Mais que 40']

    const resultados = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    return (
        <div>
            <h1>Tabela IMC</h1>
            <div className={style.descricao}>
                <ul>
                    <li>
                        <b>IMC</b>
                    </li>
                    {
                        imcs.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    <li>
                        <b>Resultado</b>
                    </li>
                    {
                        resultados.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TabelaIMC