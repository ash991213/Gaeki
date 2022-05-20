import styled from 'styled-components'

const Setting = styled.div`
    /* position: fixed; */
    /* display: none; */
    /* width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    backdrop-filter:blur(4px); */
    
    .closebt{
        margin-right: -30px;
        margin-top: -30px;
        width: 10px; 
        float: right;
        }   

    .wrap {
        /* position: fixed; */
        width: 100%;
        height:100%;
        margin: 0 auto;
        margin-top: 115px;
        border: 1px solid black;
        padding: 50px 60px;
        box-shadow: 7px   7px   5px   black;
        

        & > .img {
            /* width : 100%; 
             height: 10%; */

            & > img {
                width: 50%;
                /* height: 50%; */
                object-fit: cover;
            }
        
        }

    }

    

    .header{
        width: 100%;
        height: 20%;
        margin: 0 auto;
        text-align:center;
        font-weight: bold;
        font-size:50px
    }

    .button{
        /* width: 100%; */
        display: flex;
        justify-content: space-evenly;
        
    }

    .effectbutton{
        margin-right: 5px;
    }

    .text1{
        padding: 50%  0 0 30%;
        font-size:20px;
        font-weight: bold;
    }
    
    .button1 {
        width: 70%;
        height: 40%;
        display:inline-block;
        padding: 20px;
        margin-left: 25px;

        & > img{
            width: 100%;
            /* height: 80%; */
            object-fit: cover;
        }
    }
   

    

`;

const Responsive = ({ children }: any) => {
    return <Setting>{children}</Setting>;
};

export default Responsive;