import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import './SearchBox.css'

const initialValues = {
  searchbox: "",
};

const SearchBox = ( {filter, onFilterChange} ) => {
    
const searchboxFieldId = useId();

const handleSubmit = (values, actions) => {
		actions.resetForm();
	};

return (
    <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
    >
            <Form className='search-form'>
                <label htmlFor={searchboxFieldId}>Find contacts by name</label>
                <br />
                <Field className='search-form-field'
                    type="text"
                    name="searchbox"
                    id={searchboxFieldId}
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}
                />
            </Form>
    </Formik>
  );
};
export default SearchBox