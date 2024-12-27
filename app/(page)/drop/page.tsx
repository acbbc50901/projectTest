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

// const Title = styled.p`

// `;

interface BoxInterface {
  text: string;
  classes: string;
}

const SmailBox : React.FC<BoxInterface> = ({ text, classes }) => {
  return (
    <div>{text} {classes}</div>
  )
}

export default function Home() {
  const router = useRouter();

  return (
    <Container onClick={() => router.push('./')}>
      <SmailBox text="縮放" classes={""} />
      <SmailBox text="還好朋友" classes={""} />
    </Container>
  );
}
