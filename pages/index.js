import Head from "next/head";
import Header from "../components/Header";
import { questions } from "../public/data";
import styles from "../styles/Questions.module.css"

export default function Questions(){

    const question = questions.filter(item => item.status === 'Pending');

    return (   
        <div>
            <Head>
            <title>Question Page</title>
            </Head>
            <Header />
            <div className={styles.questionCard}>
                <p>We’d like to make sure users/patients get their questions answered as soon as possible. You’ll always see five questions that need the most attention from the question pool. <br/><strong>Please select an option above</strong></p>
            </div>
        </div>
    )
}