import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.redirect(new URL("/admin/login", "http://localhost"), {
    status: 302,
  });

  response.cookies.delete("admin-session");
  return response;
}
