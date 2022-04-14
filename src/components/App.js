import React from "react";

import '../css/styles.css';

import Header from "./Header/Header";
import Button from "./Button/Button";
import Card from "./Card/Card";

const App = () => {
    return(
        <>
            <Header/>
            <main>
                <section className="collectionProducts">
                    <div className='collectionProducts__listButtons'>
                    <Button text="Sort by Product Name" />
                    <Button text="Sort by Price"/>
                    </div>
                    <div className="collectionProducts__listProducts">
                        <Card/>
                    </div>
                </section>
            </main>
        </>
    );
};

export default App;