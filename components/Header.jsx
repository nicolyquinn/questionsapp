import React from "react";
import Link from "next/link"
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router';
import { Avatar, Divider } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Header(href) {

    const router = useRouter();
    const style = {
        fontWeight: router.asPath === "/questions" ? "600" : "400",
        color: router.asPath === "/questions" ? "#7153A1" : "#404040",
        borderBottom: router.asPath === "/questions" ? "solid 2px #7153A1" : "",
    }

    const styleTwo = {
        fontWeight: router.asPath === "/answer" ? "600" : "400",
        color: router.asPath === "/answer" ? "#7153A1" : "#404040",
        borderBottom: router.asPath === "/answer" ? "solid 2px #7153A1" : "",
    }

    return(
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <Link href="/questions">
                    <a>Questions</a>
                </Link>
                <div className={styles.avatar}>
                    <Avatar alt="Dr. Nicoly Quinn" src="/avatar.png" />
                    <p>Nicoly Quinn</p>
                    <ArrowForwardIosIcon className={styles.avatarIcon} />
                </div>
            </div>
            <div className={styles.tabs}>
                    <Link href="/questions" style={style} >
                        <a className={styles.link} style={style}>
                            Pending Questions
                        </a>
                    </Link>
                    <Link href="/answer" style={styleTwo}>
                        <a className={styles.link} style={styleTwo}>
                            Answered Questions
                            </a>
                    </Link>
            </div>
            <Divider />
        </div>
    )
}