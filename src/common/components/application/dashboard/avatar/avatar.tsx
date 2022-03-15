import Image from 'next/image'
import Link from 'next/link'
import avatar from 'src/../public/images/avatar.svg'
import { Container } from './styles'

export const Avatar = () => {
    return (
        <Link href="/" passHref>
            <Container>
                <Image src={avatar} alt="Avatar" height={50} width={50} />
            </Container>
        </Link>
    )
}
