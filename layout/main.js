import React from 'react'
import Head from 'next/head'
import Menu from "../components/Menu";

const Main = ({children}) => (
    <div className={`main`}>
        <Head>
            <title>테스트</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,900&display=swap"
                  rel="stylesheet"/>
            <style>
                {`
                            h1 {
                                color: whitesmoke;
                            }
                            #fp-nav ul li a span {
                                background: whitesmoke !important;
                            }
                            
                          `}
            </style>
        </Head>
        <Menu/>
        {children}
    </div>
);
export default Main
