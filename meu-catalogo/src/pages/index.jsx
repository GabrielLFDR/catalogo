import { useEffect, useState } from 'react'
import Produtos from '../components/Produtos'
import NovoProduto from '../components/NovoProduto'



function Home() {
    const [page, setPage] = useState("produtos")
    const [loading, setLoading] = useState(true)
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: "Teclado",
            descricao: "Teclado mecânico com switches azuis, ideal para digitação e jogos.",
            imagem: "https://placehold.co/500x300/black/white?text=Teclado",
            preco: 299.99
        },
        {
            id: 2,
            nome: "Mouse",
            descricao: "Mouse óptico com sensor de alta precisão, ideal para uso diário.",
            imagem: "https://placehold.co/500x300/black/white?text=Mouse",
            preco: 99.99
        },
        {
            id: 3,
            nome: "Monitor",
            descricao: "Monitor LED de 24 polegadas com resolução Full HD, ideal para uso profissional e entretenimento.",
            imagem: "https://placehold.co/500x300/black/white?text=Monitor",
            preco: 799.99
        }
    ])
    const paginas = {
        produtos: <Produtos produtos={produtos} />,
        novoproduto: <NovoProduto setProdutos={setProdutos} produtos={produtos}/>,
    };
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [page])

    return (
        <div className="container">
            <div className="loading" style={{ display: loading ? "block" : "none" }}>
                <span>Carregando...</span>
            </div>
            <header>
                <h1 className="Title_prymary">Meu Catálogo de Produtos</h1>
                <nav>
                    <ul className="home_nav_options">
                        <li><a className="inactive">Home</a></li>
                        <li><a  className="active" onClick={() => setPage("produtos")}>Produtos</a></li>
                        <li><a className="active" onClick={() => setPage("novoproduto")}>Novo produto</a></li>
                        <li><a className="inactive">Sobre</a></li>
                    </ul>
                </nav>
            </header>
            <div className="paginas">
                {loading ? null : paginas[page] || <h1>Página não encontrada</h1>}
            </div>

        </div>
    )
}

export default Home 