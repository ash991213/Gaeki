import styled from 'styled-components';

const Loadding = styled.div`
    * {
        margin: 0;
        padding: 0;
    }

    .wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 40px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        z-index: 5;
        background: #faebef;
    }

    .header {
        width: 100%;
        height: 20%;
        margin: 0 auto;
        display: flex;
        position: fixed;
        top: 15%;
        left: 7%;
        & > .logo {
            & > .logo1 {
                object-fit: contain;
                width: 70%;
                height: 100%;
                position: relative;
                top: 20%;
                left: 20%;
            }
            & > .logo2 {
                object-fit: cover;
                width: 30%;
                height: 80%;
                position: relative;
                top: -15%;
                left: 10%;
            }
        }
    }

    .loading {
        width: 100%;
        height: 35%;
        margin: 0 auto;
        & > img {
            width: 100%;
            height: 100%;
            position: relative;
            top: 150%;
            object-fit: contain;
        }
    }

    .loading_bar {
        width: 100%;
        height: 100%;
        position: relative;
        top: 50%;
        font-size: 1.5rem;
        color: gray;
        text-shadow: 1px 1px 1px #000;
        opacity: 0.5;
        margin: 0 auto;
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        .loading_bar {
            width: 100%;
            height: 20%;
        }
    }
`;

const Responsive = ({ children }: any) => {
    return <Loadding>{children}</Loadding>;
};

export default Responsive;
