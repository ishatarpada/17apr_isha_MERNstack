import { Form, Input, Label } from './Components/Form';
import Alert from "./Components/Alert";
import { useState } from 'react';

export default function Home() {

  const model = {
    open: false,
    type: null,
    message: null
  }

  const [alert, setAlert] = useState(model)

  const register = (values , form) => {
    console.log(values);
    if (values.email === "isha@gmail.com" && values.password === "isha") {
      setAlert({
        open: true,
        type: "success",
        message: "login success"
      })
    }
    else {
      setAlert({
        open: true,
        type: "error",
        message: "Error"
      })
    }

    form.reset();
  };

  return (
    <div className="mx-auto p-12 min-h-screen min-w-screen bg-gray-800 flex justify-center items-center">
      <div className="shadow p-5 bg-white rounded-xl w-1/2 mx-auto">
        <h1 className="font-bold font-serif mb-5 text-2xl">Fill This Information</h1>
        <Form getValue={register}>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            required
            placeholder="Write your email"
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form>

        <Alert type={alert.type} open={alert.open} onClose={()=>setAlert(model)}>{alert.message} </Alert>
    </div>
    </div >
  );
}
