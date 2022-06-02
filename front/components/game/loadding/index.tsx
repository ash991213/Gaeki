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
    }

    .header {
        width: 100%;
        height: 20%;
        background-color: #efefef;
        margin: 0 auto;
        & > .logo {
            color: black;
        }
    }

    .loading {
        width: 100%;
        height: 35%;
        margin: 0 auto;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .loading_bar {
        width: 100%;
        height: 100%;
        position: relative;
        top: 20%;
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
