import '../styles/BotaoLimpar.css'

export default function BotaoLimpar(props) {
    return(
        <div className='botao-limpar' onClick={props.exibirValorNoInput}>
            {props.children}
        </div>
    )
}