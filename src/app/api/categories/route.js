// /api/categories/route.js

import connect from '@/db/conn';
import Category from '@/models/category';
import { NextResponse } from 'next/server';

export default async function handler(req) {
  await connect();

  try {
    const categories = await Category.find({});
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
}
