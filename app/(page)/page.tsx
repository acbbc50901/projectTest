'use client';
// import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import type { Theme } from "@/lib/theme";

const Container = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // flex-wrap: wrap;
  gap: 20px;
  height: 100%;
`;

const Title = styled.div<TitleInterface>`
  border-radius: 10px;
  width: 400px;
  // min-height: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => (props.$primary === "white" ? "#fff" : "#000")};
`;

interface BoxInterface {
  text: string;
  classes: string;
}

interface TitleInterface extends Partial<Theme> {
  $primary: string;
  // color: string;
}

const SmailBox : React.FC<BoxInterface> = ({ text, classes }) => {
  return (
    <Title $primary={classes}>
      {text} 
    </Title>
  )
}

export default function Home() {
  const router = useRouter();

  return (
    <Container onClick={() => router.push('./')}>
      <SmailBox text="你好朋友" classes="white" />
      <SmailBox text="還好朋友" classes="black"/>
      <SmailBox text="你好朋友" classes="white" />
      <SmailBox text="還好朋友" classes="black"/>
      <SmailBox text="你好朋友" classes="white" />
      <SmailBox text="還好朋友" classes="black"/>
      <SmailBox text="你好朋友" classes="white" />
      <SmailBox text="還好朋友" classes="black"/>
      <SmailBox text="你好朋友" classes="white" />
      <SmailBox text="還好朋友" classes="black"/>
      <SmailBox text="你好朋友" classes="white" />
      <SmailBox text="還好朋友" classes="black"/>
    </Container>
  );
}
