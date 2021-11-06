import React from "react";
import Link from 'next/link';
import { AiFillGithub, AiOutlineUser } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, Img, NavLink, SocialIcons, Span } from './HeaderStyles';


export default function Header() {
    return (
        <Container>
            <Div1>
                <Link href="/">
                    <a style={{
                        display: 'flex',
                        alignItems: "center",
                        color: 'white',
                    }}>
                        <Img src="logo-white.png" />
                        <Span>Pheon Dev</Span>
                    </a>
                </Link>
            </Div1>
            <Div2>
                {/* Links */}
                <li>
                    {/* My Projects Link */}
                    <Link href="#projects">
                        <NavLink>Home</NavLink>
                    </Link>
                </li>
                <li>
                    {/* Technologies Used Link */}
                    <Link href="#tech">
                        <NavLink>About</NavLink>
                    </Link>
                </li>
                <li>
                    {/* About Link */}
                    <Link href="#about">
                        <NavLink>Contact</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                {/* Github Link */}
                <SocialIcons href="https://github.com/rexdougie" target="_blank"><AiFillGithub size="3rem" /></SocialIcons>
                <SocialIcons href="#" target="_blank"><AiOutlineUser size="3rem" /></SocialIcons>
            </Div3>
        </Container>
    )
}