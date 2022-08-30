import classes from './page-body.module.scss'
import * as React from 'react';


type PageBodyProps = {
    h1Element: string;
    h2Element: string;
    pElement: string;
    aElement: string;
}

const PageBody:React.FC<PageBodyProps> = ({
    h1Element,
    h2Element,
    pElement,
    aElement}) => {
    const hrefLink = 'https://codeacademy.lt/'    

    return(
     <body className={classes.body}>
        <section className={classes.hero}>
            <div className={classes.container}>
                <div className="info">
                    <h1 className={classes.h1Element}>{h1Element}</h1>
                        <h2 className={classes.h2Element}>{h2Element}</h2>
                        <p className={classes.pElement}>{pElement}</p>
                    <a className={classes.aElement} href={hrefLink}>{aElement}</a>
                </div>
            </div>
        </section>
    </body>
    )
}


export default PageBody