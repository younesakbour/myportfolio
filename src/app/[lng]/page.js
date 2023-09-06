"use client"
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef} from 'react'
import { getDictionary } from "../../../getDictionary"


export default async function Home({params}) {
  
  const ref = useRef(null);
  
  useEffect(() => {
    AOS.init();

    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY && 100) {
        header.style.top = "-10%";
      } else if (window.scrollY < 100) {
        header.style.top = "0";
        header.firstChild.classList.remove("navup");
        header.lastChild.classList.remove("navup");
      } else {
        header.style.top = "0";
        header.firstChild.classList.add("navup");
        header.lastChild.classList.add("navup");
      }
  
      lastScrollY = window.scrollY;
    })

    document.onscroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      const navdesktop = document.querySelector('.navdesktop');
      const navmobile = document.querySelector('.navmob');
      
      for (let i = 1; i < ref.current.children.length - 1; i++) {
        const section = ref.current.children[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop/1.2 && scrollPosition <= sectionTop + sectionHeight) {
          for (let i = 0; i < navdesktop.children.length; i++) {
            if(navdesktop.children[i].firstChild.attributes.href.value === `#${section.attributes.id.value}`) {
              navdesktop.children[i].firstChild.classList.add('active');
              navmobile.children[i].classList.add('activemb');
            } else {
              navdesktop.children[i].firstChild.classList.remove('active');
              navmobile.children[i].classList.remove('activemb');
            }
          }
        }
      }
    }
    
  }, [])

  const lng = await getDictionary(params.lng);

  return (
    <div className='relative' ref={ref}>
      <Header lng={lng} />
      <Hero lng={lng.hero} />
      <About lng={lng.about} />
      <Projects lng={lng} />
      <Contact lng={lng.contact} />
      <Footer lng={lng.footer}/>
    </div>
  )
}
