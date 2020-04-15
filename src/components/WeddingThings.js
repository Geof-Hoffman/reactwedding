import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class WeddingThings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedThing: null
        };
    }

    onThingSelect(thing) {
        this.setState({selectedThing: thing});
    }

    renderSelectedThing(thing) {

        if (thing) {
            return (
                <Card>
                    <CardImg top src={thing.image} alt={thing.name} />
                    <CardBody>
                        <CardTitle>{thing.name}</CardTitle>
                        <CardText>{thing.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const weddingThings = this.props.things.map(thing => {
            return (
                <div key={thing.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onThingSelect(thing)}>
                        <CardImg width="100%" src={thing.image} alt={thing.name} />
                        <CardImgOverlay>
                            <CardTitle>{thing.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {weddingThings}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                    {this.renderSelectedThing(this.state.selectedThing)}
                    </div>
                </div>
            </div>
        );
    }
}

export default WeddingThings;

