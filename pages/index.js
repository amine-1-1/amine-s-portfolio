import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Engineering student
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mouhamed Amine Zaddem
          </Heading>
          <p>3rd year engineering student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I'm a software engineering student located in tunisa ,I have a serious passion
          about web development and dev ops.
          </Paragraph>
          <Paragraph>
          I am also an enterpreneur ,I co-founded <Link href="https://www.instagram.com/karhabti.app/?hl=fr" target="_blank">
          Karhabti </Link>
          a mobile application that helps user manage their cars 
          
        </Paragraph>
          <Paragraph>
          Well-organised person, problem solver, with high attention to detail. 
          Fan of Camping,Gaming ,TV series and English literature.
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Monastir, Tunisia.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Optiened my Bachelor degree in Mathematics 
        </BioSection>
        <BioSection>
          <BioYear>2017 to 2019</BioYear>
          Completed my undergradute in the Preparatory Institut of Engineering Studies inMonastir
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Studing in the National Engenirng School of Sousse (Eniso) 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ???
        </Heading>
        <Paragraph>
          Art, Music, Drawing, Camping
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/amine-1-1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @amineZd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mouhamed-amine-zaddem-281bb6191/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Linkdlin
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/404">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Contact me
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
