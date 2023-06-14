import mongoDBConnect from "@/config/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

/**
 * Get all posts
 */
export const GET = async () => {
  try {
    await mongoDBConnect();
    const posts = await Post.find();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

/**
 * Create post
 */
export const POST = async (request) => {
  try {
    await mongoDBConnect();
    const data = await request.json();
    const post = await Post.create({ ...data });

    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

/**
 * Delete post
 */
export const DELETE = async (request) => {
  try {
    await mongoDBConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const post = await Post.findByIdAndDelete(id);
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
