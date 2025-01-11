/* eslint-disable react/no-unescaped-entities */
// import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars

import { useQuery } from 'react-query';
import Header from '../components/Header';
import PostList from '../components/PostList';
import { getEvents } from '../util/http';

export default function HomePage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
  // console.log('data = =', data);
  let content;
  if (isPending) {
    content = <p>Loading....</p>;
  }
  if (isError) {
    content = <p>Something wrong!!!{error}</p>;
  }
  if (data) {
    content = <PostList posts={data} />;
  }

  return (
    <>
      <Header />
      {content}
    </>
  );
}
