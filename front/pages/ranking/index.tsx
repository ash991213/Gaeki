import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingTemplate from '../../components/ranking';

interface rankingType {
    ranking: {
        usersRanking: [];
        stageList: [];
    };
}

const Ranking = ({ closeRanking }: any) => {
    const dispatch = useDispatch();
    const Rank = useSelector(
        (state: rankingType) => state.ranking.usersRanking
    );
    const stageList = useSelector(
        (state: rankingType) => state.ranking.stageList
    );
    const user = useSelector((state: any) => state.user);
    const myrank = useSelector((state: any) => state.ranking.myranking);

    const [stage, setStage] = useState(1);

    useEffect(() => {
        dispatch({ type: 'RANKING_LIST_REQUEST' });
        dispatch({ type: 'MY_RANKING_REQUEST', payload: user });
    }, []);

    interface vType {
        nickname: string;
        gold: number;
        rank: number;
        myrank: {};
    }

    const usersRank = () => {
        const users = Rank.map((v: vType, k: number) => {
            return (
                <ul key={k}>
                    <li>{k + 1}</li>
                    <li>{v.nickname}</li>
                    <li>{v.gold}</li>
                </ul>
            );
        });
        return users;
    };

    const myRank = () => {
        return (
            <ul className="myRank">
                <li>{myrank.rank}</li>
                <li>{myrank.myrank.nickname}</li>
                <li>{myrank.myrank.gold}</li>
            </ul>
        );
    };

    const usersStage = () => {
        return stageList.map((v: number, k: number): any => {
            return (
                <span
                    key={k}
                    className={stage === v ? 'onStage' : 'offStage'}
                    onClick={() => {
                        stageRank(v);
                    }}
                >
                    <p className="pStage">{v}</p>
                </span>
            );
        });
    };

    const stageRank = (num: number) => {
        dispatch({ type: 'RANKING_LIST_REQUEST', payload: num });
        setStage(num);
    };

    return (
        <RankingTemplate>
            <div className="content">
                <div className="header">
                    <div className="header_wrap">
                        <div className="logo">로고</div>
                        <div className="rank">랭킹</div>
                    </div>
                    <button className="button" onClick={() => closeRanking()}>
                        X
                    </button>
                </div>
                <div className="stage">stage</div>
                <div className="stage_wrap">{usersStage()}</div>
                <div className="img">
                    <img src="./redux.png" />
                </div>
                <div className="ranking">
                    <ul className="info">
                        <li>순위</li>
                        <li>닉네임</li>
                        <li>재화</li>
                    </ul>
                    {usersRank()}
                    {myrank.rank !== undefined ? myRank() : null}
                </div>
            </div>
        </RankingTemplate>
    );
};

export default Ranking;
