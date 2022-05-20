import styled from 'styled-components';

const Loadding = styled.div`
    * {
        margin: 0;
        padding: 0;
    }

    .wrap {
        width: 1200px;
        height: 1000px;
        margin: 0 auto;
        background-color: gray;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }

    .header {
        width: 500px;
        height: 300px;
        background-color: #efefef;
        margin: 0 auto;
        & > .logo {
            color: black;
        }
    }

    .loading {
        width: 500px;
        height: 300px;
        margin: 0 auto;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .loading_bar {
        width: 500px;
        height: 100px;
        background: green;
        margin: 0 auto;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const Responsive = ({ children }: any) => {
    return <Loadding>{children}</Loadding>;
};

export default Responsive;
