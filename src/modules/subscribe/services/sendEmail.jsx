import { message } from 'antd';

import history from '../../../commons/history';

message.config({
    top: 150,
});

const headers = {
    'Content-type': 'application/json',
};

const emailJSConfig = {
    user_id: 'user_o2WFNWIiA5oD3RC5Q9IGx',
    service_id: 'michal_karbasz_gmail_com',
    template_id: 'template_Z7tP6DFi',
};

const setOptions = params => ({
    method: 'POST',
    headers: headers,
    body: JSON.stringify(params),
});

export const sendEmail = ({ name, email, childName, childAge, message }) => {
    const params = {
        ...emailJSConfig,
        template_params: {
            name,
            email,
            childName,
            childAge,
            message,
        },
    };

    const options = setOptions(params);

    message.loading('Wysyłanie', 1);

    return fetch('https://api.emailjs.com/api/v1.0/email/send', options)
        .then(resp => {
            if (resp.ok) {
                history.push('/result');
            } else {
                message.error('Coś poszło nie tak, spróbuj jeszcze raz...', 3);
            }
        })
        .catch(err => message.error(`Coś poszło nie tak, błąd: ${err}`, 3));
};
