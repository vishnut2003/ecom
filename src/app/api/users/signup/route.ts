import { NextRequest, NextResponse } from "next/server";
import userHelper from '@/helpers/userHelpers';

export async function POST(request: NextRequest) {
    const formData: {
        username: string,
        email: string,
        password: string
    } = await request.json();
    
    userHelper.signupUser(formData)

    return NextResponse.json('Hello Signup route!')
}