import User from "@/models/User";
import connectDB from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return NextResponse.json({ msg: "random" }, { status: 401 })
    }

    await connectDB();

    const dbuser = await User.findOne({ kindeId: user.id })

    if (!dbuser) {
        await User.create({
            kindeId: user.id,
            name: user.username ? user.username : user.given_name,
            email: user.email
        })
    }

    return NextResponse.redirect("http://localhost:3000/")
}