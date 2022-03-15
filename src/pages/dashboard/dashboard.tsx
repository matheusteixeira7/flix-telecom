import { ContentArea } from '@components/application/dashboard-page/content-area'
import { Aside } from '@components/application/dashboard/aside'
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
