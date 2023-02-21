import { loadPost } from "./posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";

const body =
  "Hello world! This is my first post.\n\n## This is a heading 2\n\nThis is a paragraph.\n\nThis is a list:\n\n- Item 1\n- Item 2\n- Item 3\n- Item 4\n";

Deno.test(
  "loadPost() returns null if the post does not exists",
  async () => {
    const post = await loadPost("non-existent");
    assertEquals(post, null);
  },
);

Deno.test(
  "loadPost() return a post object if post does exists",
  async () => {
    const post = await loadPost("hello-world");
    assertEquals(post?.id, "hello-world");
    assertEquals(post?.title, "Hello World");
    assertEquals(post?.date.toISOString(), "2023-02-12T00:00:00.000Z");
    assertEquals(post?.excerpt, "This is my first post");
    assertEquals(post?.body, body);
  },
);
