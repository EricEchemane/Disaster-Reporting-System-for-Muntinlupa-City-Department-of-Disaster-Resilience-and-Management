import { Button, Container, CopyButton, Group, Text, Title } from "@mantine/core";
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
          <Title order={3}>
            Disaster Resilience Department
          </Title>
        </Group>
        <Link passHref href={'/report-incident'}>
          <Button color={'red'} rightIcon={<IconArrowRight />} variant={'filled'} component={'a'}>
            Report Incident
          </Button>
        </Link>
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
          <Button rightIcon={<IconPlayerPlay />} variant={'light'} component={'a'}>
            Video Tutorial: How to submit a report?
          </Button>
        </Link>
      </Group>

      <Image alt="hero image" src={heroImage} style={{ borderRadius: "1rem" }} />
    </Container>
  </>;
}