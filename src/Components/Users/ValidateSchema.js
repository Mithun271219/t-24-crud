import { yupToFormErrors } from 'formik';
import * as Yup from 'yup';

export const CreateuserSchema= Yup.object({
    name: Yup.string().min(3).max(20).required('Name is mandatory'),
    email: Yup.string().email().required('email is required'),
    website: Yup.string().required('website is reqyired'),
    username: Yup.string().min(4).required().oneOf([Yup.ref('name'), null],'name and username should match')
})