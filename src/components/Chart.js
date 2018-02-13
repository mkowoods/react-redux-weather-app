import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

const mean = (data) => data.reduce((a,b) => (a+b)) / data.length

export default function Chart(props){
    //note units are in kelvins for chart 
    const value = _.round(mean(props.data)*10)/10.0;
    return (
        <div>
            <Sparklines data={props.data} height={120} width={180} min={props.min} max={props.max}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{`Avg: ${value} ${props.units}`}</div>                    
        </div>
    );
}
