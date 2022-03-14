import Link from 'next/link'
import { AiFillHome, AiFillPlusCircle, AiOutlineWifi } from 'react-icons/ai'
import { BiTv } from 'react-icons/bi'
import { BsFillFilePersonFill, BsFillPersonFill } from 'react-icons/bs'
import { FaMobileAlt } from 'react-icons/fa'
import { GiRank3 } from 'react-icons/gi'
import { Item, LinkName, LinkWrapper, List } from './styles'

export const Navlist = () => {
    return (
        <List>
            <Item>
                <Link href="/dashboard" passHref>
                    <LinkWrapper>
                        <AiFillHome fontSize="1.5rem" />
                        <LinkName>Dashboard</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>

            <Item>
                <Link href="/cadastrar" passHref>
                    <LinkWrapper>
                        <AiFillPlusCircle fontSize="1.5rem" />
                        <LinkName>Cadastrar</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>

            <Item>
                <Link href="/clientes" passHref>
                    <LinkWrapper>
                        <BsFillPersonFill fontSize="1.5rem" />
                        <LinkName>Clientes</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>

            <Item>
                <Link href="/ranking-vendedores" passHref>
                    <LinkWrapper>
                        <GiRank3 fontSize="1.5rem" />
                        <LinkName>Ranking vendedores</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>

            <Item>
                <Link href="/internet" passHref>
                    <LinkWrapper>
                        <AiOutlineWifi fontSize="1.5rem" />
                        <LinkName>Internet</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>

            <Item>
                <Link href="/movel" passHref>
                    <LinkWrapper>
                        <FaMobileAlt fontSize="1.5rem" />
                        <LinkName>Móvel</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>

            <Item>
                <Link href="/tv" passHref>
                    <LinkWrapper>
                        <BiTv fontSize="1.5rem" />
                        <LinkName>TV</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>

            <Item>
                <Link href="/vendedores" passHref>
                    <LinkWrapper>
                        <BsFillFilePersonFill fontSize="1.5rem" />
                        <LinkName>Vendedores</LinkName>
                    </LinkWrapper>
                </Link>
            </Item>
        </List>
    )
}
