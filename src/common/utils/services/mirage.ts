import { createServer } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
    let server = createServer({
        environment,

        // models: {
        //   movie: Model,
        // },

        // seeds(server) {
        //   server.create("movie", { name: "Inception", year: 2010 })
        //   server.create("movie", { name: "Interstellar", year: 2014 })
        //   server.create("movie", { name: "Dunkirk", year: 2017 })
        // },

        routes() {
            this.get('/api/clients', () => {
                return [
                    {
                        id: '1',
                        name: 'Matheus Teixeira',
                        seller: 'Roberto Fonseca',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg',
                        city: 'Resende',
                        createdAt: '05/04/2022',
                        status: 'Cadastrado',
                    },
                    {
                        id: '2',
                        name: 'Matheus Teixeira',
                        seller: 'Marcos da Rocha',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2019/03/17/12/57/phone-4060860_960_720.jpg',
                        city: 'Itatiaia',
                        createdAt: '05/04/2022',
                        status: 'Pendente',
                    },
                    {
                        id: '3',
                        name: 'Matheus Teixeira',
                        seller: 'Ricardo Assunção',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg',
                        city: 'Porto Real',
                        createdAt: '05/04/2022',
                        status: 'Cancelado',
                    },
                    {
                        id: '4',
                        name: 'Matheus Teixeira',
                        seller: 'Marisa Miranda',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916_960_720.jpg',
                        city: 'Quatis',
                        createdAt: '05/04/2022',
                        status: 'Efetivado',
                    },
                    {
                        id: '5',
                        name: 'Matheus Teixeira',
                        seller: 'Roberto Fonseca',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg',
                        city: 'Resende',
                        createdAt: '2022-04-03T23:00:42.502Z',
                        status: 'Cadastrado',
                    },
                    {
                        id: '6',
                        name: 'Matheus Teixeira',
                        seller: 'Marcos da Rocha',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2019/03/17/12/57/phone-4060860_960_720.jpg',
                        city: 'Itatiaia',
                        createdAt: '2022-04-02T23:00:42.502Z',
                        status: 'Pendente',
                    },
                    {
                        id: '7',
                        name: 'Matheus Teixeira',
                        seller: 'Ricardo Assunção',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg',
                        city: 'Porto Real',
                        createdAt: '2022-04-02T23:00:42.502Z',
                        status: 'Cancelado',
                    },
                ]
            })
            this.passthrough()
        },
    })

    return server
}
