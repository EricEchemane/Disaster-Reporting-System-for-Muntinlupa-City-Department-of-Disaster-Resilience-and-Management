import { Button, Container, CopyButton, Group, Text } from "@mantine/core";
import { IconArrowRight, IconPlayerPlay } from "@tabler/icons";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/muntinlupa-logo.png";
import heroImage from "../public/assets/hero-image.jpg";
import Link from "next/link";

export default function HomePage() {

  return <>
    <Head>
      <title> Disaster Resilience Department of Muntinlupa City </title>
    </Head>

    <Container pb={'xl'}>
      <Group position={'apart'} my={'md'}>
        <Group>
          <Image width={50} height={50} alt={'muntinlupa logo'} src={logo} />
          <h2>
            Disaster Resilience Department
          </h2>
        </Group>
        <Button color={'red'} rightIcon={<IconArrowRight />} variant={'filled'}>
          Report Incident
        </Button>
      </Group>

      <Group my={'md'} position={'apart'}>
        <Group>
          <Text size={'xl'}> Emergency Hotline: </Text>
          <CopyButton value={'137-175'} timeout={3000}>
            {({ copied, copy }) => (
              <Button radius={'xl'} color={copied ? 'teal' : 'green'} onClick={copy}>
                {copied ? '137-175 copied' : '137-175'}
              </Button>
            )}
          </CopyButton>
        </Group>
        <Link passHref href={'/how-to-submit-report'}>
          <Button rightIcon={<IconPlayerPlay />} variant={'light'} component='a'>
            Video Tutorial: How to submit a report?
          </Button>
        </Link>
      </Group>

      <Image alt="hero image" src={heroImage} style={{ borderRadius: "1rem" }} />
    </Container>
  </>;
}