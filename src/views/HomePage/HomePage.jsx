import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import {fetchFilters} from "../../backendPoints/backends";
import Accordian from '../../components/Accordian/Accordian';
import Divider from '@mui/material/Divider';
import React from 'react';
import { useOutletContext } from "react-router-dom";
import styles from './HomePage.module.css';


export default function HomePage() {
    const {data} = useOutletContext();
    const {topAlbums,newAlbums,songs} = data;
    
    return(
        <>
            <Hero/>
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Divider className={styles.divider} variant="middle" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Divider className={styles.divider} variant="middle" />
                <Section 
                    title="Songs"
                    data={songs}
                    filtersData={fetchFilters}
                    type="song"
                />
                <Divider className={styles.divider} variant="middle" />
            </div>
            <Accordian/>
        </>
    );
}