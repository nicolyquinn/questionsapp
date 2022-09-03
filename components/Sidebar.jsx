import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from "next/image";
import styles from "../styles/Sidebar.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function IconMenu() {

  const router = useRouter();
    const style = {
        fontWeight: router.asPath === "/questions" ? "600" : "400",
        color: router.asPath === "/questions" ? "#7153A1" : "#404040",
        backgroundColor: router.asPath === "/questions" ? "#F4F2F8" : " ",
    }

  return (
    <Paper className={styles.sidebar}>
      <MenuList className={styles.topPart}>
          <div className={styles.imgContainer}>
            <Image src="/logo.png" alt="Elevar Logo" width="88px" height="40px" />
          </div>
        <MenuItem className={styles.menuItem} style={style}>
          <ListItemIcon style={style}>
            <WidgetsIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/questions">
            <a className={styles.link} style={style}>
              Questions
            </a>
          </Link>
        </MenuItem>
        <MenuItem className={styles.menuItem}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <p>Settings</p>
        </MenuItem>
        <MenuItem className={styles.menuItem} >
          <ListItemIcon>
            <LogoutIcon fontSize="small"/>
          </ListItemIcon>
          <p>Logout</p>
        </MenuItem>
      </MenuList>

      <MenuList className={styles.bottomPart}>
          <p>©2021 Elevar LLC. All Rights Reserved.</p>
      </MenuList>
    </Paper>
  );
}
