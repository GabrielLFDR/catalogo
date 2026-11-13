import './ProdutosStyle.css'
function Produtos(props) {
    return (
        <div className="produtos">
            {
                props.produtos.map((item) => (
                    <div className="produto" key={item.id}>
                        <img src={item.imagem} alt={item.nome} />
                        <div className="produto-info">
                            <h2>{item.nome}</h2>
                            <p>{item.descricao}</p>
                            <span>R$ {parseFloat(item.preco).toFixed(2)}</span>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Produtos