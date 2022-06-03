import styled from 'styled-components';

const GameTemplate = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

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

    .back {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -10;
    }

    .header {
        width: 100%;
        max-width: 20rem;
        height: 15%;
        display: flex;
        margin: 0 auto;
        justify-content: space-evenly;
        & > .header_left {
            width: 75%;
            height: 100%;
            display: flex;
            & > .user {
                width: 60%;
                height: 80%;
                position: relative;
                left: 5%;
                top: 10%;
                & > .user_wrap {
                    width: 90%;
                    height: 50%;
                    display: flex;
                    position: relative;
                    top: 5%;
                    left: 2.5%;
                    & > .user_image {
                        display: flex;
                        justify-content: center;
                        width: 30%;
                        height: 100%;
                        & > img {
                            height: 100%;
                            border-radius: 50% 50%;
                            object-fit: cover;
                        }
                    }
                    & > .user_info {
                        width: 70%;
                        height: 100%;
                        position: relative;
                        left: 3%;
                        font-size: 12px;
                        & > .user_name {
                            width: 150%;
                            height: 50%;
                            line-height: 150%;
                        }
                        & > .user_gold {
                            width: 100%;
                            height: 50%;
                            line-height: 150%;
                        }
                    }
                }
                & > .user_progress {
                    width: 95%;
                    height: 40%;
                    position: relative;
                    left: 1%;
                    top: 2%;
                    & > .user_exp {
                        width: 100%;
                        height: 90%;
                        position: relative;
                        font-size: 10px;
                        padding-left: 5%;
                        padding-top: 1%;
                        display: flex;
                        & > .progress_gauge {
                            width: 80%;
                            height: 90%;
                            position: relative;
                            top: 10%;
                            right: 2%;
                            text-align: right;
                            & > .exp_progress {
                                width: 75%;
                                height: 50%;
                                position: absolute;
                                left: 7.5%;
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
                            & > div {
                                width: 110%;
                                height: 100%;
                                position: absolute;
                                left: 7.5%;
                                top: -10%;
                                margin-left: -2%;
                            }
                        }
                    }
                }
            }
            & > .stage {
                width: 40%;
                height: 40%;
                position: relative;
                top: 10%;
                text-align: center;
                border-radius: 0.5rem;
                padding-top: 2%;
                font-size: 14px;
                font-weight: bold;
                display: flex;
                flex-direction: column;
            }
        }
        & > .header_right {
            width: 25%;
            height: 100%;
            & > .service {
                width: 80%;
                height: 60%;
                position: relative;
                left: 10%;
                top: 5%;
                display: flex;
                & > div {
                    width: 50%;
                    height: 50%;
                    position: relative;
                    top: 20%;
                    & > img {
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .ranking {
        z-index: 7;
        & > img {
            float: right;
        }
    }

    .setting {
        z-index: 7;
        position: relative;
        left: 5%;
    }

    .content {
        width: 100%;
        height: 75%;
        font-size: 11px;
        & > .background {
            width: 100%;
            height: 100%;
            & > .main {
                width: 100%;
                height: 80%;
                position: relative;
                top: 5%;
                & > div > img {
                    width: 100%;
                    height: 100%;
                }
                & > .user_chair_desk {
                    width: 60%;
                    height: 50%;
                    position: relative;
                    top: 10%;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    z-index: 1;
                }
                & > .pet_cat {
                    width: 15%;
                    height: 15%;
                    position: relative;
                    left: 60%;
                    z-index: 2;
                    object-fit: scale-down;
                }
                & > .pet_dog {
                    width: 15%;
                    height: 15%;
                    position: relative;
                    top: -10%;
                    left: 25%;
                    z-index: 2;
                    object-fit: cover;
                }
                & > .pet_bird {
                    width: 15%;
                    height: 15%;
                    position: relative;
                    top: -5%;
                    left: 20%;
                    object-fit: cover;
                }
                & > .pet_fish {
                    width: 15%;
                    height: 15%;
                    position: relative;
                    top: -10%;
                    left: 10%;
                    object-fit: fill;
                }
                & > .cheer {
                    width: 30%;
                    height: 50%;
                    position: relative;
                    top: -100%;
                    left: 5%;
                }
                & > .cook1 {
                    width: 60%;
                    height: 50%;
                    position: relative;
                    top: -102%;
                    left: 22%;
                }
                & > .cook2 {
                    width: 60%;
                    height: 50%;
                    position: relative;
                    top: -102%;
                    left: 22%;
                }
                & > .cook3 {
                    width: 60%;
                    height: 50%;
                    position: relative;
                    top: -102%;
                    left: 22%;
                }
                & > .cook4 {
                    width: 100%;
                    height: 50%;
                    position: relative;
                    top: -105%;
                    left: 5%;
                }
                & > .cook5 {
                    width: 25%;
                    height: 40%;
                    position: relative;
                    top: -102%;
                    left: 40%;
                }
                & > .cook6 {
                    width: 60%;
                    height: 50%;
                    position: relative;
                    top: -102%;
                    left: 22%;
                }
                & > .homekeeper1 {
                    width: 30%;
                    height: 50%;
                    position: relative;
                    top: -200%;
                    left: 65%;
                }
                & > .homekeeper3 {
                    width: 45%;
                    height: 50%;
                    position: relative;
                    top: -200%;
                    left: 65%;
                }
                & > .homekeeper4 {
                    width: 30%;
                    height: 50%;
                    position: relative;
                    top: -200%;
                    left: 65%;
                }
                & > .homekeeper5 {
                    width: 30%;
                    height: 50%;
                    position: relative;
                    top: -200%;
                    left: 65%;
                }
                & > .homekeeper6 {
                    width: 30%;
                    height: 50%;
                    position: relative;
                    top: -200%;
                    left: 65%;
                }
                & > .homekeeper2 {
                    width: 45%;
                    height: 50%;
                    position: relative;
                    top: -190%;
                    left: 57%;
                }
                & > .vehicle {
                    width: 30%;
                    height: 30%;
                    position: relative;
                    top: -190%;
                    left: 65%;
                }
            }
            & > .user_gauge {
                width: 50%;
                height: 10%;
                position: relative;
                top: -10.7%;
                left: 65%;
                & > .gauge_name {
                    width: 100%;
                    height: 5%;
                    position: relative;
                    top: 8%;
                    left: 10%;
                }
                & > .progress {
                    width: 100%;
                    height: 5%;
                    text-align: left;
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
    }

    .footer {
        width: 100%;
        height: 10%;
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

    @media only screen and (min-width: 768px) {
        .header {
            max-width: 560px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .header {
            max-width: 768px;
        }
    }
`;

const Game = ({ children }: any) => {
    return <GameTemplate>{children}</GameTemplate>;
};

export default Game;
