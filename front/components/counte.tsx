import styled from 'styled-components';

const ResponsiveTemplate = styled.div`
    margin: 0;
    padding: 0;
    width: 1024px;
    background: blue;
`;

const Responsive = ({ children }: any) => {
    return <ResponsiveTemplate>{children}</ResponsiveTemplate>;
};

export default Responsive;
