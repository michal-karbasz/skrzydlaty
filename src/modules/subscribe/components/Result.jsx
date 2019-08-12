import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

export const ResultWrapper = () => (
    <Result
        status="success"
        title="Twoja wiadomośc szybuje już do Skrzydlatego Domku"
        subTitle="Dziękujemy za zgłoszenie. Postaramy się odpisać jak najszybciej. W pilnych sprawach prosimy o kontakt telefoniczny."
        extra={[
            <Link to="/o nas">
                <Button type="primary" key="redirect">
                    Powrót
                </Button>
            </Link>,
        ]}
    />
);
