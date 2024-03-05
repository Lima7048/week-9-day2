// app/posts/[id]/page.jsx
import { notFound } from "next/navigation";
// import { sql } from "@vercel/postgres";

export default async function PostPage({ params }) {
  const { rows } = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  const post = rows?.[0];

  // if there is no post, run the notFound function to show the not-found.jsx page.
  if (!post) {
    notFound();
  }

  // otherwise, get on with rendering the page.
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
