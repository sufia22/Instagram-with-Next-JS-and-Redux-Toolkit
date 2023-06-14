import mongoDBConnect from "@/config/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  try {
    await mongoDBConnect();
    const data = await request.json();

    const id = params.id;
    const post = await Post.findByIdAndUpdate(id, { ...data }, { new: true });
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
