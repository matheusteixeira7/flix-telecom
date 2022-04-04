import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'
import {
    Average,
    Chart,
    Container,
    Header,
    NewClientsNumber,
    NewClientWrapper,
    Title,
} from './styles'

const data = [
    {
        name: 'Page A',
        uv: 150,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 110,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 200,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 100,
        pv: 3908,
        amt: 2000,
    },
]

export const AsideCard1 = () => {
    return (
        <Container>
            <Header>
                <NewClientWrapper>
                    <Title>Novos Clientes</Title>
                    <Average>28/dia média</Average>
                </NewClientWrapper>

                <NewClientsNumber>+575</NewClientsNumber>
            </Header>

            <Chart>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#ffffff"
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="99%"
                                    stopColor="#ffffff"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid horizontal={false} vertical={false} />
                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#ffffff"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Chart>
        </Container>
    )
}
