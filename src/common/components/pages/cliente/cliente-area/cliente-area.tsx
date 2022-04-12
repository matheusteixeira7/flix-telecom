import { Footer } from '@components/application/dashboard/footer'
import { PageTitle } from '@components/application/page-title'
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import {
    ChangeStatus,
    Container,
    Content,
    DropdownContent,
    EditButton,
    InputWrapper,
} from './styles'

export const ClienteArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [status, setStatus] = useState('Pendente')

    const [name, setName] = useState('Matheus Teixeira')
    const [cpf, setCpf] = useState('146.007.527-75')
    const [birthday, setBirthday] = useState('18/02/1993')
    const [phone1, setPhone1] = useState('(24) 9 9999-9999')
    const [phone2, setPhone2] = useState('')
    const [whatsapp, setWhatsapp] = useState('(24) 9 9999-9999')
    const [email, setEmail] = useState('matheus.teixeira7@gmail.com')
    const [cep, setCep] = useState('27521031')
    const [street, setStreet] = useState('Rua Santos Dumont')
    const [number, setNumber] = useState('299')
    const [complement, setComplement] = useState(
        'Casa com portão de ferro em frente ao Edifício Alcobaça'
    )
    const [neighborhood, setNeighborhood] = useState('Jardim Paulista')
    const [city, setCity] = useState('São Paulo')
    const [state, setState] = useState('SP')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(event.target.value)
    }

    const handleBirthdayChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBirthday(event.target.value)
    }

    const handlePhone1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone1(event.target.value)
    }

    const handlePhone2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone2(event.target.value)
    }

    const handleWhatsappChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setWhatsapp(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value)
    }

    const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(event.target.value)
    }

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value)
    }

    const handleNoNumber = () => {
        setNumber('S/N')
    }

    const handleComplementChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setComplement(event.target.value)
    }

    const handleNeighborhoodChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNeighborhood(event.target.value)
    }

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value)
    }

    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }

    const handleEdit = () => {}

    return (
        <Container>
            <PageTitle title="Cliente" />

            <Content>
                <h2>Dados pessoais</h2>

                <form>
                    <InputWrapper>
                        <div>
                            <label htmlFor="name">Nome completo</label>
                            <input
                                disabled={true}
                                name="name"
                                onChange={handleNameChange}
                                type="text"
                                value={name}
                            />
                        </div>

                        <div className="cpf">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                disabled={true}
                                name="cpf"
                                onChange={handleCpfChange}
                                type="text"
                                value={cpf}
                            />
                        </div>

                        <div className="birthday">
                            <label htmlFor="birthday">Data de nascimento</label>
                            <input
                                disabled={true}
                                name="birthday"
                                onChange={handleBirthdayChange}
                                type="text"
                                value={birthday}
                            />
                        </div>
                    </InputWrapper>

                    <InputWrapper>
                        <div className="phone1">
                            <label htmlFor="phone1">Telefone 1</label>
                            <input
                                disabled={true}
                                name="phone1"
                                onChange={handlePhone1Change}
                                type="text"
                                value={phone1}
                            />
                        </div>

                        <div className="phone2">
                            <label htmlFor="phone2">Telefone 2</label>
                            <input
                                disabled={true}
                                name="phone2"
                                onChange={handlePhone2Change}
                                type="text"
                                value={phone2}
                            />
                        </div>

                        <div className="whatsapp">
                            <label htmlFor="whatsapp">WhatsApp</label>
                            <input
                                disabled={true}
                                name="whatsapp"
                                onChange={handleWhatsappChange}
                                type="text"
                                value={whatsapp}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                disabled={true}
                                name="email"
                                onChange={handleEmailChange}
                                type="text"
                                value={email}
                            />
                        </div>
                    </InputWrapper>

                    <h2>Endereço</h2>

                    <InputWrapper>
                        <div className="cep">
                            <label htmlFor="cep">CEP</label>
                            <input
                                disabled={true}
                                name="cep"
                                onChange={handleCepChange}
                                type="text"
                                value={cep}
                            />
                        </div>

                        <div>
                            <label htmlFor="street">Rua</label>
                            <input
                                disabled={true}
                                name="street"
                                onChange={handleStreetChange}
                                type="text"
                                value={street}
                            />
                        </div>
                    </InputWrapper>

                    <InputWrapper>
                        <div className="number">
                            <label htmlFor="number">Número</label>
                            <input
                                disabled={true}
                                name="number"
                                onChange={handleNumberChange}
                                type="text"
                                value={number}
                            />
                        </div>

                        <div className="noNumber">
                            <input
                                disabled={true}
                                name="noNumber"
                                onChange={handleNoNumber}
                                type="checkbox"
                                value={number}
                            />
                            <label htmlFor="noNumber">Sem número</label>
                        </div>

                        <div>
                            <label htmlFor="complement">Complemento</label>
                            <input
                                disabled={true}
                                name="complement"
                                onChange={handleComplementChange}
                                type="text"
                                value={complement}
                            />
                        </div>
                    </InputWrapper>

                    <InputWrapper>
                        <div className="neighborhood">
                            <label htmlFor="neighborhood">Bairro</label>
                            <input
                                disabled={true}
                                name="neighborhood"
                                onChange={handleNeighborhoodChange}
                                type="text"
                                value={neighborhood}
                            />
                        </div>

                        <div>
                            <label htmlFor="city">Cidade</label>
                            <input
                                disabled={true}
                                name="city"
                                onChange={handleCityChange}
                                type="text"
                                value={city}
                            />
                        </div>

                        <div className="state">
                            <label htmlFor="state">UF</label>
                            <input
                                disabled={true}
                                name="state"
                                onChange={handleStateChange}
                                type="text"
                                value={state}
                            />
                        </div>
                    </InputWrapper>

                    <InputWrapper>
                        <div className="seller">
                            <label htmlFor="seller">Cadastrado por</label>
                            <input
                                disabled={true}
                                name="seller"
                                type="text"
                                value="Alberto Valentim"
                            />
                        </div>
                    </InputWrapper>
                </form>

                <footer>
                    <ChangeStatus
                        onClick={() => setIsOpen(!isOpen)}
                        activeStatus={status}
                    >
                        {status} <FiChevronDown />{' '}
                        <DropdownContent isOpen={isOpen}>
                            <ul>
                                <li
                                    onClick={() => {
                                        setStatus('Cancelado')
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    <span>Cancelado</span>
                                </li>
                                <li
                                    onClick={() => {
                                        setStatus('Pendente')
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    <span>Pendente</span>
                                </li>
                                <li
                                    onClick={() => {
                                        setStatus('Cadastrado')
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    <span>Cadastrado</span>
                                </li>
                                <li
                                    onClick={() => {
                                        setStatus('Efetivado')
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    <span>Efetivado</span>
                                </li>
                            </ul>
                        </DropdownContent>
                    </ChangeStatus>
                    <EditButton onClick={handleEdit}>
                        Editar informações
                    </EditButton>
                </footer>
            </Content>

            <Footer />
        </Container>
    )
}
