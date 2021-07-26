import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ProductCommentInfo, UserProps, DEFAULTS } from '../types';
import { getCurrentUserNick, isAuth, isAdmin } from '../util/auth-util';
import { getUser } from '../util/api';
import { useState, useEffect } from 'react';

type ProductCommentProps = {
    info: ProductCommentInfo,
    onRemove: (commentID: string) => void,
    onEdit: (commentID: string) => void,
};

export default function ProductComment({ info, onEdit, onRemove }: ProductCommentProps) {

    const [authorProps, setAuthorProps] = useState<UserProps | undefined>(undefined);

    useEffect(() => {
        getUser(info.author).then(a => { if (a) setAuthorProps(a) });
    }, [info]);

    return (
        <div className="row g-0 mt-1 ">
            <div className="col card mx-auto">
                <div className="row g-2 g-md-0">
                    <div className="col-12 col-md-2 border mx-auto bg-light">
                        <div className="row g-0">
                            <div className="col-2 col-md-12 text-center">
                                <img className="img-fluid"
                                    src={authorProps?.profileImage || DEFAULTS.PROFILE_DEFAULT} alt="profile" />
                            </div>
                            <div className="col col-md-12 text-center">
                                <span>{authorProps?.name ?? "Loading..."}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col p-3">
                        <div className="d-flex">
                            <div className="flex-shrink-1 fluid comment-rating">
                                {[...new Array(Math.round(Math.max(0, Math.min(5, info.rating ?? 0))))].map(() => <span className="fa fa-star"></span>)}
                                {[...new Array(5 - Math.round(Math.max(0, Math.min(5, info.rating ?? 0))))].map(() => <span className="fa fa-star-o"></span>)}
                            </div>
                            <div className="px-2">
                                <h5>{info.title ?? "Sem título"}</h5>
                            </div>
                        </div>
                        <p>
                            {info.content}
                        </p>
                        <div className="row">
                            <div className="col">
                                {
                                    (isAuth() && isAdmin() && (authorProps?.nick !== getCurrentUserNick())) ?
                                        <a href="#0" onClick={(e) => { e.preventDefault(); onRemove(info.commentId); }}>
                                            <div className="text-center" style={{ fontSize: '2.5em', color: 'darkred' }} >
                                                <i className="fa fa-trash"></i>
                                            </div>
                                        </a>
                                        : ''
                                }
                            </div>
                            <div className="col">
                                {
                                    (isAuth() && (authorProps?.nick === getCurrentUserNick())) ?
                                        <a href="#0" onClick={(e) => { e.preventDefault(); onEdit(info.commentId); }}>
                                            <div className="text-center" style={{ fontSize: '2.5em', color: 'darkred' }} >
                                                <i className="fa fa-edit"></i>
                                            </div>
                                        </a>
                                        : ''
                                }
                            </div>
                            <div className="col">
                                <span className="fa fa-thumbs-o-up"></span>
                                <span className="fa fa-thumbs-o-down"></span>
                            </div>
                            <div className="col">
                                <span className="fa fa-share-alt"></span>
                                <span className="fa fa-reply"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
}