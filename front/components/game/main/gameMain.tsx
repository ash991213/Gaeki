import styled from 'styled-components';

const GameTemplate = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: gray;

    * {
        margin: 0;
        padding: 0;
    }

    ul,
    li {
        list-style: none;
    }

    progress {
        appearance: none;
    }

    .header {
        width: 100%;
        height: 15%;
        background: white;
        display: flex;
        & > .header_left {
            width: 80%;
            height: 100%;
            background: blue;
            display: flex;
            & > .user {
                width: 60%;
                height: 80%;
                position: relative;
                left: 5%;
                top: 10%;
                background: red;
                & > .user_wrap {
                    width: 90%;
                    height: 50%;
                    display: flex;
                    position: relative;
                    top: 5%;
                    left: 2.5%;
                    & > .user_image {
                        width: 30%;
                        height: 100%;
                        background: purple;
                    }
                    & > .user_info {
                        width: 70%;
                        height: 100%;
                        position: relative;
                        left: 3%;
                        font-size: 12px;
                        & > .user_name {
                            width: 100%;
                            height: 50%;
                            background: pink;
                            line-height: 150%;
                        }
                        & > .user_gold {
                            width: 100%;
                            height: 50%;
                            background: yellow;
                            line-height: 150%;
                        }
                    }
                }
                & > .user_progress {
                    width: 95%;
                    height: 40%;
                    position: relative;
                    left: 2%;
                    top: 10%;
                    & > .user_exp {
                        width: 100%;
                        height: 90%;
                        background: white;
                        position: relative;
                        font-size: 12px;
                        padding-left: 5%;
                        padding-top: 1%;
                        display: flex;
                        & > .exp_progress {
                            width: 80%;
                            height: 80%;
                            position: relative;
                            left: 7.5%;
                            top: 7.5%;
                        }
                        & > .exp_progress::-webkit-progress-bar {
                            background: rgba(0, 0, 0, 0);
                            border-radius: 10px;
                        }
                        & > .exp_progress::-webkit-progress-value {
                            border-radius: 10px;
                            background: #1d976c;
                            background: -webkit-linear-gradient(
                                to right,
                                #93f9b9,
                                #1d976c
                            );
                            background: linear-gradient(
                                to right,
                                #93f9b9,
                                #1d976c
                            );
                        }
                    }
                }
            }
            & > .stage {
                width: 20%;
                height: 60%;
                position: relative;
                left: 12.5%;
                top: 20%;
                background: white;
                text-align: center;
            }
        }
        & > .header_right {
            width: 20%;
            height: 100%;
            background: red;
            & > .service {
                width: 80%;
                height: 50%;
                position: relative;
                left: 10%;
                top: 25%;
                display: flex;
                background: white;
                & > div {
                    width: 50%;
                    height: 50%;
                    position: relative;
                    top: 20%;
                    & > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .ranking > img {
        background: yellow;
    }

    .setting > img {
        background: black;
    }

    .content {
        width: 100%;
        height: 70%;
        font-size: 12px;
        & > .user_gauge {
            width: 50%;
            height: 20%;
            padding-top: 2.5%;
            margin: 0 auto;
            & > div {
                width: 100;
                height: 20%;
                text-align: center;
                & > .gauge_progress::-webkit-progress-bar {
                    background: rgba(0, 0, 0, 0);
                    border-radius: 10px;
                    box-shadow: inset 3px 3px 10px #ccc;
                }
                & > .gauge_progress::-webkit-progress-value {
                    border-radius: 10px;
                    background: #1d976c;
                    background: -webkit-linear-gradient(
                        to right,
                        #93f9b9,
                        #1d976c
                    );
                    background: linear-gradient(to right, #93f9b9, #1d976c);
                }
            }
        }
    }

    .footer {
        width: 100%;
        height: 15%;
        display: flex;
        & > div {
            width: 33.33%;
            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

const Game = ({ children }: any) => {
    return <GameTemplate>{children}</GameTemplate>;
};

export default Game;
