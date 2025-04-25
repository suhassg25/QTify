import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import {Cards, Section} from "./components/Card/Card.jsx"
import { useState, useEffect } from 'react'
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {useSwiper} from "swiper/react";
import {CarouselLeftArrow, CarouselRightArrow} from "./components/CarouselNavigations/Carousal.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const fetch = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top", {
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (e) {
      console.log(e)
    }
  }

  const [ newAlbum, setNewAlbum] = useState([]);
  const fetchNew = async () => {
    try {
      const response = await axios.get(" https://qtify-backend-labs.crio.do/albums/new", {
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (response.status === 200) {
        setNewAlbum(response.data);
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => { fetch() }, []);
  useEffect(() => { fetchNew() }, []);

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed(!collapsed);
  const [collapsed2, setCollapsed2] = useState(false);
  const toggleCollapse2 = () => setCollapsed2(!collapsed2);

  const Controls = ({items}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [items,swiper]);
    return <></>;
};


  return (
    <>
      <Navbar />
      <Hero />
      {products ?  <Section title="Top Albums" onToggle={toggleCollapse} isCollapsed={collapsed}>
       <div className='row'>
       <Swiper
       style={{ width: "100vw", position: "relative" }}
        slidesPerView={8}
      >
        <Controls items={products} />
                <div>
                    <CarouselLeftArrow />
                    <CarouselRightArrow />
                </div>
       {products.map(p => (
        <SwiperSlide key={p.id} style={{ width: "100vw" }}>

          <Cards key={p.id} image={p.image} title={p.title} follow={p.follows}/>
        </SwiperSlide>
        ))}
        </Swiper>
       </div>
      </Section> :<></>}
      {newAlbum ?  <Section title="New Albums" onToggle={toggleCollapse2} isCollapsed={collapsed2}>
       <div className='row'>
       <Swiper
       style={{ width: "100vw", position: "relative" }}
        slidesPerView={8}
      >
        <Controls items={newAlbum} />
                <div>
                    <CarouselLeftArrow />
                    <CarouselRightArrow />
                </div>
       {newAlbum.map(p => (
        <SwiperSlide key={p.id} style={{ width: "100vw" }}>
          <Cards key={p.id} image={p.image} title={p.title} follow={p.follows}/>
        </SwiperSlide>
        ))}
        </Swiper>
       </div>
      </Section> :<></>}
    </>
  )
}

export default App
