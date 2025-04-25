import { CircularProgress } from "@mui/material";
import React,{ useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";


function Section({title,data,filtersData,type}) {
    const [filters,setFilters] = useState([{key: "all" , label: "All"}]);
    const [selectedFiltersIndex,setSelectedFiltersIndex] = useState(0);
    const [carouselToggle,setCarouselToggle] = useState(true);
    const [filtersLoaded, setFiltersLoaded] = useState(false);

    const handleToggle = () => {
        setCarouselToggle((oldState) => !oldState);
    };


    useEffect(() => {
        if(!filtersLoaded && filtersData){
            filtersData().then((response) => {
                const  {data} = response;
                setFilters([{key: "all" , label: "All"}, ...data]);
                setFiltersLoaded(true);
            });
            
        }
        
    },[filtersData,filtersLoaded]);
    
    const renderFilters = filters.length > 1; 
    const cardRender = data.filter((item) => 
        renderFilters && selectedFiltersIndex !== 0  
        ? item.genre.key === filters[selectedFiltersIndex].key
        : true
    );

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All" : "Show All"}
                </h4>
            </div>
            {renderFilters && (
                <div className={styles.filterWrapper}>
                    <Filters 
                        filters={filters}
                        selectedFilterIndex={selectedFiltersIndex}
                        setSelectedFilterIndex={setSelectedFiltersIndex}
                    />
                </div>
            )}

            {data.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardRender.map((item) => (
                                <Card key={item.id} data={item} type={type} />
                            ))}
                        </div>
                    ) : (
                        <Carousel 
                            data={cardRender}
                            renderComponent={(data) => <Card data={data} type={type} />}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Section;