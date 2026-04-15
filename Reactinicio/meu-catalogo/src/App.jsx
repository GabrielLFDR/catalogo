import { useState } from 'react'
import './App.css'
import { ProdutoCard } from './components/ProdutoCard'

function App() {
  const [produtos, setProdutos] = useState([{
    id: 0,
    nome: "Teclado Mecânico",
    preco: 350.00,
    descricao: "Teclado RGB com switches azuis.",
    imagem: "https://placehold.co/400x300/black/white?text=Teclado"
  }
  ])
  const [nomeNovo, setNomeNovo] = useState("")
  const [precoNovo, setPrecoNovo] = useState("")
  const [descricaoNova, setDescricaoNova] = useState("")
  const [imagemNova, setImagemNova] = useState("")

  function saveProduto(evento) {
    evento.preventDefault()

    const novoProduto = {
      id: produtos.length,
      nome: nomeNovo,
      preco: precoNovo,
      descricao: descricaoNova,
      imagem: "https://placehold.co/400x300/green/white?text=Novo"
    }

    setProdutos([...produtos, novoProduto])

    setNomeNovo("")
    setPrecoNovo("")
    setDescricaoNova("")
    setImagemNova("")
  }

  return (
    <>
      <h1>Meu Catálogo de Produtos</h1>
      {produtos.map((item) => <ProdutoCard key={item.id} produto={item} />)}

      <form onSubmit={saveProduto}>
        <h2>Cadastrar Produto</h2>

        <input type="text" placeholder="Nome do produto" value={nomeNovo} onChange={(evento) => setNomeNovo(evento.target.value)} />
        <input type="number" placeholder="Preço do produto" value={precoNovo} onChange={evento => setPrecoNovo(evento.target.value)} />
        <input type="text" placeholder='Descrição do produto' value={descricaoNova} onChange={evento => setDescricaoNova(evento.target.value)} />


        <button type="submit">Adicionar Produto</button>
      </form>

    </>
  )
}

export default App
