import styled from 'styled-components';

/* 메인 색상 1 */
/* #333d79 */
/* #faebef */

const RankingTemplate = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 8;
    color: #333d79;

    ul,
    li {
        list-style: none;
    }

    .content {
        max-width: 300px;
        width: 90%;
        height: 80%;
        margin: 0 auto;
        margin-top: 3rem;
        background: #fff;
        border-radius: 0.5rem;
        border: 1px solid black;
        box-shadow: 7px 7px 5px black;
    }

    .content > .header {
        top: 0;
        width: 100%;
        height: 10%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }

    .header_wrap {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        line-height: 150%;
    }

    .logo {
        width: 100%;
        height: 50%;
        margin-left: 10%;
    }

    .rank {
        width: 100%;
        height: 60%;
        position: relative;
        top: 5%;
        & > span {
            position: relative;
            top: 20%;
            font-size: 15px;
            font-weight: bold;
        }
    }

    .button {
        width: 10%;
        height: 50%;
        margin-right: 20px;
        background: #fbeaeb;
        color: #2e3c7e;
        border: 1px solid black;
    }

    .stage {
        width: 100%;
        height: 5%;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }

    .stage_wrap {
        width: 100%;
        height: 6%;
        display: flex;
        justify-content: space-around;
        border-radius: 0.2rem;
        & > span {
            width: 13%;
            height: 80%;
            position: relative;
            top: 10%;
            padding-top: 0.8%;
            border-radius: 0.5rem;
            background: #333d79;
            border: 1px solid black;
            color: #faebef;
            font-weight: bold;
        }
        & > .onStage {
            text-align: center;
            background: #faebef;
            color: #333d79;
        }
        & > .offStage {
            text-align: center;
        }
    }

    .pStage {
        margin: 0;
        transform: translate(0%, 0%);
    }

    .img {
        width: 100%;
        height: 18%;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .ranking {
        width: 98%;
        height: 60%;
        margin: 0 auto;
        /* background: #fff; */
        & > ul {
            margin: 0;
            padding: 0;
            height: 8.4%;
            padding-top: 1px;
            display: flex;
            font-size: 12px;
            text-align: center;
            & > li {
                margin-right: 1%;
                margin-bottom: 1%;
                margin-left: 1%;
                padding-top: 1px;
                border: 1px solid black;
                box-sizing: border-box;
                border-radius: 0.2rem;
                background: #fbeaeb;
            }
        }
        & > ul :nth-child(1) {
            width: 20%;
        }
        & > ul :nth-child(2) {
            width: 40%;
        }
        & > ul :nth-child(3) {
            width: 40%;
            margin-right: 0;
        }
        & > .myRank {
            overflow: hidden;
        }
        & > .myRank > li {
            background: #2e3c7e;
            color: #fbeaeb;
            margin-bottom: 0;
        }
        & > .info > li {
            background: #2e3c7e;
            color: #fbeaeb;
        }
    }
`;

const Background = ({ children }: any) => {
    return <RankingTemplate>{children}</RankingTemplate>;
};

export default Background;
