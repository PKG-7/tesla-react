import { ReactNode } from 'react'
import styled from 'styled-components'
import Section from './Section'
import { ISection } from '../../AppData/Section/Section'
import React from 'react'

export default function Home({ data }: { data: ISection[] }) {
    const setHome = (): ReactNode => {
        return data.map((item, index: number) => {
            return <Section key={index} {...item} />
        })
    }
    return <Container>{setHome()}</Container>
}

const Container = styled.div`
    height: 100vh;
`
