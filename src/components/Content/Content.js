import React from "react";
import Post from "./Post/Post";
import s from "./Content.module.css" // модуль ксс, обратить внимание на ренейм и вписывание класса
const Content = () => {
    return (
        <div className={s.Content}>
            <Post autor="Anton" content="я пудж" likes="0"/>
            <Post autor="Andrei" content="Хейтер вампиров" likes="2"/>
            <Post autor="Igor" content="Раст лучшая игра в мире" likes="1"/>
            <Post autor="valera" content="Сверху долбаеб" likes="110"/>
            <Post autor="Artem" content="Где стрим" likes="20"/>
        </div>
    )
}

export default Content;
