import { Aside } from '@components/application/dashboard/aside'
import { Topnav } from '@components/application/dashboard/topnav'
import { ClientesArea } from '@components/pages/clientes/clientes-area'
import { Container } from '@styles/pages/dashboard/styles'
import type { NextPage } from 'next'

const Clientes: NextPage = () => {
    return (
        <Container>
            <Aside />
            <Topnav />
            <ClientesArea />
        </Container>
    )
}

export default Clientes
