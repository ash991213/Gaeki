import styled from 'styled-components';

const Setting = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 8;

    .settingHead {
        font-size: 2rem;
        font-weight: bold;
    }

    .closebt {
        align-self: flex-end;
        width: 16%;
        height: 7.2%;
        background: #fbeaeb;
        color: #2e3c7e;
        border: 1px solid black;
        font-size: 16px;
        font-weight: bold;
        position: relative;
        left: 10%;
        top: -3%;
        border-radius: 0.2rem;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 255px;
        width: 80%;
        height: 65%;
        margin: 0 auto;
        margin-top: 2.5rem;
        border: 1px solid black;
        border-radius: 0.5rem;
        padding: 1.5rem 2.2rem 2.2rem 2.2rem;
        background: white;
        text-align: center;
    }
    .imgwrap > img {
        width: 70%;
        object-fit: cover;
    }
    .header {
        width: 100%;
        height: 20%;
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
        font-size: 1.5rem;
        font-weight: bold;
    }

    .button1 {
        display: inline-block;
    }

    .button1 > img {
        max-width: 180px;
        width: 100%;
    }
`;

const Responsive = ({ children }: any) => {
    return <Setting>{children}</Setting>;
};

export default Responsive;
