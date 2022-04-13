import { Aside } from '@components/application/dashboard/aside'
import { Topnav } from '@components/application/dashboard/topnav'
import SingleClient from '@components/pages-components/single-cliente/single-client'
import { Container } from '@styles/pages-styles/dashboard/styles'
import { GetServerSideProps } from 'next'
import { api } from 'src/common/utils/services/api'

const Cliente = ({ client }) => {
    return (
        <Container>
            <Aside />
            <Topnav />
            <SingleClient client={client} />
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    req,
    params,
}) => {
    const { id } = params
    const result = await api.get(`/clients/${id}`)
    const client = result.data

    return {
        props: { client },
    }
}

export default Cliente
