import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard(props) {
    const school = props.schools.map(school => {
        return (
            <div className="row">
                <div className="col-md-3 m-1">
                    <Card>
                        <CardTitle>{ school.name }</CardTitle>
                        <CardBody>{ school.description }</CardBody>
                        <CardText>{  }</CardText>
                    </Card>
                </div>
            </div>
        
        );
    });

    return school;

}

export default RenderCard;