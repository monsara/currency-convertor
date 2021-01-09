'use strict';

const refs = {
    inputUah: document.currencyConvertor.elements.uah,
    inputUsd: document.currencyConvertor.elements.usd,
};

refs.inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; cahrset=utf-8');
    request.send();

    // Usage event 'readystatechange':

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log('JSON:', request.response);

    //         const data = JSON.parse(request.response);

    //         refs.inputUsd.value =
    //             Number(refs.inputUah.value) * data.current.usd;
    //     } else {
    //         refs.inputUsd.value = 'Что-то пошло не так';
    //     }
    // });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log('JSON:', request.response);

            const data = JSON.parse(request.response);

            refs.inputUsd.value =
                Number(refs.inputUah.value) * data.current.usd;
        } else {
            refs.inputUsd.value = 'Что-то пошло не так';
        }
    });
});
