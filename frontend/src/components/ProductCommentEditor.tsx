import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ProductCommentInfo, UserProps } from '../types';
import { generateCommentID, getUser } from '../util/api';


function clamp(min: number, max: number, val: number) {
    return val > max ? max : val < min ? min : val;
}

type ProductCommentEditorProps = {
    info: Partial<ProductCommentInfo> & { author: string, id: string },
    onRemove: (commentID: string) => void,
    onSave: (comment: ProductCommentInfo) => void,
    onClose: (commentID: string) => void,
};

export default function ProductCommentEditor({ info, onRemove, onSave, onClose }: ProductCommentEditorProps) {
    const [ comment, setComment ] = useState<ProductCommentInfo>({
        author: info.author,
        title: info.title ?? '',
        content: info.content ?? '',
        rating: clamp(0, 5, info.rating ?? 0),
        likes: info.likes ?? 0,
        dislikes: info.dislikes ?? 0,
        commentId: info.commentId ?? generateCommentID(),
    });


    const isCommentValid = () => comment.title.length > 0;

    let [title, setTitle] = useState<string>(comment.title);
    let [content, setContent] = useState<string>(comment.content);
    let [rating, setRating] = useState(comment.rating);

    useEffect(() => {
        const clamped = clamp(0, 5, rating);
        if (clamped !== rating) setRating(clamped);
    }, [rating]);

    return (
        <div className="row g-0 mt-1 ">
            <div className="col card mx-auto">
                <div className="row g-2 g-md-0">
                    <div className="col-12 col-md-2 border mx-auto bg-light">
                        <div className="row g-0">
                            <div className="col-2 col-md-12 text-center">
                                <img className="img-fluid"
                                    src={getUser(comment.author)?.profileImage} alt="profile" />
                            </div>
                            <div className="col col-md-12 text-center">
                                <span>{getUser(comment.author)?.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex p-3 flex-column">
                        <div className="row">
                            <div className="d-flex">
                                {/* TODO: implement rating
                                <div className="">
                                    <div className="flex-shrink-1 fluid comment-rating">
                                        {[...new Array(comment.rating)].map(() => <span className="fa fa-star"></span>)}
                                        {[...new Array(5 - comment.rating)].map(() => <span className="fa fa-star-o"></span>)}
                                    </div>
                                </div> */}
                                <input placeholder="Título" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value); setComment({...comment, title: e.target.value}) }} name='title' id='title' type='text' />
                            </div>
                        </div>
                        <div className="row flex-grow-1 mt-1">
                            <textarea placeholder="Descrição" className="flex-grow-1 form-control" value={content} onChange={(e) => { setContent(e.target.value); setComment({...comment, content: e.target.value})}} name='description' id='description' ></textarea>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="#0" onClick={(e) => { e.preventDefault(); if (isCommentValid()) onSave(comment); }}>
                                    <div className="text-center" style={{ fontSize: '2.5em', color: 'blue' }} >
                                        <i className="fa fa-check"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#0" onClick={(e) => { e.preventDefault(); onRemove(comment.commentId) }}>
                                    <div className="text-center" style={{ fontSize: '2.5em', color: 'darkred' }} >
                                        <i className="fa fa-trash"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#0" onClick={(e) => { e.preventDefault(); onClose(comment.commentId) }}>
                                    <div className="text-center" style={{ fontSize: '2.5em', color: 'black' }} >
                                        <i className="fa fa-times"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
}