import { Button, Container, CopyButton, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconPlayerPlay } from "@tabler/icons";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/muntinlupa-logo.png";
import Link from "next/link";

import heroImage from "../public/assets/hero-image.jpg";
import feedImage0 from "../public/assets/feeds/0.jpg";
import feedImage1 from "../public/assets/feeds/1.jpg";
import feedImage2 from "../public/assets/feeds/2.jpg";
import feedImage3 from "../public/assets/feeds/3.jpg";
import feedImage4 from "../public/assets/feeds/4.jpg";
import feedImage5 from "../public/assets/feeds/5.jpg";

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
          <Button color={'red'} rightIcon={<IconArrowRight />} variant={'outline'} component={'a'}>
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
          <Button rightIcon={<IconPlayerPlay />} variant={'subtle'} component={'a'}>
            Video Tutorial: How to submit a report?
          </Button>
        </Link>
      </Group>

      <Image alt="hero image" src={heroImage} style={{ borderRadius: "1rem" }} />

      <Stack my={'xl'} spacing={50}>
        <Stack>
          <Title order={5}>
            Mula sa Pedro E. Diaz High School ang ating Little Department Head for the Day na si Ms. Valerie. Kaniyang binisita ang mga pasilidad ng Muntinlupa City Department of Disaster Resilience and Management isa sa kaniyang pinuntahan ay ang Logistics Room kung saan nakalagak ang mga Rescue Equipment ng Pamahalaang Lungsod ng Muntinlupa.
          </Title>
          <Image alt="hero image" src={feedImage0} style={{ borderRadius: "1rem" }} />
        </Stack>

        <Stack>
          <Title order={5}>
            HEAT INDEX REPORT <br />
            Thursday, 10 Nov 2022 (2PM) <br />
            Heat Index: 35°C <br />
            Temperature: 28.98°C <br />
            Relative Humidity: 82.47% <br /> <br />
            Lubhang Pag-iingat: Posible ang heat cramps at heat exhaustion kung matagal ang exposure sa init. Ang patuloy na aktibidad ay maaaring magresulta sa heat stroke. Palagiang uminom ng tubig at magdala ng payong o anumang pananggalang sa init kapag lalabas ng bahay o opisina.
          </Title>
          <Image alt="hero image" src={feedImage1} style={{ borderRadius: "1rem" }} />
        </Stack>

        <Stack>
          <Title order={5}>
            DROP, COVER, AND HOLD!!!! <br /> <br />
            Nakiisa sa National Simultaneous Earthquake Drill na ginanap ngayong ika-9 ng Umaga ang mga mamamayan at mga kawani ng Pamahalaang Lungsod ng Muntinlupa sa pangunguna ng Muntinlupa City Department of Disaster Resilience and Management <br /><br />
            Kaalinsabay nito, ang maigting na pagpapaalala na maging handa at #AlertoMuntinlupeño sakaling yanigin ng lindol ang Metro Manila.
          </Title>
          <Image alt="hero image" src={feedImage2} style={{ borderRadius: "1rem" }} />
        </Stack>

        <Stack>
          <Title order={5}>
            Bilang pagdiriwang ng Boys and Girls Week gumanap bilang Little Department Head ng Department of Disaster Resilience and Management si Mr. Mcc Chlowe Halog, siniyasat ni Sir. Halog ang buong Departamento at inalam ang mga nakatalagang tungkulin sa bawat Dibisyon na nasasakupan ng Departamento. Mahusay siyang nakitungo sa mga kawani ng DDRM Totoong #Nakakaproud ang mga #BatangMunti.
          </Title>
          <Image alt="hero image" src={feedImage3} style={{ borderRadius: "1rem" }} />
        </Stack>

        <Stack>
          <Title order={5}>
            NOVEMBER 1, 2022 | UNDAS 2022 <br /><br />
            Patuloy na naka #AlertoMuntinlupeño ang DDRM sa pakikipagtulungan ng PNP-MUNTINLUPA, CSO, MTMB, CADO, ESC, POSO, BFP, CHO at mga Barangay sa pagbabantay sa mga bibisita sa kanilang mga mahal sa buhay na pinagpahinga ngayong panahon ng #Undas2022.
            Pinapaalalahanan ang bawat bibisita na sundin ang Health and Security Protocols na ipinatutupad sa bawat Cemetery Stations sa ating lungsod, kabilang na rito ang pagbabawal ng pagdadala ng mga sumusunod: <br /><br />
            1. Alak<br />
            2. Mga Patalim<br />
            3. Playing Cards at;<br />
            4. Loudspeakers<br />
            5. Over-Night sa mga puntod at Musuleo<br /><br />
            Ang oras po ng pagdalaw ay magmumula sa ika-6 ng umaga hanggang ika-6 ng hapon ngayong Nobyembre 1, 2022.<br /><br />
            Tumawag sa ating EMERGENCY HOTLINE: 137-175 kung kayo ay nakasaksi ng aksidente, krimen o anumanh sakuna dulot ng kalamidad.<br /><br />
            Patuloy na maging mapagmasid dahil dapat laging alisto!
          </Title>
          <Image alt="hero image" src={feedImage4} style={{ borderRadius: "1rem" }} />
        </Stack>

        <Stack>
          <Title order={5}>
            OCTOBER 29, 2022 | DISASTER RESPONSE <br /><br />
            Narito ang ilan sa mga nirespodehan ng Department of Disaster Resilience and Management (DDRM) katuwang ang iba’t ibang ahensiya ng gobyerno tulad ng:<br /><br />
            1. ESC<br />
            2. EPNRO<br />
            3. Engineering<br />
            4. Philippine Red Cross<br />
            5. Meralco<br />
            6. City Health Office <br />
            7. City Security Office <br />
            8. Bureau of Fire Protection <br />
            9. PNP Maritime <br />
            10. PNP - Muntinlupa <br />
            11. Lake Management Office <br />
            12. Philippine Coast Guard <br />
            13. Muntinlupa Traffic Management Bureau <br />
            14. Social Service Department <br />
            15. City Veterinary Office <br />
            16. United Kabalikat Civicom<br /><br />

            Evacuation assistance: <br />
            1. General Service Office <br />
            2. Gender and Development <br />
            3. DAPCO <br />
            4. Mayor’s Office <br />
            5. CADO <br />
            6. MTMB <br />
            7. OSCA <br /><br />
            Kaya kung kayo ay nakasaksi ng aksidente o may bantay ng sakuna tulad ng mga kalamidad tumawag lamang sa numerong 137-175 para sa agarang aksyon sa inyong mga pangangailangan. Ang mahalaga ay maging alisto dahil dapat laging “ALERTO MUNTINLUPEÑO”.
          </Title>
          <Image alt="hero image" src={feedImage5} style={{ borderRadius: "1rem" }} />
        </Stack>
      </Stack>
    </Container>
  </>;
}