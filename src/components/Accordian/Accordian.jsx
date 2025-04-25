import React, { useState, useEffect } from 'react';
import styles from './Accordian.module.css';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fetchQuestions } from '../../backendPoints/backends';

const Accordian = () => {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchQuestions();
                setQuestion(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [])

    return (
        <Box className={styles.accordionWrapper}>
            <h1>FAQs</h1>
            {question.map((data, index) => (
                <Accordion className={styles.accordion} key={index}>
                    <AccordionSummary
                        expandIcon={<KeyboardArrowDownIcon className={styles.nav} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={styles.title}>{data.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}>
                        {data.answer}
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </Box>
    );
}

export default Accordian;