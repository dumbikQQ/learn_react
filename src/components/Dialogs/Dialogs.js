import React from "react";
import s from "./Dialogs.module.css"
import {Link} from "react-router-dom";

const Messages = (props) => {
    return (
        <p className={s.soobshenia}>
            {props.name}
        </p>
    )
} //Локальная компонента ползволяющая сократить код

const DialogsItem = (props) => {
    let path = props.id
    return (
        <p>
            <Link className={s.links} to={path}>{props.name}</Link>
        </p>)
} //Локальная компонента ползволяющая сократить код

const Dialogs = (props) => {
    // let message = [
    //     {id: 1, name: "Proverka soobshenii"},
    //     {id: 2, name: "Схема обращений сложная жесть"},
    //     {id: 3, name: "Просто пизда"},
    //     {id: 4, name: "Как жить"},
    //     {id: 5, name: "Я учть не умер"}
    // ] //лбъект для имитации сервера
    let messageReader = props.message.map (m =>  <Messages name={m.name} id={m.id}/>)
// функция бегущая по массиву и возвращающая jsx
    return (
        <div className={s.dialog}>
            <div className={s.names}>
                <DialogsItem name="Adolf" id="1"/>
                <DialogsItem name="Grendalf" id="2"/>
                <DialogsItem name="Ozzi" id="3"/>
                <DialogsItem name="Bobagnida" id="4"/>
            </div>
            <div className={s.soobshenia}>
                {messageReader}

            {/*  компонента задающая пропсы через объект с данными  */}
            </div>

        </div>
    )
}
export default Dialogs;