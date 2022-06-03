// css

import styled from 'styled-components';

const Market = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    top: -100%;
    z-index: 5;

    .wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        text-align: center;
        margin: 0 auto;
        border: 1px solid black;
    }

    .item {
        width: 100%;
        height: 60%;
    }

    .content1 {
        max-width: 20rem;
        margin: 0 auto;
        overflow: auto;
        display: flex; 
        flex-direction: column;
        width: 100%;
        height: 30%;
    }

    .content_clickGold {
        background: #faebef;
    }

    .content_ignoreGold {
        background: #faebef;
    }

    .content_ignoreExp {
        background: #faebef;
    }

    .content_name {
        height: 20%;
        border-bottom: 1px solid;
        padding: 2.5px 0;
    }
    .content_name2 {
        height: 14.3%;
        border-bottom: 1px solid;
        padding: 2.5px 0;
    }

    .content_name3 {
        height: 25%;
        border-bottom: 1px solid;
        padding: 2.5px 0;
    }

    .content_up {
        background: beige;
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
        & > div:nth-child(1) {
            width: 3rem;
        }
        & > div:nth-child(2) {
            width: 9rem;
        }
        & > div:nth-child(3) {
            width: 3rem;
        }
    }

    .content_down {
        display: flex;
        justify-content: space-around;
        padding: 0.2rem 0 0.2rem 0;
        border-left: 1px solid black;
        border-right: 1px solid black;
        & > div:nth-child(1) {
            width: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        & > div:nth-child(2) {
            width: 9rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        & > div:nth-child(3) {
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        & > div > img {
            width: 2rem;
            object-fit: cover;
        }
    }

    .upbt {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .upbt {
        border: 2px solid #333d79;
        background-color: rgba(0, 0, 0, 0);
        color: #333d79;
        padding: 5px;
        font-size: 0.3rem;
    }

    .closeBtn {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 2px solid #333d79;
        background-color: rgba(0, 0, 0, 0);
        padding: 5px;
        font-size: 0.3rem;
        color: white;
        background-color: black;
    }

    .footer {
        margin: 0 auto;
        max-width: 20rem;
        width: 100%;
        height: 10%;
        display: flex;
        text-align: center;

        & > div {
            width: 33.33333%;
            & > img {
                object-fit: contain;
            }
        }

        & > .stat {
            background: #333d79;
        }

        & > .gold {
            background: #333d56;
        }

        & > .exp {
            background: #333d79;
        }
    }
    .alignCenter {
        padding: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .fontNoWrap {
        white-space: nowrap;
    }
    .menuOpacity {
        opacity: 0.5;
    }

    @media only screen and (min-width: 768px) {
        .content1 {
            max-width: 560px;
        }
        .footer {
            max-width: 560px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .content1 {
            max-width: 768px;
        }
        .footer {
            max-width: 768px;
        }
    }
`;

const Responsive = ({ children }: any) => {
    return <Market>{children}</Market>;
};

export default Responsive;
