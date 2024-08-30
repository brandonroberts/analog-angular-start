'use server';

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    return { error: true };
  }

  const data = await res.json();

  console.log('server!');

  return data;
}