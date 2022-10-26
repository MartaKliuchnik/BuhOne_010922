import React from 'react';
import ServicesCard from '../ServicesCard';
import { data } from './data';
import s from './style.module.sass';
import AddServices from '../AddServices'

export default function Services() {

    return (
        <section className={s.services}>
            <div className={['wrapper', s.wrapper].join(' ')}>
                <p className='subheader'>Наши услуги</p>
                <h2>Мы специализируемся</h2>
                <div className={s.cards_container}>
                    {
                        data.map(el =>
                            <ServicesCard key={el.id} {...el} />)
                    }
                    <AddServices/>
                </div>
            </div>
        </section>
    )
}
