import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Contact name too short').max(50, "Contact name too Long!").required("Required"),
    number: Yup.string().min(2, 'Contact number too short').max(50, "Contact number too Long!").required("Required")
});

const initialValues = {
    name: "",
    number: ""
};

const ContactForm = () => {
const nameFieldId = useId();
const numberFieldId = useId();

const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}>
        <Form>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="name" id={nameFieldId} />
                <label htmlFor={numberFieldId}>Number</label>
                <Field type="" name="number" id={numberFieldId}/>
                <button type="submit">Add contact</button>
        </Form>
    </Formik>
  );
};
export default ContactForm