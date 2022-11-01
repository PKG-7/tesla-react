import styled from 'styled-components';
import Section from './Section';

export default function Home() {
  //
  return (
    <Container>
      <Section
        title='Model 3'
        description='Закажите онлайн для бесконтактной доставки'
        backgroundImg='model-3.jpg'
        leftBtnText='Индивидуальный заказ'
        rightBtnText='Автомобили в наличии'
      />
      <Section
        title='Model Y'
        description='Закажите онлайн для бесконтактной доставки'
        backgroundImg='model-y.jpg'
        leftBtnText='Индивидуальный заказ'
        rightBtnText='Автомобили в наличии'
      />
      <Section
        title='Model S'
        description='Закажите онлайн для бесконтактной доставки'
        backgroundImg='model-s.jpg'
        leftBtnText='Индивидуальный заказ'
        rightBtnText='Автомобили в наличии'
      />
      <Section
        title='Model X'
        description='Закажите онлайн для бесконтактной доставки'
        backgroundImg='model-x.jpg'
        leftBtnText='Индивидуальный заказ'
        rightBtnText='Автомобили в наличии'
      />
      <Section
        title='Солнечные панели'
        description='Самые низкие цены на солнечные панели в России'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Заказать сейчас'
        rightBtnText='Узнать больше'
      />
      <Section
        title='Солнечная крыша'
        description='Получайте чистую энергию с вашей крыши'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Заказать сейчас'
        rightBtnText='Узнать больше'
      />
      <Section
        title='Аксессуары'
        backgroundImg='accessories.jpg'
        leftBtnText='Заказать сейчас'
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
