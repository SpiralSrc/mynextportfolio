import {
  Body,
  Hr,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstName: string;

  senderName: string;
  message: string;
}

export const EmailMessage = ({
  senderName,

  message,
  userFirstName,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Message from your portfolio site.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              style={{
                WebkitFilter: "grayscale(20%)",
                filter: "grayscale(30%)",
                margin: "20px 0",
              }}
              src={
                "https://res.cloudinary.com/dtw9b5stp/image/upload/v1714956119/portfolioassets/hqo7zdwwij6y3z2vjxqg.png"
              }
              width={30}
              height={30}
            />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={
                  "https://res.cloudinary.com/dtw9b5stp/image/upload/v1714956249/portfolioassets/eio0x5cqbvi63ufmpdjc.jpg"
                }
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Hi {userFirstName},
                </Heading>
                <Text style={messageContent}>{message}</Text>
              </Column>
            </Row>

            <Text style={paragraph}>
              Best regards,
              <br />
              {senderName}
            </Text>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | SpiralSrc
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailMessage;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const paragraph = {
  fontSize: 16,
  padding: "20px",
};

const messageContent = {
  fontSize: 16,
  padding: "10px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const logo = {
  padding: "30px 20px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
