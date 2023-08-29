import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Layout from './Layout'
import Hero from './components/Hero'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import FAQ from './components/FAQ'
import NewsLetter from './components/NewsLetter'
import Practises from './components/Practises'

const Home = () => {
    return (
        <Layout>
            <Hero />
            <div className='max-w-[1280px] mx-auto my-0'>
                <About />
                <WhyChoose />
                <Practises/>
                <Testimonials/>
                <Team/>
                <FAQ/>
                <NewsLetter/>
            </div>
        </Layout>

    )
}

export default Home