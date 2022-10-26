import React from 'react';
import s from './style.module.sass'

export default function AddServices() {

    const submit = event => {
        event.preventDefault();
        const { title_services } = event.target;
        console.log(title_services.value);
        title_services.value = '';
    }

    return (
        <form onSubmit={submit} className={s.form_container}>
            <input type="text" placeholder='Наименование услуги' name="title_services" />
            <button>Добавить</button>
        </form>
    )
}
