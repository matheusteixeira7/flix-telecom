import { Footer } from '@components/application/dashboard/footer'
import { PageTitle } from '@components/application/page-title'
import { Status } from '@components/application/status'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import clients from 'src/common/utils/data/clients.json'
import {
    Avatar,
    Button,
    ButtonsWrapper,
    Container,
    Content,
    Dropdown,
    DropdownContent,
} from './styles'

export const ClientesArea = () => {
    const [date, setDate] = useState(false)
    const [status, setStatus] = useState(false)
    const [statusFilter, setStatusFilter] = useState('Todos')

    const handleDateButton = () => {
        setDate(!date)
        console.log(date)
    }

    const handleStatusFilterTodos = () => {
        setStatus(!status)
        setStatusFilter('Status')
    }

    const handleStatusFilterCancelado = () => {
        setStatus(!status)
        setStatusFilter('Cancelado')
    }

    const handleStatusFilterPendente = () => {
        setStatus(!status)
        setStatusFilter('Pendente')
    }

    const handleStatusFilterCadastrado = () => {
        setStatus(!status)
        setStatusFilter('Cadastrado')
    }

    const handleStatusFilterEfetivado = () => {
        setStatus(!status)
        setStatusFilter('Efetivado')
    }

    return (
        <Container>
            <PageTitle title="Clientes Cadastrados" />

            <Content>
                <header>
                    <input placeholder="Procurar" />

                    <ButtonsWrapper>
                        <Dropdown>
                            <Button onClick={() => handleDateButton()}>
                                <p>Todas as datas</p>
                                <FiChevronDown />
                            </Button>

                            <DropdownContent active={date}>
                                <span>qualquer coisa</span>
                                <span>qualquer coisa</span>
                                <span>qualquer coisa</span>
                                <span>qualquer coisa</span>
                                <span>qualquer coisa</span>
                            </DropdownContent>
                        </Dropdown>

                        <Dropdown>
                            <Button
                                onClick={() => setStatus(!status)}
                                active={status}
                            >
                                <p>{statusFilter}</p> <FiChevronDown />
                            </Button>

                            <DropdownContent active={status}>
                                <ul>
                                    <li
                                        onClick={() =>
                                            handleStatusFilterTodos()
                                        }
                                    >
                                        <span>Todos</span>
                                    </li>

                                    <li
                                        onClick={() =>
                                            handleStatusFilterCancelado()
                                        }
                                    >
                                        <span>Cancelado</span>
                                    </li>

                                    <li
                                        onClick={() =>
                                            handleStatusFilterPendente()
                                        }
                                    >
                                        <span>Pendente</span>
                                    </li>

                                    <li
                                        onClick={() =>
                                            handleStatusFilterCadastrado()
                                        }
                                    >
                                        <span>Cadastrado</span>
                                    </li>

                                    <li
                                        onClick={() =>
                                            handleStatusFilterEfetivado()
                                        }
                                    >
                                        <span>Efetivado</span>
                                    </li>
                                </ul>
                            </DropdownContent>
                        </Dropdown>
                    </ButtonsWrapper>
                </header>

                <body>
                    <table>
                        <tr>
                            <th>Cadastrador por</th>
                            <th>Cliente</th>
                            <th>Cidade</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Ação</th>
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
