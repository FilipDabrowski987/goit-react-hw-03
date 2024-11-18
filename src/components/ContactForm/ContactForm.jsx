import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import './ContactForm.css'

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name should only contain letters and spaces')
        .min(2, 'Contact name too short')
        .max(50, "Contact name too Long!")
        .required("Required"),
    number: Yup.string()
        .matches(/^[0-9()+\-.\s]+$/, 'Number should only contain digits and valid symbols (+, -, (), .)')
        .min(2, 'Contact number too short')
        .max(50, "Contact number too Long!")
        .required("Required"),
});

const initialValues = {
    name: "",
    number: ""
};

const ContactForm = ({ onAddContact }) => {
const nameFieldId = useId();
const numberFieldId = useId();

const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

        onAddContact(newContact);
        actions.resetForm();
  };
    
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}>
        <Form className='new-contact-form'>
                <label className='new-contact-form-label' htmlFor={nameFieldId}>Name</label>
                <Field  type="text" name="name" id={nameFieldId} className='new-contact-form-field'/>
                <ErrorMessage name="name" as="span" />
                <label className='new-contact-form-label' htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" id={numberFieldId} className='new-contact-form-field' />
                <ErrorMessage name="number" as="span"  />
                <div >
                    <button className='new-contact-form-button' type="submit">Add contact</button>
                </div>
        </Form>
    </Formik>
  );
};
export default ContactForm;