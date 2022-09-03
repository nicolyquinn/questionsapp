import Head from "next/head";
import Header from "../components/Header";
import { questions } from "../public/data";
import styles from "../styles/Questions.module.css"
import Zoom from "next-image-zoom";

export default function Answer(){

    const question = questions.filter(item => item.status === 'Answered');

    return (
        <div>
            <Header />
            <Head>
                <title>Answer Page</title>
            </Head>
            <div className={styles.questionCard}>
            <p>We’d like to make sure users/patients get their questions answered as soon as possible. You’ll always see five questions that need the most attention from the question pool.</p>
                {question.map((item) => (
                    <div className={styles.questionItem}>
                        <div className={styles.lineOne}>
                            <div>
                                <span className={styles.username} key={item.userId}>{item.username}</span>
                                <span className={styles.userId} key={item.userId}>#{item.questionId}</span>
                            </div>
                            <div className={styles.lineOneRight}>
                                <span className={styles.statusAnswer} key={item.id}>{item.status}</span>
                                <span className={styles.timeStamp} key={item.id}>{item.timestamp}</span>
                            </div>
                        </div>
                        <div className={styles.lineTwo}>
                            <p className={styles.gender} key={item.userId}>{item.gender}</p>
                            <p className={styles.age} key={item.userId}>{item.age}</p>
                        </div>
                        <div className={styles.lineThree}>
                            <p key={item.id}>{item.text}</p>
                        </div>
                        <div className={styles.lineFour}>
                            <Zoom key={item.id} src={item.img} layout={"fixed"} width={96} height={96}/>
                            <Zoom key={item.id} src={item.addImg01} layout={"fixed"} width={96} height={96}/>
                            <Zoom key={item.id} src={item.addImg02} layout={"fixed"} width={96} height={96}/>
                        </div>
                        <div className={styles.lineFive}>
                            <button className={styles.buttonTwo} variant="contained">More details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 