import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

export async function getEvents() {
  let url = 'http://localhost:3000/posts';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    // console.log('data = ', data);
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function createNewEvent(formData) {
  const url = 'http://localhost:3000/posts';

  try {
    const file = formData.get('image');
    if (file && file.size > 0) {
      // 將文件轉為 Base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        formData.append('imageBase64', reader.result);

        // 提交表單數據
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: formData.get('title'),
            description: formData.get('description'),
            image: reader.result,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create new event');
        }

        return await response.json();
      };
    } else {
      // 不包含文件時僅提交普通數據
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.get('title'),
          description: formData.get('description'),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create new event');
      }

      return await response.json();
    }
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
}
