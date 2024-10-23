import { Formik, Form, Field } from 'formik';
import { useId } from "react";

const initialValues = {
  searchbox: ""
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
        {({ handleChange, setFieldValue }) => (
            <Form>
                <label htmlFor={searchboxFieldId}>Find contacts by name</label>
                <br />
                <Field
                    type="text"
                    name="searchbox"
                    id={searchboxFieldId}
                    value={filter}
                    onChange={(e) => {
                        handleChange(e);
                        const { value } = e.target;
                        setFieldValue("searchbox", value);
                        onFilterChange(value);
                    }}
                />
            </Form>
        )}
    </Formik>
  );
};
export default SearchBox