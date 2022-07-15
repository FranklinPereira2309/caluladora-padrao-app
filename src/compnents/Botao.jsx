import '../styles/Botao.css';

export default function Botao(props) {

    const eisNumeroValor = valor => {
        return isNaN(valor) && valor !== '=' && valor !== '.'
    }

    return(
        <div
            className={`botaoNumero ${eisNumeroValor(props.children)? 'operador' : '' }`.trimEnd()}
            onClick={()=> props.exibirValorNoInput(props.children)}
        >
            {props.children}
        </div>
    )
}