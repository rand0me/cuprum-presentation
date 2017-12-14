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
  Link,
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
                At its simplest, <br/>
                Ethereum is an open software platform based on blockchain technology that enables developers to build and deploy decentralized applications.
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
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24">
            <path fill="#ff7b00" d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.997-3.826 1.968-5.513.912-1.585 1.774-3.083 1.774-4.753 0-3.108-2.517-4.734-5.004-4.734-2.483 0-4.996 1.626-4.996 4.734 0 1.67.862 3.168 1.774 4.753.971 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.753.341h-1.093c-.288 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-2.182-11.123l3.633-5.536h-2.113l1.05-3.463-3.794 5.463h2.302l-1.078 3.536z"/>
          </svg>
          <Heading size={6} textColor="primary" caps fit>
            The Idea
          </Heading>
          <Text textColor="tertiary" >
            <S type="italic">Do more, for less</S>
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Do more, for less
          </Heading>
          <List textColor="tertiary">
            <ListItem>Take payments in USD</ListItem>
            <ListItem>Payout to publishers in ETH</ListItem>
            <ListItem>???</ListItem>
            <ListItem>PROFIT!</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" fit caps>
            What we done
          </Heading>
          <List textColor="tertiary">
            <ListItem><Link href="https://cuprum.io/" target="_blank" textColor="primary"><S type="underline">Landing page</S></Link></ListItem>
            <ListItem>This slides</ListItem>
            <ListItem>Ad campaign which brought 5 interested persons</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
