// Import React
import React from 'react';
import logo from "./logo.png";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Layout,
  Fill,
  ListItem,
  List,
  Slide,
  Text,
  S,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#ff7b00',
    secondary: 'black',
    tertiary: 'white',
    quartenary: '#CECECE',
  },
  {
    primary: 'Lato',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading fit textColor="secondary">
            <Image src={ logo } alt="Cuprum" />
          </Heading>
          <Text textColor="tertiary" textFont="secondary" fit>
            Revolutionary blockchain driven ads provider
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={2} caps bold>Ethereum</Heading>
          <Appear>
            <BlockQuote>
                <Text size={ 6 } textColor="tertiary">
                    <S type="italic">
                      is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.
                    </S>
                </Text>
                <Cite textColor="secondary">https://www.ethereum.org/</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} caps bold textColor="secondary" caps>
            Ethereum
          </Heading>
          <Appear>
            <BlockQuote>
              <Text size={6} textColor="primary">
                At its simplest, Ethereum is an open software platform based on blockchain technology that enables developers to build and deploy decentralized <br/> applications.
              </Text>
              <Cite textColor="secondary">https://blockgeeks.com/</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill>
              <Image src="https://www.ethereum.org/images/explain-03.gif" alt="Ethereum"/>
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary" caps>
                Features
              </Heading>
              <List>
                <ListItem>Immutability</ListItem>
                <ListItem>Corruption proof</ListItem>
                <ListItem>Secure</ListItem>
                <ListItem>Zero downtime</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps fit>
            Cuprum
          </Heading>
          <Text textColor="tertiary" >
            - uses smart contracts to provide next-generation advertising services
          </Text>
        </Slide>
      </Deck>
    );
  }
}
