import React from 'react';
import s from './style.module.sass'
import { LeftSquareFilled, RightSquareFilled } from '@ant-design/icons';

export default function Slider() {
    return (
        <div className={s.slider_container}>
            <div className={s.slider_circle}>
                <p></p>
            </div>
            <div className={s.slider_btn}>
                <LeftSquareFilled />
                <RightSquareFilled />
            </div>
        </div>
    )
}
