import { Footer } from '@components/application/dashboard/footer'
import { PageTitle } from '@components/application/page-title'
import { Status } from '@components/application/status'
import pt from 'date-fns/locale/pt'
import { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FiChevronDown } from 'react-icons/fi'
import { api } from 'src/common/utils/services/api'
import {
    Avatar,
    Button,
    ButtonsWrapper,
    Container,
    Content,
    Dropdown,
    DropdownContent,
} from './styles'
registerLocale('pt', pt)

export const ClientesArea = () => {
    useEffect(() => {
        api.get('/clients').then((response) => {
            setData(response.data)
            setFilter(response.data)
        })
    }, [])

    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [dateDropdown, setDateDropdown] = useState(false)
    const [status, setStatus] = useState(false)
    const [statusFilter, setStatusFilter] = useState('Status')

    const handleDateButton = () => {
        setDateDropdown(!dateDropdown)
    }

    const handleStatusFilterTodos = () => {
        setStatus(!status)
        setStatusFilter('Todos')
        setFilter(data)
    }

    const handleStatusFilterCancelado = () => {
        setStatus(!status)
        setStatusFilter('Cancelado')

        const cancelledClients = data.filter(
            (client) => client.status === 'Cancelado'
        )

        setFilter(cancelledClients)
    }

    const handleStatusFilterPendente = () => {
        setStatus(!status)
        setStatusFilter('Pendente')
        const waitingClients = data.filter(
            (client) => client.status === 'Pendente'
        )
        setFilter(waitingClients)
    }

    const handleStatusFilterCadastrado = () => {
        setStatus(!status)
        setStatusFilter('Cadastrado')
        const registeredClients = data.filter(
            (client) => client.status === 'Cadastrado'
        )
        setFilter(registeredClients)
    }

    const handleStatusFilterEfetivado = () => {
        setStatus(!status)
        setStatusFilter('Efetivado')
        const activeClients = data.filter(
            (client) => client.status === 'Efetivado'
        )
        setFilter(activeClients)
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

                            <DropdownContent active={dateDropdown}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    locale="pt"
                                />
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

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Cadastrador por</th>
                                <th>Cliente</th>
                                <th>Cidade</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                        </tbody>
                        {filter.map((client) => (
                            <tbody key={client.id}>
                                <tr>
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
                                    <td>
                                        {new Date(
                                            client.createdAt
                                        ).toLocaleDateString('pt-BR')}
                                    </td>
                                    <td>
                                        <Status orderStatus={client.status} />
                                    </td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </Content>

            <Footer />
        </Container>
    )
}
