/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Form } from 'react-router-dom';
import classes from './css/EventForm.module.css';
import { useMutation } from 'react-query';
import { createNewEvent } from '../util/http';
export default function EventForm({ method }) {
  

  function handleSubmitted(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("formData = ",formData)
    mutate(formData);
  }
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: (data) => {
      console.log('Event created successfully:', data);
    },
    onError: (err) => {
      console.error('Error creating event:', err);
    },
  });

  return (
    <>
      <Form method={method} onSubmit={handleSubmitted}>
        {/* 標題輸入框 */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
          required
        />
        {/* 描述輸入框 */}
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          required
        ></textarea>
        {/* 圖片上傳框 */}
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" accept="image/*" />
        {/* 提交按鈕 */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>{' '}
        {isError && <p>{error.message}</p>}
      </Form>
    </>
  );
}
