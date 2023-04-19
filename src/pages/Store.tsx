import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import React from 'react'

const Store = () => {
    return (
        <React.Fragment>
            <h1>Store</h1>
            {storeItems.map((item, i) => {
                const data = JSON.stringify(item);
                return (
                    <Row>
                        <Col>
                            {data}
                        </Col>
                    </Row>
                )
            })}
        </React.Fragment>
    )
}

export default Store