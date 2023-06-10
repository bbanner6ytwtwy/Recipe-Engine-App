import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Form from "../components/Form"
import PageLoader from '../components/Loader'
export default function Index() {
    return (
        <>
        <PageLoader />
        <div>
        <div className="">
        <Header />
       </div>
         <Form />
        </div>
        <Contact />
        <Footer />
        </>
    )
}
