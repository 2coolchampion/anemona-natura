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
  Preview,
  Img,
} from "@react-email/components"
import * as React from "react"

const messageReceivedConfirmation = () => {
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

  // TODO: Add spacing
  // TODO: Broj telefona nije ispravan
  return (
    <Html>
      <Head />
      <Preview>
        Get your order summary, estimated delivery date and more
      </Preview>
      <Body>
        <Tailwind>
          <Container>
            <Section className="bg-[#011e0e] px-8 py-4 text-[#e7e4e1]">
              <Row>
                <Column>
                  <Img
                    src={`${baseUrl}/assets-email/logo-email.png`}
                    alt="Anemona Natura Logo"
                    width="173"
                    height="38"
                  />
                </Column>
                <Column align="right">
                  <Text style={text}>{getCurrentDateFormatted()}</Text>
                </Column>
              </Row>
            </Section>
            <Section className="bg-[#066437] px-8 py-4 text-[#e7e4e1]">
              <Row>
                <Column>
                  <Text style={text} className="text-3xl">
                    Primili smo vašu poruku!
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Img
                    // src={`${baseUrl}/assets-email/check-email-optimized.png`}
                    src={`${baseUrl}/assets-email/check-email.png`}
                    alt="Ikona kvačice"
                    width="72"
                    height="57"
                  />
                </Column>
                <Column className="pl-8">
                  <Text style={text}>
                    Ovo je samo obavjest da smo zaprimili vašu poruku, odgovor
                    stiže ćim nađemo vremena, ukoliko je hitno, nazovite na broj
                    telefona:{" "}
                    <span className="font-extrabold">084 382 312</span>
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className="bg-[#DCD7D2] px-8 py-4 text-[#011e0e]">
              <Row>
                <Column>
                  <Text style={text} className="text-2xl">
                    Poruka
                  </Text>
                </Column>
                <Column>
                  <Section
                    align="right"
                    className="h-2 w-12 bg-[#011e0e]"
                  ></Section>
                </Column>
              </Row>
              <Text style={text}>
                Primjer poruke jedne velike s složne, koristeći puno ectended
                latinskig znakova.
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
