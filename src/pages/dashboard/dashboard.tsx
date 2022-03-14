import { Aside } from '@components/application/dashboard/aside'
import { ContentArea } from '@components/application/dashboard/content-area'
import { Topnav } from '@components/application/dashboard/topnav'
import type { NextPage } from 'next'
import { Container } from './styles'

const Dashboard: NextPage = () => {
    return (
        <Container>
            <Aside />
            <Topnav />
            <ContentArea />
        </Container>
    )
}

export default Dashboard
