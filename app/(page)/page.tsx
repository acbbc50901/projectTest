'use client';
// import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  background: linear-gradient(to bottom,#fcce97, #C7802D);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div<TitleInterface>`
  border-radius: 10px;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.primary === "white" ? "#fff" : "#000")};
`;

interface BoxInterface {
  text: string;
  classes: string;
}

interface TitleInterface {
  primary: string;
}

const SmailBox : React.FC<BoxInterface> = ({ text, classes }) => {
  return (
    <Title primary={classes}>
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
    </Container>
  );
}
