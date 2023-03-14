import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { motion } from 'framer-motion'
import { ISection } from '../../AppData/Section/Section'
import React from 'react'

export default function Section({
    title,
    description,
    backgroundImg,
    leftBtnText,
    rightBtnText,
}: ISection) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton animate={{ x: -20 }} whileHover={{ scale: 1.1 }}>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && (
                            <RightButton
                                animate={{ x: -20 }}
                                whileHover={{ scale: 1.1 }}
                                drag
                            >
                                {rightBtnText}
                            </RightButton>
                        )}
                    </ButtonGroup>
                </Fade>

                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical alignment
    align-items: center; //horizontal
`

const ItemText = styled.div`
    font-size: 20px;
    padding-top: 15vh;
    text-align: center;

    p {
        font-size: 14px;
    }
`

const ButtonGroup = styled(motion.div)`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled(motion.div)`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.95;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``
