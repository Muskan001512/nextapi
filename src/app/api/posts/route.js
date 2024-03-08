import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    let page = parseInt(searchParams.get("page"), 10);
  
    if (isNaN(page) || page < 1) {
      page = 1;
    }
  
    const POST_PER_PAGE = 2;
  
    try {
      const posts = await prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
      });
      console.log("Posts:", posts);
  
      return new NextResponse(JSON.stringify(posts, { status: 200 }));
    } catch (err) {
      console.error("Error fetching posts:", err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };