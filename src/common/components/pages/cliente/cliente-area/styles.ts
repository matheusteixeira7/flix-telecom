import { darken } from 'polished'
import styled from 'styled-components'

interface IProps {
    activeStatus?: string
    isOpen?: boolean
}

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background_900};
    height: 100%;

    display: flex;
    overflow: auto;
    flex-direction: column;
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.background_700};

    display: flex;
    flex-direction: column;
    margin: 1.25rem;
    overflow: auto;
    padding: 1.25rem;
    border-radius: 10px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSize.text_xl};
        color: ${({ theme }) => theme.fontColor.title};
        font-weight: ${({ theme }) => theme.fontWeight.bold};

        margin-bottom: 2rem;

        &:not(:first-child) {
            margin-top: 2rem;
        }
    }

    h2,
    label {
        color: ${({ theme }) => theme.fontColor.title};
    }

    form {
        display: block;

        label {
            margin-bottom: 0.5rem;
        }

        input {
            background-color: ${({ theme }) => theme.colors.background_800};
            border-radius: 0.25rem;
            border: none;
            color: ${({ theme }) => theme.fontColor.title};
            font-size: ${({ theme }) => theme.fontSize.text_base};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
            padding: 1rem 1rem;

            &[type='text']:disabled {
                color: ${({ theme }) => theme.fontColor.text_gray_500};
            }
        }
    }

    footer {
        display: flex;
        justify-content: space-between;
    }
`

export const InputWrapper = styled.div`
    display: flex;

    div {
        display: flex;
        flex-direction: column;
        width: 100%;

        &:not(:last-child) {
            margin-right: 1rem;
        }

        &.cpf,
        &.birthday {
            width: 9rem;
        }

        &.phone1,
        &.phone2,
        &.whatsapp {
            width: 11rem;
        }

        &.cep {
            width: 8rem;
        }

        &.number {
            width: 9rem;
        }

        &.noNumber {
            display: flex;
            align-items: center;
            flex-direction: row;
            width: 12rem;
            padding-top: 1.5rem;

            label {
                padding-top: 0.5rem;
                margin-left: 1rem;
            }
        }

        &.state {
            width: 6rem;
        }

        &.seller {
            width: 20rem;
        }
    }

    &:not(:nth-child(1)) {
        margin-top: 2rem;
    }
`

export const ChangeStatus = styled.div<IProps>`
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.background_800};
    width: 10rem;
    border-radius: 0.25rem;

    display: flex;
    justify-content: space-between;

    color: ${({ theme }) => theme.fontColor.title};

    margin: 2rem 0 0;

    cursor: pointer;

    position: relative;
`

export const DropdownContent = styled.div<IProps>`
    border: 1px solid ${({ theme }) => theme.colors.background_900};
    cursor: pointer;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    width: 10rem;
    bottom: 0;
    left: 10.2rem;
    z-index: 1;

    background-color: ${({ theme }) => theme.colors.background_800};
    font-size: ${({ theme }) => theme.fontSize.text_base};
    color: ${({ theme }) => theme.fontColor.title};
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    ul {
        list-style: none;

        li {
            span {
                cursor: pointer;
                display: block;
                padding: 1rem;
            }

            &:hover {
                background-color: ${({ theme }) => theme.colors.background_700};
                transition: all 0.2s ease-in-out;
            }
        }
    }

    span {
        padding: 0.5rem 0;
    }

    input {
        width: 13rem;
    }
`

export const EditButton = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.success_background};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.success};
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    padding: 1rem 2rem;

    align-self: flex-end;

    cursor: pointer;

    &:active {
        background-color: ${(props) =>
            darken(0.5, props.theme.colors.success_background)};
        color: ${(props) => darken(0.5, props.theme.colors.success)};
        transition: all 0.1s ease-in-out;
    }
`
