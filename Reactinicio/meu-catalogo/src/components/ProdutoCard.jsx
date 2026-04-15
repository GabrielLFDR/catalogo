export function ProdutoCard(props){
    const info = props.produto
    return(
        <div className="card-produto">
            <img src={info.imagem} alt={`imagem do produto ${info.nome}`} />

            <h2>{info.nome}</h2>
            <p>{info.descricao}</p>

            <strong>R$ {info.preco}</strong>
        </div>
    )
}