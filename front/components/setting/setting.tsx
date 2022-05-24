import styled from 'styled-components';

const Setting = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);

    .closebt {
        margin-top: -30px;
        width: 10px;
        float: right;
    }

    .wrap {
        width: 80%;
        height: 80%;
        margin: 0 auto;
        margin-top: 15%;
        border: 1px solid black;
        padding: 50px 60px;
        box-shadow: 7px 7px 5px black;
        background: white;

        & > .img {
            & > img {
                width: 50%;
                object-fit: cover;
            }
        }
    }

    .header {
        width: 100%;
        height: 20%;
        margin: 0 auto;
        padding-bottom: 50px;
        text-align: center;
        font-weight: bold;
        font-size: 50px;
    }

    .button {
        display: flex;
        justify-content: space-evenly;
    }

    .effectbutton {
        text-align: center;
    }

    .backbutton {
        text-align: center;
    }

    .text1 {
        padding: 10px;
        font-size: 3vw;
        font-weight: bold;
    }

    .button1 {
        display: inline-block;

        & > img {
            width: 100%;
            object-fit: cover;
        }
    }
`;

const Responsive = ({ children }: any) => {
    return <Setting>{children}</Setting>;
};

export default Responsive;
