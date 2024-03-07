import { Poruka } from "@/lib/types"
import {
  Body,
  Html,
  Head,
  Tailwind,
  Text,
  Section,
  Row,
  Column,
  Container,
  Img,
  Link,
} from "@react-email/components"
import * as React from "react"

type PorukaProps = {
  poruka: string
}

const messageReceivedConfirmation = ({ poruka }: PorukaProps) => {
  const getCurrentDateFormatted = () => {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, "0") // Ensures two digits
    const month = String(today.getMonth() + 1).padStart(2, "0") // Adds 1 because months are 0-indexed, and ensures two digits
    const year = today.getFullYear()

    return `${day}/${month}/${year}`
  }

  const baseUrl = process.env.URL
    ? "https://${process.env.URL}"
    : "http://localhost:3001" // Use the dev server port

  return (
    <Html>
      <Head />
      <Body>
        <Tailwind>
          <Container>
            <Section className="bg-[#011e0e] px-14 py-6 text-[#e7e4e1]">
              <Row>
                <Column>
                  <Link href="https://anemona-natura.hr">
                    <Img
                      src={`${baseUrl}/assets-email/logo-email.png`}
                      alt="Anemona Natura Logo"
                      width="173"
                      height="38"
                    />
                  </Link>
                </Column>
                <Column align="right">
                  <Text style={text}>{getCurrentDateFormatted()}</Text>
                </Column>
              </Row>
            </Section>
            <Section className="bg-[#066437] px-14 py-8 text-[#e7e4e1]">
              <Row>
                <Column>
                  <Text style={text} className="text-3xl">
                    Primili smo vašu poruku!
                  </Text>
                </Column>
              </Row>
              <Row className="mt-4">
                <Column>
                  <Img
                    // src={`${baseUrl}/assets-email/check-email-optimized.png`}
                    src={`${baseUrl}/assets-email/check-email.png`}
                    alt="Ikona kvačice"
                    width="72"
                    height="57"
                  />
                </Column>
                <Column className="pl-10">
                  <Text style={text} className="text-lg">
                    Hvala Vam što ste nas kontaktirali. Ovim putem želimo
                    potvrditi da smo uspješno primili Vašu poruku. Naš tim će
                    obraditi Vaš upit i odgovoriti u najkraćem mogućem roku.{" "}
                    base url is: {baseUrl}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className="bg-[#DCD7D2] px-14 pb-12 pt-8 text-[#011e0e]">
              <Row>
                <Column>
                  <Text style={text} className="text-2xl font-semibold">
                    Kopija Vaše Poruke:
                  </Text>
                </Column>
                <Column>
                  <Section
                    align="right"
                    className="h-2 w-12 bg-[#011e0e]"
                  ></Section>
                </Column>
              </Row>
              <Text style={text} className="mt-6">
                <div dangerouslySetInnerHTML={{ __html: poruka }} />
              </Text>
            </Section>
            <Section className="bg-[#EBE8E6] px-14 text-[#011e0e]">
              <Text
                style={text}
                className="my-2 text-center text-xs font-semibold opacity-80"
              >
                Molimo ne odgovarajte na ovaj email
              </Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default messageReceivedConfirmation

const text = {
  margin: 0,
  fontSize: "1rem",
  fontFamily: '"Arial", "Halvetica", "sans-serif"',
}
