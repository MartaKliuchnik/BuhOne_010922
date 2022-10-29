import React from 'react';
import Slider from '../Slider';
import s from './style.module.sass';


export default function Reviews() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.subheader}>Отзывы</p>
            <h2>Ваши благодарности</h2>
            <div className={s.block_review}>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. </p>
            </div>
            <Slider/>
        </div>
    )
}
