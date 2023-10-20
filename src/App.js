import "./App.css"
import { Formik, Form, Field, ErrorMessage } from "formik"

function App() {
  return (
    <div className="App">
      <div>
        <h1>Formik!</h1>
        <Formik
          initialValues={{ name: "", email: "", tel: "" }}
          validate={(values) => {
            const errors = {}
            if (!values.name) {
              errors.name = "Ви не вказали ім'я"
            } else if (!/^[а-яА-ЯіІїЇ'a-zA-Z]+$/i.test(values.name)) {
              errors.name = "Ім'я має складатись тільки з букв"
            }
            if (!values.email) {
              errors.email = "Ви не вказали пошту"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Пошта вказана не вірно"
            }
            if (!values.tel) {
              errors.tel = "Ви не вказали телефон"
            } else if (!/[0-9]{12}/i.test(values.tel)) {
              errors.tel = "Телефон має складати 12 цифр"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
              <Field
                type="tel"
                name="tel"
                placeholder="Telephone: 123456789012 (12 цифр)"
                maxlength="12"
              />
              <ErrorMessage name="tel" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Відправити
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default App
