'use client';

import Image from 'next/image';
import styles from './page.module.css';
import styled from 'styled-components';
import {Row, Grid, Col, Container} from 'bear-react-grid';


export default function Home() {

    const renderMain = () => {
        return <Grid columns="1fr auto 1fr" className="align-items-center mb-5">

            <div className="d-flex justify-content-end">
                <Image
                    src="/logo.svg"
                    alt="BearReactGrid Logo"
                    width={50}
                    height={50}
                    className="mr-3"
                    priority
                />
                <Title>
                    Bear React Grid
                </Title>
            </div>

            <Add/>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={30}
                priority
            />

        </Grid>;
    };


    const renderLearn = () => {
        const data = [
            {
                text: 'Docs',
                desc: 'Find in-depth information about Next.js features and API.',
                url: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
            },
            {
                text: 'Learn',
                desc: 'Learn about Next.js in an interactive course with&nbsp;quizzes!',
                url: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
            },
            {
                text: 'Templates',
                desc: 'Explore the Next.js 13 playground.',
                url: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
            },
            {
                text: 'Deploy',
                desc: 'Instantly deploy your Next.js site to a shareable URL with Vercel.',
                url: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
            },
        ]

        return <Grid columns={4}>

            {data.map(row => {
                return <a key={row.text}
                    href={row.url}
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        {row.text} <span>-&gt;</span>
                    </h2>
                    <p>{row.desc}</p>
                </a>
            })}

        </Grid>;
    }


    return (
        <Container className="d-flex flex-column align-items-center justify-content-center"
        style={{height: '100vh'}}>
            {renderMain()}
            {renderLearn()}
        </Container>
    );
}


const Title = styled.div`
  font-size: 40px;
  color: #fff;
`;

const Add = styled.div`
  font-size: 40px;
  color: #fff;

  :after {
    content: '+';
  }
`;
