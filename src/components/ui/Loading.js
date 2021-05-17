import React from 'react'
import { Spinner } from 'reactstrap';
import './loading.css';

export const Loading = () => {
    return (
        <div className="divPadre">
            <div className="divHijo">
                <Spinner color="primary" type="grow" className="spinnerReactstrap"/>
            </div>
        </div>
    )
}
