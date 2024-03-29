import {
  Body,
  Html,
  Head,
  Font,
  Tailwind,
  Text,
  Section,
  Row,
  Column,
  Container,
  Link,
  Img,
} from "@react-email/components"
import * as React from "react"
import { Poruka } from "../lib/types"

const Email = ({ ime, email, tel, poruka }: Poruka) => {
  const getCurrentDateFormatted = () => {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, "0") // Ensures two digits
    const month = String(today.getMonth() + 1).padStart(2, "0") // Adds 1 because months are 0-indexed, and ensures two digits
    const year = today.getFullYear()

    return `${day}/${month}/${year}`
  }

  const baseUrl = process.env.URL
    ? `${process.env.URL}`
    : "http://localhost:3001" // Use the dev server port

  return (
    <Html lang="hr">
      <Head>
        {/* Inter font weight 400 - latin */}
        <Font
          fontFamily="Inter"
          fallbackFontFamily={["Arial", "Helvetica", "sans-serif"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        {/* Inter font weight 400 - latin-ext */}
        <Font
          fontFamily="Inter"
          fallbackFontFamily={["Arial", "Helvetica", "sans-serif"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        {/* Inter font weight 800 - latin */}
        <Font
          fontFamily="Inter"
          fallbackFontFamily={["Arial", "Helvetica", "sans-serif"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={800}
          fontStyle="normal"
        />
        {/* Inter font weight 800 - latin-ext */}
        <Font
          fontFamily="Inter"
          fallbackFontFamily={["Arial", "Helvetica", "sans-serif"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2",
            format: "woff2",
          }}
          fontWeight={800}
          fontStyle="normal"
        />
      </Head>
      <Body>
        <Tailwind>
          <Container>
            <Section className="bg-[#011e0e] px-14 py-8 text-white">
              <Row>
                {" "}
                <Link href="https://anemona-natura.hr">
                  <Img
                    src={`${baseUrl}/assets-email/logo-email.png`}
                    alt="Anemona Natura Logo"
                    width="173"
                    height="38"
                  />
                </Link>
              </Row>
              <Row className="mt-4">
                <Column>
                  <Text style={text} className="mb-4 text-[#e7e4e1]">
                    {email}
                  </Text>
                  <Text
                    style={text}
                    className="text-xl font-extrabold text-[#e7e4e1]"
                  >
                    {tel}
                  </Text>
                </Column>
                <Column style={tableCell} align="right">
                  <Text style={text} className="mb-4 text-[#e7e4e1]">
                    {getCurrentDateFormatted()}
                  </Text>
                  <Text style={text} className="text-sm text-[#e7e4e1]">
                    {ime}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className="bg-[#dcd7d2] px-14 pb-12 pt-8">
              <Row>
                <Column>
                  <Text
                    style={text}
                    className="text-2xl font-semibold text-[#011e0e]"
                  >
                    Poruka:
                  </Text>
                </Column>
                <Column>
                  <Section
                    align="right"
                    className="h-2 w-12 bg-[#011e0e]"
                  ></Section>
                </Column>
              </Row>
              <Row>
                <Text style={text} className="mt-6">
                  <div dangerouslySetInnerHTML={{ __html: poruka }} />
                </Text>
              </Row>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default Email

const tableCell = { display: "table-cell" }

const text = { margin: 0 }
