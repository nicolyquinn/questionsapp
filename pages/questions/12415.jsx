import Head from "next/head";
import HeaderQuestion from "../../components/HeaderQuestion";
import { questions } from "../../public/data";
import styles from "../../styles/answer.module.css"
import Zoom from "next-image-zoom";
import { useState } from "react";
import react from "react";

export default function question12415(){

    const question = questions.filter(item => item.questionId === 12415);

    const [count, setCount] = React.useState(0);

    return(
        <div>
            <Head>
            <title>Question Page</title>
            </Head>
            <HeaderQuestion />
            <div className={styles.answerContainer}>
                <div className={styles.leftSide}>
                    {question.map((item) => (
                        <div className={styles.questionItem}>
                            <div className={styles.lineOne}>
                                <p>Question</p>
                                <p className={styles.userId} key={item.userId}>#{item.questionId}</p>
                            </div>
                            <div className={styles.lineTwo}>
                                <p className={styles.username} key={item.userId}>{item.username}</p>
                                <div className={styles.lineTwoSpan}>
                                    <span className={styles.highPriority} key={item.id}>{item.pillStatus}</span>
                                    <span className={styles.timeStamp} key={item.id}>{item.timestamp}</span>
                                </div>
                            </div>
                            <div className={styles.lineThree}>
                                <p className={styles.gender} key={item.userId}>{item.gender}</p>
                                <p className={styles.age} key={item.userId}>{item.age}</p>
                            </div>
                            <div className={styles.lineFour}>
                                <p key={item.id}>{item.text}</p>
                            </div>
                            <div className={styles.lineFive}>
                                <Zoom key={item.id} src={item.img} layout={"fixed"} width={96} height={96}/>
                                <Zoom key={item.id} src={item.addImg01} layout={"fixed"} width={96} height={96}/>
                                <Zoom key={item.id} src={item.addImg02} layout={"fixed"} width={96} height={96}/>
                            </div>
                            <div className={styles.lineSix}>
                                <p>This is the end of the question</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.rightSide}>
                    <div className={styles.category}>
                        <h1>How would you categorize the question</h1>
                        <p>We’re gathering this information for internal statistical analysis. It won’t be shared with users.</p>
                        <div className={styles.formControl}>
                            <label>Category *</label>
                            <select>
                                <option>Select an option</option>
                                <option>Physical Activity and Nutrition</option>
                                <option>Overweight and Obesity</option>
                                <option>Tobacco</option>
                                <option>Substance Abuse</option>
                                <option>Allergies</option>
                                <option>Colds and Flu</option>
                                <option>Immunization</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.answerDetails}>
                        <div className={styles.answerTitle}>
                            <h1>Write down your answer</h1>
                            <div className={styles.answerSpan}>
                            <p>Best practices</p>
                            <span>?</span>
                            </div>
                        </div>
                        <div className={styles.formControl}>
                            <label>Text answer *</label>
                            <textarea placeholder="Be clear, to the point and respectful" maxlength="500" onChange={e => setCount(e.target.value.length)}></textarea> 
                            <span>{count}/500</span>
                            <button>Send</button>
                            <p>By sending the answer, you agree to our <a href="">Terms of Service.</a></p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}