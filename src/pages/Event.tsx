import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { fetGuests } = useActions()
    const { guests } = useTypedSelector(state => state.event)

    useEffect( () => {
        fetGuests()
    }, [])
    return (
        <Layout>
            <EventCalendar events={[]}/>
            <Row justify={'center'}>
                <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
                title="Добавить события"
                visible={modalVisible}
                footer={null}
                onCancel={() => {setModalVisible(false)}}
            >
                <EventForm guests={guests}/>
            </Modal>
        </Layout>
    );
};

export default Event;