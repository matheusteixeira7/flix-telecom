import { Aside } from '@components/application/dashboard/aside'
import { Topnav } from '@components/application/dashboard/topnav'
import { ClienteArea } from '@components/pages/cliente/cliente-area'
import { Container } from '@styles/pages/dashboard/styles'
import type { NextPage } from 'next'

const Cliente: NextPage = () => {
    return (
        <Container>
            <Aside />
            <Topnav />
            <ClienteArea />
        </Container>
    )
}

export default Cliente
