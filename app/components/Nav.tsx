'use client';

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

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

export const Nav : React.FC<NavProps> = ({isDark, setIsDark}: NavProps) => {

  const ROUTE = usePathname();
  const routeSegments = ROUTE.split('/').filter(Boolean); // 分割並過濾空值

  return (
    <Navs>
      <Link className={`${routeSegments.length === 0 && "isYou"}`} href="/">首頁</Link>
      <Link className={`${routeSegments[0] === 'drop' && "isYou"}`} href="/drop">拖曳</Link>
      <Link className={`${routeSegments[0] === 'blog' && "isYou"}`} href="/blog/1">Contact</Link>
      <div onClick={() => setIsDark(!isDark)}>{isDark ? '黑暗' : '亮光'}</div>
    </Navs>
  )
}