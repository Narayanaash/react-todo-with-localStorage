import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
import TodosForm from './TodosForm'
import List from './List'

class Todos extends React.Component {
    state = {
        items: [
            {
                id: uuid(),
                item: '',
                done: false,
            }
        ],
    }
    
    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items'))
        this.setState({items:items})
      }

    removeItem = id => {
        const { items } = this.state
        let newState = items.filter(item => item.id !== id )
        this.setState({
            items: newState,
        })
        localStorage.setItem('items', JSON.stringify(newState))
    }

    doneItem = id => {
        let items = this.state.items
        let targetItem = items.find(item => {return item.id === id})
        targetItem.done = true
        this.setState({items:items})
        localStorage.setItem('items', JSON.stringify(items))
    }

    handleSubmit = item => {
        let newState = [...this.state.items, {id: uuid(), item: item, done: false}]
        this.setState({ items: newState})
        localStorage.setItem('items', JSON.stringify(newState))
    }
    
    render() {
        const { items } = this.state
        return (
            <Container>
                <Row className="">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card className="my-5 pb-2">
                            <Card.Header className="text-uppercase" as="h5"><i className="fa fa-calendar-minus-o"></i> Simple Todo App</Card.Header>
                            <Card.Body>
                                <TodosForm handleSubmit={this.handleSubmit} />
                            </Card.Body>
                            <List items={items} removeItem={this.removeItem} doneItem={this.doneItem} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Todos
