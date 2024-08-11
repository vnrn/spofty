import { NextRequest, NextResponse } from "next/server";
import {Download} from './index.js'
export async function POST(request: NextRequest) {
    try {
        const { url } = await request.json();
        const track = await Download(url);
        return NextResponse.json({ track });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message });
    }
}