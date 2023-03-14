import content from '*.png'
import model3 from '../../public/images/model-3.jpg'
import modelY from '../../public/images/model-y.jpg'
import modelS from '../../public/images/model-s.jpg'
import modelX from '../../public/images/model-x.jpg'
import solarPanel from '../../public/images/solar-panel.jpg'
import solarRoof from '../../public/images/solar-roof.jpg'
import accessories from '../../public/images/accessories.jpg'

export interface ISection {
    title: string
    description: string
    backgroundImg: typeof content
    leftBtnText: string
    rightBtnText: string
}

export const SectionData: ISection[] = [
    {
        title: 'Model 3',
        description: 'Закажите онлайн для бесконтактной доставки',
        leftBtnText: 'Индивидуальный заказ',
        rightBtnText: 'Автомобили в наличии',
        backgroundImg: model3,
    },
    {
        title: 'Model Y',
        description: 'Закажите онлайн для бесконтактной доставки',
        backgroundImg: modelY,
        leftBtnText: 'Индивидуальный заказ',
        rightBtnText: 'Автомобили в наличии',
    },
    {
        title: 'Model S',
        description: 'Закажите онлайн для бесконтактной доставки',
        backgroundImg: modelS,
        leftBtnText: 'Индивидуальный заказ',
        rightBtnText: 'Автомобили в наличии',
    },
    {
        title: 'Model X',
        description: 'Закажите онлайн для бесконтактной доставки',
        backgroundImg: modelX,
        leftBtnText: 'Индивидуальный заказ',
        rightBtnText: 'Автомобили в наличии',
    },
    {
        title: 'Солнечные панели',
        description: 'Самые низкие цены на солнечные панели в России',
        backgroundImg: solarPanel,
        leftBtnText: 'Заказать сейчас',
        rightBtnText: 'Узнать больше',
    },
    {
        title: 'Солнечная крыша',
        description: 'Получайте чистую энергию с вашей крыши',
        backgroundImg: solarRoof,
        leftBtnText: 'Заказать сейчас',
        rightBtnText: 'Узнать больше',
    },
    {
        title: 'Аксессуары',
        backgroundImg: accessories,
        leftBtnText: 'Заказать сейчас',
        rightBtnText: '',
        description: '',
    },
]
