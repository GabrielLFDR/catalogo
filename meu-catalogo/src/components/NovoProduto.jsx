import { useState } from 'react'
import './NovoProdutoStyle.css'

function NovoProduto(props) {
    const [nomeNovo, setNomeNovo] = useState("")
    const [precoNovo, setPrecoNovo] = useState(0)
    const [descricaoNova, setDescricaoNova] = useState("")
    const [imagemNova, setImagemNova] = useState("")
    const setProdutos = props.setProdutos
    const produtos = props.produtos

    function saveProduto(evento) {
        evento.preventDefault()

        if (!nomeNovo || !precoNovo || !descricaoNova) {
            alert("Preencha todos os campos obrigatórios!")
            return
        }

        const novoProduto = {
            id: produtos.length,
            nome: nomeNovo,
            preco: precoNovo,
            descricao: descricaoNova,
            imagem: "https://placehold.co/400x300/green/white?text=Sem+Imagem"
        }

        setProdutos([...produtos, novoProduto])

        alert("Produto adicionado com sucesso!")

        setNomeNovo("")
        setPrecoNovo(0)
        setDescricaoNova("")
        setImagemNova("")
    }

    return (
        <form className="novo-produto-form" onSubmit={saveProduto}>
            <h2>Cadastrar Produto</h2>

            <input type="text" placeholder="Nome do produto *" value={nomeNovo} onChange={(evento) => setNomeNovo(evento.target.value)} />
            <input type="number" placeholder="Preço do produto *" value={precoNovo} onChange={evento => setPrecoNovo(evento.target.value)} />
            <input type="text" placeholder='Descrição do produto *' value={descricaoNova} onChange={evento => setDescricaoNova(evento.target.value)} />
            <input type="text" placeholder='URL da imagem do produto' value={imagemNova} onChange={evento => setImagemNova(evento.target.value)} />


            <button type="submit">Adicionar Produto</button>

            <div className="exemplo-produto">
                        <img src= {imagemNova? imagemNova : "https://placehold.co/500x300/green/white?text=Novo"} />
                        <div className="exemplo-produto-info">
                            <h3>{nomeNovo? nomeNovo : "Nome do Produto"}</h3>
                            <p>{descricaoNova? descricaoNova : "Descrição do produto"}</p>
                            <span>R$ {precoNovo? precoNovo : "0.00"} </span>
                        </div>
            </div>

        </form>
    )
}

export default NovoProduto