import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";

interface EventFormProps {
    guests: IUser[]
}

const EventForm:FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)

    const selectDate = (date: Moment | null) => {
        console.log(date)
    }

    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description:e.target.value})}
                    value={event.description}
                />
            </Form.Item>

            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}>
                <DatePicker
                onChange={date => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select
                    onChange={ (guest: string) => {
                        setEvent({...event, guest})
                    }}
                    style={{ width: 120 }}>
                    {props.guests.map(guest =>
                    <Select.Option
                        key={guest.username}
                        value={guest.username}>
                        {guest.username}
                    </Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item>
                <Row justify='end'>
                    <Button type="primary" htmlType="submit" >
                        Создать
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default EventForm;