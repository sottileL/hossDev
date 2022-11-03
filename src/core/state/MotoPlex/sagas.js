/* eslint-disable no-unused-vars */
import {
    all,
    takeLatest,
    put
} from 'redux-saga/effects';

import get from 'lodash/get';
// import {SMTPClient} from 'emailjs';
import Actions from './actions';
import Types from './types';

const {
    setIsLoading,
    setError
} = Actions;

const {SUBMIT_EMAIL} = Types;

function* submitEmail(form) {
    try {
        yield put(setIsLoading(true));
        yield put(setError(''));
        // yield sendMailClient(`Nombre: ${form.name}</br>Apellido: ${form.surname}</br>Teléfono: ${form.phone}
        //         </br>Email: ${form.email}</br>Ciudad: ${form.city}</br>Modelo: ${form.model}</br>
        //         Mensaje: ${form.message}</br>`);
    } catch (error) {
        yield put(setError(get(error, 'message', 'Error desconocido. Vuelva a intentarlo')));
        yield put(setIsLoading(false));
    } finally {
        yield put(setIsLoading(false));
    }
}

export default function* MotoPlexSagas() {
    yield all([
        takeLatest(SUBMIT_EMAIL, submitEmail)
    ]);
}
