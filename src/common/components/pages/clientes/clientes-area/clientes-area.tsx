import { Footer } from '@components/application/dashboard/footer'
import { PageTitle } from '@components/application/page-title'
import { Status } from '@components/application/status'
import { FiChevronDown } from 'react-icons/fi'
import clients from 'src/common/utils/data/clients.json'
import { Avatar, Container, Content } from './styles'

export const ClientesArea = () => {
    return (
        <Container>
            <PageTitle title="Clientes Cadastrados" />

            <Content>
                <header>
                    <input placeholder="Procurar" />

                    <div>
                        <button>
                            <span>Todas as datas</span>
                            <FiChevronDown />
                        </button>

                        <button>
                            <span>Status</span> <FiChevronDown />
                        </button>
                    </div>
                </header>

                <body>
                    <table>
                        <tr>
                            <th>Cadastrador por</th>
                            <th>Cliente</th>
                            <th>Cidade</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>

                        {clients.map((client) => (
                            <tr key={client.id}>
                                <td>
                                    <div>
                                        <Avatar
                                            src={client.sellerPicture}
                                            width="35"
                                            height="35"
                                        />
                                        <span>{client.seller}</span>
                                    </div>
                                </td>
                                <td>{client.name}</td>
                                <td>{client.city}</td>
                                <td>{client.createdAt}</td>
                                <td>
                                    <Status orderStatus={client.status} />
                                </td>
                                <td>...</td>
                            </tr>
                        ))}
                    </table>
                </body>
            </Content>

            <Footer />
        </Container>
    )
}
