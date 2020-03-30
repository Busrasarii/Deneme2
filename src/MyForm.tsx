import { Button, TextField } from '@material-ui/core';
import { Form, Formik, Field } from 'formik';
import * as React from 'react';
import { MyField } from './MyField';

interface Props {
    onSubmit: (values: Values) => void
}

interface Values {
    productName: string;
    productContent: string;
    productNumber: string;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {


    return (
        <Formik initialValues={{ id: '', productName: '', productContent: '', productNumber: '' }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
        >
            {({ values, handleChange, handleBlur }) => (
                <Form>
                    <div>
                        <Field
                            name="id"
                            placeholder="Product id"
                            component={MyField}
                        />

                    </div>
                    <div>
                        <Field
                            name="productName"
                            placeholder="Product Name"
                            component={MyField}
                        />

                    </div>
                    <div>
                        <Field
                            name="productContent"
                            placeholder="Product Content"
                            component={MyField}
                        />

                    </div>
                    <div>
                        <Field
                            name="productNumber"
                            placeholder="Product Total"
                            component={MyField}
                        />

                    </div>


                    <br></br>

                    <Button type="submit">submit</Button>

                </Form>
            )}
        </Formik>
    )
}

