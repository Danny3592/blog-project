import { Form } from "react-router-dom";
import classes from './css/EventForm.module.css'
export default function EventForm({ method }) {
  return (
    <>
      <Form method={method}>
        {/* 標題輸入框 */}
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" placeholder="Enter title" />

        {/* 描述輸入框 */}
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" placeholder="Enter description"></textarea>

        {/* 圖片上傳框 */}
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" accept="image/*" />

        {/* 提交按鈕 */}
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
