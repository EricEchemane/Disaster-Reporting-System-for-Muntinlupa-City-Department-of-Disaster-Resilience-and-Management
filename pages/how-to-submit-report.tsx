import Head from 'next/head';
import React from 'react';

export default function HomeToSubmitReportPage() {
    return <>
        <Head>
            <title> How to Submit A Report </title>
        </Head>
        <div id='tutorial'>
            <h1> Please watch the tutorial below </h1>
            <video muted id='video-tutorial' controls src="/tutorial.mp4"></video>
        </div>
    </>;
}
