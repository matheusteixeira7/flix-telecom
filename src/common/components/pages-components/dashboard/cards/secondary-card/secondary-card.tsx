import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from 'recharts'
import {
    Chart,
    Container,
    Dot,
    Header,
    Plan,
    PlanHeader,
    PlanName,
    PlanNumber,
    Plans,
} from './styles'

const data = [
    { name: 'Jan', Internet: 153, Móvel: 323, TV: 123 },
    { name: 'Fev', Internet: 535, Móvel: 322, TV: 32 },
    { name: 'Mar', Internet: 123, Móvel: 423, TV: 242 },
    { name: 'Abr', Internet: 312, Móvel: 132, TV: 332 },
    { name: 'Mai', Internet: 646, Móvel: 423, TV: 535 },
    { name: 'Jun', Internet: 321, Móvel: 523, TV: 231 },
    { name: 'Jul', Internet: 231, Móvel: 434, TV: 123 },
    { name: 'Ago', Internet: 321, Móvel: 423, TV: 111 },
    { name: 'Set', Internet: 111, Móvel: 523, TV: 98 },
    { name: 'Out', Internet: 723, Móvel: 623, TV: 32 },
    { name: 'Nov', Internet: 122, Móvel: 753, TV: 123 },
    { name: 'Dez', Internet: 88, Móvel: 323, TV: 323 },
]

export const SecondaryCard = () => {
    return (
        <Container>
            <Header>
                <span>Estatísticas de vendas</span>

                <Plans>
                    <Plan>
                        <PlanHeader>
                            <Dot color="yellow" />
                            <PlanName>Internet</PlanName>
                        </PlanHeader>

                        <PlanNumber>4123</PlanNumber>
                    </Plan>

                    <Plan>
                        <PlanHeader>
                            <Dot color="purple" />
                            <PlanName>Móvel</PlanName>
                        </PlanHeader>

                        <PlanNumber>2323</PlanNumber>
                    </Plan>

                    <Plan>
                        <PlanHeader>
                            <Dot color="green" />
                            <PlanName>TV</PlanName>
                        </PlanHeader>

                        <PlanNumber>1232</PlanNumber>
                    </Plan>
                </Plans>
            </Header>

            <Chart>
                <ResponsiveContainer width="100%" height={120}>
                    <LineChart
                        width={550}
                        height={250}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20 }}
                    >
                        <Line
                            type="monotone"
                            dataKey="Internet"
                            stroke="#FFB648"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="Móvel"
                            stroke="#7433FF"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="TV"
                            stroke="#4BDE97"
                            dot={false}
                        />
                        <CartesianGrid
                            stroke="#33334B"
                            horizontal={false}
                            vertical={false}
                        />
                        <XAxis dataKey="name" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </Chart>
        </Container>
    )
}
