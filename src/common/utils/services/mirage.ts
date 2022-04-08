import { createServer } from 'miragejs'
import { v4 as uuid } from 'uuid'

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
                        id: uuid(),
                        name: 'Matheus Teixeira',
                        seller: 'Roberto Fonseca',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg',
                        city: 'Resende',
                        createdAt: '05/04/2022',
                        status: 'Cadastrado',
                    },
                    {
                        id: uuid(),
                        name: 'Samara Miranda',
                        seller: 'Marcos da Rocha',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2019/03/17/12/57/phone-4060860_960_720.jpg',
                        city: 'Itatiaia',
                        createdAt: '05/04/2022',
                        status: 'Pendente',
                    },
                    {
                        id: uuid(),
                        name: 'Samara Miranda',
                        seller: 'Ricardo Assunção',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg',
                        city: 'Porto Real',
                        createdAt: '05/04/2022',
                        status: 'Cancelado',
                    },
                    {
                        id: uuid(),
                        name: 'Samara Miranda',
                        seller: 'Ricardo Assunção',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg',
                        city: 'Porto Real',
                        createdAt: '05/04/2022',
                        status: 'Cancelado',
                    },
                    {
                        id: uuid(),
                        name: 'Roberto Miranda',
                        seller: 'Ricardo Assunção',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg',
                        city: 'Porto Real',
                        createdAt: '05/04/2022',
                        status: 'Cancelado',
                    },
                    {
                        id: uuid(),
                        name: 'Samara Miranda',
                        seller: 'Ricardo Assunção',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg',
                        city: 'Porto Real',
                        createdAt: '04/04/2022',
                        status: 'Cadastrado',
                    },
                    {
                        id: uuid(),
                        name: 'Ralfen Teixeira',
                        seller: 'Marisa Miranda',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916_960_720.jpg',
                        city: 'Quatis',
                        createdAt: '05/04/2022',
                        status: 'Efetivado',
                    },
                    {
                        id: uuid(),
                        name: 'Ismael Ribeiro',
                        seller: 'Roberto Fonseca',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg',
                        city: 'Resende',
                        createdAt: '04/04/2022',
                        status: 'Cadastrado',
                    },
                    {
                        id: uuid(),
                        name: 'Marcio Pensabem',
                        seller: 'Marcos da Rocha',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2019/03/17/12/57/phone-4060860_960_720.jpg',
                        city: 'Itatiaia',
                        createdAt: '04/04/2022',
                        status: 'Pendente',
                    },
                    {
                        id: uuid(),
                        name: 'Rodrigo Otávio',
                        seller: 'Ricardo Assunção',
                        sellerPicture:
                            'https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg',
                        city: 'Porto Real',
                        createdAt: '03/04/2022',
                        status: 'Cancelado',
                    },
                ]
            })
            this.passthrough()
        },
    })

    return server
}
