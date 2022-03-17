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
    Cities,
    City,
    CityHeader,
    CityName,
    CityNumber,
    Container,
    Dot,
    Header,
} from './styles'

const data = [
    { name: 'Jan', Resende: 600, Itatiaia: 323, TV: 2400 },
    { name: 'Fev', Resende: 233, Itatiaia: 322, TV: 1232 },
    { name: 'Mar', Resende: 524, Itatiaia: 423, TV: 1232 },
    { name: 'Abr', Resende: 824, Itatiaia: 132, TV: 1232 },
    { name: 'Mai', Resende: 123, Itatiaia: 423, TV: 1232 },
    { name: 'Jun', Resende: 353, Itatiaia: 523, TV: 1232 },
    { name: 'Jul', Resende: 656, Itatiaia: 434, TV: 1232 },
    { name: 'Ago', Resende: 323, Itatiaia: 423, TV: 1232 },
    { name: 'Set', Resende: 412, Itatiaia: 523, TV: 1232 },
    { name: 'Out', Resende: 512, Itatiaia: 623, TV: 1232 },
    { name: 'Nov', Resende: 232, Itatiaia: 753, TV: 1232 },
    { name: 'Dez', Resende: 123, Itatiaia: 323, TV: 1232 },
]

export const MainCard = () => {
    return (
        <Container>
            <Header>
                <span>Estatísticas de vendas</span>

                <Cities>
                    <City>
                        <CityHeader>
                            <Dot color="green" />
                            <CityName>Resende</CityName>
                        </CityHeader>

                        <CityNumber>4123</CityNumber>
                    </City>

                    <City>
                        <CityHeader>
                            <Dot color="purple" />
                            <CityName>Itatiaia</CityName>
                        </CityHeader>

                        <CityNumber>2323</CityNumber>
                    </City>
                </Cities>
            </Header>

            <Chart>
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                        width={550}
                        height={120}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20 }}
                    >
                        <Line
                            type="monotone"
                            dataKey="Resende"
                            stroke="#4BDE97"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="Itatiaia"
                            stroke="#7433FF"
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
