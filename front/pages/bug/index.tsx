import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BugTemplate from '../../components/game/bug/bug';

const bug = ({ closebug }: any) => {
    return (
        <BugTemplate>
            <div className="content">
                <div className="image">
                    <img src="error2.jpg" />
                    <button className="closeBtn" onClick={() => closebug()}>
                        에러 수정..
                    </button>
                </div>
            </div>
        </BugTemplate>
    );
};

export default bug;
