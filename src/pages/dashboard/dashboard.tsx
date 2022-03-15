import { Aside } from '@components/application/dashboard/aside'
import { ContentArea } from '@components/application/dashboard/content-area'
import { Topnav } from '@components/application/dashboard/topnav'
import { Container } from '@styles/pages/dashboard/styles'
import type { NextPage } from 'next'

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
