'use client';

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    border-radius: 5px;
    transition: 0.3s;
    padding: 5px;
    // font-weight: 600;
    font-size: 16px;
  }
  a:hover {
    background-color:#dad9d9;
  }

  .isYou {
    color: #fff;
    background-color: #000;
  }
  
  .isYou:hover {
    background-color:#dad9d9;
    color: #000;
  }
`

export const Nav = () => {

  const ROUTE = usePathname();
  const routeSegments = ROUTE.split('/').filter(Boolean); // 分割並過濾空值

  console.log(ROUTE, routeSegments);

  return (
    <Navs>
      <Link className={`${routeSegments.length === 0 && "isYou"}`} href="/">首頁</Link>
      <Link className={`${routeSegments[0] === 'drop' && "isYou"}`} href="/drop">拖曳</Link>
      <Link className={`${routeSegments[0] === 'blog/1' && "isYou"}`} href="/blog/1">Contact</Link>
    </Navs>
  )
}