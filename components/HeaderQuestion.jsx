import { Avatar } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/Header.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

export default function HeaderQuestion() {
    return(
        <div>
            <div className={styles.headerQuestion}>
                <div className={styles.backButton}>
                    <Link href="/questions">
                        <div className={styles.backButton}><ArrowBackIosIcon className={styles.backButtonIcon} /><a>Back to Questions</a></div>
                    </Link>
                </div>
                <div className={styles.avatar}>
                    <Avatar alt="Dr. Nicoly Quinn" src="/avatar.png" />
                    <p>Nicoly Quinn</p>
                    <ArrowForwardIosIcon className={styles.avatarIcon} />
                </div>
            </div>
            <div className={styles.mobileHeader}>
                    <h1>Answer</h1>
                    <Link href="/questions">
                    <CloseIcon className={styles.closeIcon} />
                    </Link>
            </div>
        </div>
    )
}