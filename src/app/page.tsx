'use client';

import styled from 'styled-components';
import {Row, Grid, Col, Container} from 'bear-react-grid';


const Skeleton = () => (
    <SkeletonInner>
        <SkeletonImg />
        <SkeletonBtn />
        <SkeletonLineOne />
        <SkeletonLineTwo />
    </SkeletonInner>
);


export default function Page() {

    const renderMain = () => {
        return <Grid col="1fr auto 1fr" className="align-items-center mb-5">

            <div className="d-flex justify-content-end">

                <Title>
                    Bear React Grid
                </Title>
            </div>


        </Grid>;
    };

    return (
        <Container>
            <Title className="mb-3">
                Styled with Styled Components
            </Title>

            <Row>
                {Array.from({length: 12}).map(idx => {
                    return <Col col={4} key={`skeleton_${idx}`} className="mb-3">
                        <Skeleton />
                    </Col>;
                })}
            </Row>
        </Container>
    );
}



const SkeletonInner = styled.div`
  padding: 1rem /* 16px */;
  background-color: rgb(24 24 27 / 0.8);
  border-radius: 1rem /* 16px */;
`;

const SkeletonImg = styled.div`
  height: 3.5rem /* 56px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const SkeletonBtn = styled.div`
  margin-top: 0.75rem /* 12px */;
  width: 25%;
  height: 0.75rem /* 12px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(255 0 128 / 1);
`;

const SkeletonLineOne = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 91.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const SkeletonLineTwo = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 66.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const Title = styled.div`
  font-size: 40px;
  color: #fff;
`;
