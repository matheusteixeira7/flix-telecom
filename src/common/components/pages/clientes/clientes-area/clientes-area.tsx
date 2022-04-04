import { Footer } from '@components/application/dashboard/footer'
import { PageTitle } from '@components/application/page-title'
import { Status } from '@components/application/status'
import clients from 'src/common/utils/data/clients.json'
import { Avatar, Container, ContentWrapper } from './styles'

export const ClientesArea = () => {
    return (
        <Container>
            <PageTitle title="Clientes Cadastrados" />

            <ContentWrapper>
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
            </ContentWrapper>

            <Footer />
        </Container>
    )
}
