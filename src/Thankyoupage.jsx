import React, { useEffect } from 'react'
import {
    Herosection,
    Secondsection,
    Stepsection,
    Purchasesection,
    Discountsection,
    Guaranteesection,
    Footer
} from "./index.js";

function Thankyoupage() {

    useEffect(() => {
        document.title = "Thank You";
    }, [])

    return (
        <>
            <Herosection />
            <Secondsection />
            <Stepsection />
            <Purchasesection />
            <Discountsection />
            <Guaranteesection />
            <Footer />
        </>
    )
}

export default Thankyoupage;