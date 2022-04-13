import { Aside } from '@components/application/dashboard/aside'
import { Topnav } from '@components/application/dashboard/topnav'
import { DashboardArea } from '@components/pages-components/dashboard/dashboard-area'
import { Container } from '@styles/pages-styles/dashboard/styles'
import type { NextPage } from 'next'

const Dashboard: NextPage = () => {
    return (
        <Container>
            <Aside />
            <Topnav />
            <DashboardArea />
        </Container>
    )
}

export default Dashboard
