import { useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Container, Icon } from './styles'

export const ThemeButton = () => {
    const [theme, setTheme] = useState('dark')

    const handleClick = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <Container>
            <Icon>
                {theme === 'dark' ? (
                    <BsFillMoonFill onClick={() => handleClick()} />
                ) : (
                    <BsFillSunFill onClick={() => handleClick()} />
                )}
            </Icon>
        </Container>
    )
}
