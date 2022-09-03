import Head from "next/head";
import HeaderQuestion from "../../components/HeaderQuestion";
import { questions } from "../../public/data";
import styles from "../../styles/answer.module.css"
import Zoom from "next-image-zoom";
import React, { useState } from "react";
import Router from 'next/router'
import { Alert, Modal } from "@mui/material";

export default function question12345(){

    const question = questions.filter(item => item.questionId === 12345);

    const [count, setCount] = React.useState(0);

    const [ addCategory, setAddCategory] = useState('')
    const [ addTextArea, setAddTextArea ] = useState('')

    const questionId = 12345

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const submitQuestion = async () => {
        var categoryValidation = document.getElementById("category").value; 
        if (categoryValidation == "Select an option"){
            document.getElementById("alertDisplay").style.display = "flex";
        } else if (addTextArea == ""){
            document.getElementById("alertDisplayTwo").style.display = "flex";
        } else {
            const response = await fetch('/api/questions', {
                method: 'POST',
                body: JSON.stringify({addCategory, addTextArea, questionId}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            document.getElementById("alertDisplayThree").style.display = "flex";
            await delay(1000)
            Router.push('/questions')
        }      
    }

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
                            <label htmlFor="category">Category *</label>
                            <select id="category" name="category" value={addCategory} onChange={(e) => setAddCategory(e.target.value)} required>
                                <option>Select an option</option>
                                <option>Physical Activity and Nutrition</option>
                                <option>Overweight and Obesity</option>
                                <option>Tobacco</option>
                                <option>Substance Abuse</option>
                                <option>Allergies</option>
                                <option>Colds and Flu</option>
                                <option>Immunization</option>
                            </select>
                            <div id="alertDisplay" className={styles.alertDisplay}>
                                <Alert severity="error" className={styles.alertItem}>You must enter a category</Alert>
                            </div>
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
                            <label htmlFor="answer">Text answer *</label>
                            <textarea id="textarea" name="answer" value={addTextArea} placeholder="Be clear, to the point and respectful" maxlength="500" onKeyUp={e => setCount(e.target.value.length)} onChange={(e) => setAddTextArea(e.target.value)} required></textarea> 
                            <span>{count}/500</span>
                            <div id="alertDisplayTwo" className={styles.alertDisplay}>
                                <Alert severity="error" className={styles.alertItem}>You must fill an answer</Alert>
                            </div>
                            <div id="alertDisplayThree" className={styles.alertDisplay}>
                                <Alert severity="success" className={styles.alertItem}>Your answer has been sent!</Alert>
                            </div>
                            <button type="submit" onClick={submitQuestion}>Send</button>
                            <p>By sending the answer, you agree to our <a href="">Terms of Service.</a></p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}