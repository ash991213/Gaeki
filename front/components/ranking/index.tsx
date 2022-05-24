import styled from 'styled-components';

const RankingTemplate = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 3;

    ul,
    li {
        list-style: none;
    }

    .content {
        position: absolute;
        width: 80%;
        height: 80%;
        left: 10%;
        top: 10%;
    }

    .content > .header {
        top: 0;
        width: 100%;
        height: 10%;
        background: green;
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
        background: purple;
    }

    .rank {
        width: 100%;
        height: 50%;
        background: white;
        font-size: 12px;
    }

    .button {
        width: 10%;
        height: 50%;
        margin-right: 20px;
    }

    .stage {
        width: 100%;
        height: 5%;
        background-color: tomato;
        text-align: center;
    }

    .stage_wrap {
        width: 100%;
        height: 5%;
        display: flex;
        background: yellow;
        & > .onStage {
            width: 100%;
            height: 100%;
            margin: 0;
            text-align: center;
            background: red;
        }
        & > .offStage {
            width: 100%;
            height: 100%;
            margin: 0;
            text-align: center;
        }
    }

    .pStage {
        margin: 0;
        transform: translate(0%, 15%);
    }

    .img {
        width: 100%;
        height: 20%;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .ranking {
        width: 100%;
        height: 60%;
        & > ul {
            margin: 0;
            padding: 0;
            height: 8.33%;
            display: flex;
            font-size: 12px;
            text-align: center;
            background: red;
            & > li {
                margin-right: 1.2px;
                margin-bottom: 1.2px;
                padding-top: 5px;
                border: 1px solid black;
                box-sizing: border-box;
                border-radius: 0.2rem;
                background: pink;
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
        & > .myRank > li {
            background: white;
            margin-bottom: 0;
        }
        & > .info > li {
            background: white;
        }
    }
`;

const Background = ({ children }: any) => {
    return <RankingTemplate>{children}</RankingTemplate>;
};

export default Background;
