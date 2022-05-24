import styled from 'styled-components';

const ResponsiveTemplate = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);

    ul,
    li {
        list-style: none;
    }

    .wrap {
        position: absolute;
        width: 80%;
        height: 80%;
        left: 10%;
        top: 10%;
    }
`;

const Responsive = ({ children }: any) => {
    return <ResponsiveTemplate>{children}</ResponsiveTemplate>;
};

export default Responsive;
