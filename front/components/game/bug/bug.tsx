import styled from 'styled-components';

const BugTemplate = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 8;

    .content {
        max-width: 255px;
        width: 80%;
        height: 40%;
        margin: 0 auto;
        margin-top: 3rem;
        background: pink;
        border-radius: 1rem;
        & > .image {
            width: 100%;
            height: 100%;
            & > img {
                width: 100%;
                height: 80%;
                object-fit: fill;
                border-radius: 1rem;
            }
            & > .closeBtn {
                width: 50%;
                height: 15%;
                background: red;
                position: relative;
                top: 1%;
                left: 25%;
                border-radius: 0.5rem;
            }
        }
    }
`;

const bug = ({ children }: any) => {
    return <BugTemplate>{children}</BugTemplate>;
};

export default bug;
