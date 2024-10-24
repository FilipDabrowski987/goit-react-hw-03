import { Formik, Form, Field } from 'formik';
import { useId } from "react";

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
            <Form>
                <label htmlFor={searchboxFieldId}>Find contacts by name</label>
                <br />
                <Field
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