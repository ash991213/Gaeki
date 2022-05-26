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
        font-size: 1.5rem;
        font-weight: bold;
    }

    .closebt {
        align-self: flex-end;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        alighn-items: center;
        max-width: 255px;
        width: 80%;
        height: 65%;
        margin: 0 auto;
        margin-top: 2.5rem;
        border: 1px solid black;
        padding: 1.5rem 2.2rem 2.2rem 2.2rem;
        box-shadow: 7px 7px 5px black;
        background: white;
        text-align:center;
    }
    .imgwrap > img {
        width: 100%;
        object-fit: cover;
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
        font-size: 1rem;
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
