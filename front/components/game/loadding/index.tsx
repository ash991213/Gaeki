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
        background-color: gray;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
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

    /* @media screen and (min-width: 768px) {
        .wrap {
            padding: 70px;
        }
        .loading {
            height: 70%;
        }
    } */

    .loading_bar {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        & > img {
            width: 100%;
            height: 100%;
        }
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
