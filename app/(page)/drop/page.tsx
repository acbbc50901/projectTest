'use client';
// import Image from "next/image";
import styled from "styled-components";
// import { useRouter } from "next/navigation";
// import { Metadata } from "next";

const Container = styled.div`
  display: flex;
  // width: 100vw;
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

// export const metadata: Metadata = {
//   title: "拖一",
// }

export default function Home() {
  // const router = useRouter();

  return (
    <Container>
      <SmailBox text="縮放" classes={""} />
      <SmailBox text="還好朋友" classes={""} />
    </Container>
  );
}
