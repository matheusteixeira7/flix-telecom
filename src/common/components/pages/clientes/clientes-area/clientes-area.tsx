import { Footer } from '@components/application/dashboard/footer'
import { PageTitle } from '@components/application/page-title'
import { Status } from '@components/application/status'
import ptBR from 'date-fns/locale/pt-BR'
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
    FilterButton,
} from './styles'
registerLocale('ptBR', ptBR)

export const ClientesArea = () => {
    useEffect(() => {
        api.get('/clients').then((response) => {
            setData(response.data)
            setFilter(response.data)
        })
    }, [])

    const [data, setData] = useState([])
    const [date, setDate] = useState('Todas as datas')
    const [filter, setFilter] = useState([])
    const [searchClient, setSearchClient] = useState('')
    const [dateDropdown, setDateDropdown] = useState(false)
    const [status, setStatus] = useState(false)
    const [statusFilter, setStatusFilter] = useState('Status')

    const handleChange = (event) => {
        setSearchClient(event.target.value)
    }

    const handleDatePicker = () => {
        setDateDropdown(!dateDropdown)
    }

    const setDropdownToFalse = () => {
        setDateDropdown(false)
        setStatus(false)
    }

    const handleFilter = () => {
        switch (true) {
            case date !== 'Todas as datas' &&
                statusFilter !== 'Status' &&
                searchClient !== '':
                setFilter(
                    data.filter((client) => {
                        return (
                            client.status === statusFilter &&
                            client.createdAt === date &&
                            client.name
                                .toLowerCase()
                                .includes(searchClient.toLowerCase())
                        )
                    })
                )
                setDropdownToFalse()
                break

            case date !== 'Todas as datas' &&
                statusFilter === 'Status' &&
                searchClient !== '':
                setFilter(
                    data.filter((client) => {
                        return (
                            client.name
                                .toLowerCase()
                                .includes(searchClient.toLowerCase()) &&
                            client.createdAt === date
                        )
                    })
                )
                setDropdownToFalse()
                break

            case date === 'Todas as datas' &&
                statusFilter === 'Status' &&
                searchClient !== '':
                setFilter(
                    data.filter((client) => {
                        return client.name
                            .toLowerCase()
                            .includes(searchClient.toLowerCase())
                    })
                )
                setDropdownToFalse()
                break

            case date === 'Todas as datas' &&
                statusFilter !== 'Status' &&
                searchClient !== '':
                setFilter(
                    data.filter((client) => {
                        return (
                            client.name
                                .toLowerCase()
                                .includes(searchClient.toLowerCase()) &&
                            client.status === statusFilter
                        )
                    })
                )
                setDropdownToFalse()
                break

            case date === 'Todas as datas' &&
                statusFilter !== 'Status' &&
                searchClient === '':
                setFilter(
                    data.filter((client) => {
                        return client.status === statusFilter
                    })
                )
                setDropdownToFalse()
                break

            case date !== 'Todas as datas' &&
                statusFilter === 'Status' &&
                searchClient === '':
                setFilter(
                    data.filter((client) => {
                        return client.createdAt === date
                    })
                )
                setDropdownToFalse()
                break

            case date !== 'Todas as datas' &&
                statusFilter !== 'Status' &&
                searchClient === '':
                setFilter(
                    data.filter((client) => {
                        return (
                            client.createdAt === date &&
                            client.status === statusFilter
                        )
                    })
                )
                setDropdownToFalse()
                break

            default:
                setFilter(data)
                setDropdownToFalse()
                break
        }
    }

    return (
        <Container>
            <PageTitle title="Clientes Cadastrados" />

            <Content>
                <header>
                    <input
                        type="text"
                        placeholder="Procurar cliente"
                        value={searchClient}
                        onChange={handleChange}
                    />

                    <ButtonsWrapper>
                        <Dropdown>
                            <Button onClick={() => handleDatePicker()}>
                                {date}
                                <FiChevronDown />
                            </Button>

                            <DropdownContent active={dateDropdown}>
                                <span
                                    onClick={() => {
                                        setDate('Todas as datas')
                                        handleDatePicker()
                                    }}
                                >
                                    Todas as datas
                                </span>
                                <DatePicker
                                    selected={null}
                                    onChange={(date) => {
                                        setDate(
                                            date.toLocaleDateString('pt-BR')
                                        )
                                        handleDatePicker()
                                    }}
                                    locale="ptBR"
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Selecione uma data"
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
                                        onClick={() => {
                                            setStatusFilter('Status')
                                            setStatus(!status)
                                        }}
                                    >
                                        <span>Todos</span>
                                    </li>

                                    <li
                                        onClick={() => {
                                            setStatusFilter('Cancelado')
                                            setStatus(!status)
                                        }}
                                    >
                                        <span>Cancelado</span>
                                    </li>

                                    <li
                                        onClick={() => {
                                            setStatusFilter('Pendente')
                                            setStatus(!status)
                                        }}
                                    >
                                        <span>Pendente</span>
                                    </li>

                                    <li
                                        onClick={() => {
                                            setStatusFilter('Cadastrado')
                                            setStatus(!status)
                                        }}
                                    >
                                        <span>Cadastrado</span>
                                    </li>

                                    <li
                                        onClick={() => {
                                            setStatusFilter('Efetivado')
                                            setStatus(!status)
                                        }}
                                    >
                                        <span>Efetivado</span>
                                    </li>
                                </ul>
                            </DropdownContent>
                        </Dropdown>

                        <FilterButton onClick={() => handleFilter()}>
                            Filtrar
                        </FilterButton>
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
                                    <td>{client.createdAt}</td>
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
