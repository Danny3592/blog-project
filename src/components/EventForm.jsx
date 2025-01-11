import { Form } from "react-router-dom";

export default function EventForm({method}){

  return <>
  
    <Form method={method}>

      <input  type="text" name="title"/>

      <input  type="text" name="description"/>

    </Form>

  </>
  
}