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

    return `${day}.${month}.${year}.`
  }

  // Use the live production URL for the logo so it renders correctly even when testing locally
  const baseUrl = "https://anemona-natura.hr"

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
        {/* Inter font weight 600 - latin-ext */}
        <Font
          fontFamily="Inter"
          fallbackFontFamily={["Arial", "Helvetica", "sans-serif"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
      </Head>
      <Body className="bg-[#f4f6f4] py-10 font-sans">
        <Tailwind>
          <Container className="mx-auto max-w-[600px] overflow-hidden rounded-lg border border-[#e0e4e0] bg-white shadow-sm">
            {/* Logo and Header Section */}
            <Section className="bg-[#012c14] px-10 py-8">
              <Row>
                <Column>
                  <Link href="https://anemona-natura.hr">
                    <Img
                      src={`${baseUrl}/assets-email/logo-email.png`}
                      alt="Anemona Natura Logo"
                      width="150"
                      height="33"
                      className="block"
                    />
                  </Link>
                </Column>
                <Column align="right">
                  <Text className="m-0 text-xs font-semibold uppercase tracking-wider text-[#e7e4e1]">
                    Novi Upit
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Title / Hero */}
            <Section className="px-10 pt-6 pb-2">
              <Text className="m-0 text-2xl font-bold text-[#012c14]">
                Primljena je nova poruka
              </Text>
              <Text className="m-0 mt-1 text-sm text-[#4b5563]">
                Korisnik je poslao poruku preko kontakt obrasca na web stranici.
              </Text>
            </Section>

            {/* Sender Info Details Box */}
            <Section className="px-10 py-4">
              <Section className="rounded-lg border border-[#e6ebe6] bg-[#f7faf7] p-6">
                <Row className="mb-4">
                  <Column className="w-1/2">
                    <Text className="m-0 text-xs font-bold uppercase tracking-wider text-[#4d5e53]">
                      Ime i prezime
                    </Text>
                    <Text className="m-0 mt-1 text-base font-semibold text-[#1f2937]">
                      {ime || "Nije navedeno"}
                    </Text>
                  </Column>
                  <Column className="w-1/2">
                    <Text className="m-0 text-xs font-bold uppercase tracking-wider text-[#4d5e53]">
                      Datum primitka
                    </Text>
                    <Text className="m-0 mt-1 text-base font-semibold text-[#1f2937]">
                      {getCurrentDateFormatted()}
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column className="w-1/2">
                    <Text className="m-0 text-xs font-bold uppercase tracking-wider text-[#4d5e53]">
                      E-mail adresa
                    </Text>
                    <Text className="m-0 mt-1 text-base font-semibold">
                      <Link href={`mailto:${email}`} className="text-[#086437] underline decoration-[#086437]">
                        {email}
                      </Link>
                    </Text>
                  </Column>
                  <Column className="w-1/2">
                    <Text className="m-0 text-xs font-bold uppercase tracking-wider text-[#4d5e53]">
                      Telefon
                    </Text>
                    <Text className="m-0 mt-1 text-base font-semibold text-[#1f2937]">
                      {tel || "Nije navedeno"}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            {/* Message Content Section */}
            <Section className="px-10 pt-2 pb-8">
              <Text className="m-0 text-xs font-bold uppercase tracking-wider text-[#4d5e53] mb-2">
                Sadržaj poruke
              </Text>
              <Section className="rounded-lg border-l-4 border-[#086437] bg-[#f9fafb] p-5 border border-y-[#e5e7eb] border-r-[#e5e7eb]">
                <Text className="m-0 text-sm leading-relaxed text-[#374151]">
                  <div dangerouslySetInnerHTML={{ __html: poruka }} />
                </Text>
              </Section>
            </Section>

            {/* Footer Section */}
            <Section className="bg-[#f9faf9] px-10 py-6 border-t border-[#f0f2f0]">
              <Text className="m-0 text-center text-xs text-[#9ca3af] leading-normal">
                Ova poruka je automatski poslana s kontakt obrasca na{" "}
                <Link href="https://anemona-natura.hr" className="text-[#086437] font-semibold underline">
                  anemona-natura.hr
                </Link>
                .<br />
                Molimo ne odgovarajte izravno na ovaj e-mail. Ako želite odgovoriti pošiljatelju, kliknite "Odgovori" (Reply) ili koristite e-mail adresu iznad.
              </Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default Email
