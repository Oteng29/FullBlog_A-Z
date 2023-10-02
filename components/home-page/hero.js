import React from 'react';
import classes from './hero.module.css';
import Image from "next/legacy/image"

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/Milleny.jpg"
                    alt="An image showing Max"
                    width={300}
                    height={300}
                    priority={true}
                />
            </div>
            <h1>Hi, I'm Oteng</h1>
            <p>
                I blog about web development - especially frontend frameworks like
                Angular or React.
            </p>
        </section>
    );
}

export default Hero;