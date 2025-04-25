import React from "react";
import styles from "./Filters.module.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Typography  from "@mui/material/Typography";
import Tab from "@mui/material/Tab";

function TabPanel(props){
    const {children,value,index,...other} = props;

    return(
        <div 
            role="tabpanel"
            hidden={value !== index}
            id={`filter-tabpanel-${index}`}
            aria-labelledby={`filter-tab-${index}`}
            {...other}
        >   
            {value === index && (
                <Box sx={{p:3}}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}

        </div>
    );
}


function Filters({filters,selectedFilterIndex,setSelectedFilterIndex}) {
    const handleChange = (event,newValue) => {
        setSelectedFilterIndex(newValue);
    };
    
    function allyProps(index) {
        return {
            id: `filter-tab-${index}`,
            'aria-controls': `filter-tabpanel-${index}`,
        };
    }

    return(
        <div className={styles.filterContainer}>
            <Tabs
                
                value={selectedFilterIndex}
                onChange={handleChange}
                variant="scrollable"     
                aria-label="filtring tabs"
                scrollButtons="auto"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "var(--color-primary)",
                    },
                }}         
            >
                {filters.map((filter,idx) => (
                    <Tab 
                        key={idx}
                        className={styles.tab}
                        label= {filter.label}
                        {...allyProps(idx)}
                    />
                ))}
            </Tabs>
        </div>
    );
}

export default Filters;