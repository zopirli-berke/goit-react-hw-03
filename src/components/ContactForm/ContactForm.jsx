import css from "./ContactForm.module.css";
import { Field, Formik, Form } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useId } from "react";

const phoneRegExp = /^[0-9-]+$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field type="text" name="name" className={css.field} id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.formLabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          className={css.field}
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
