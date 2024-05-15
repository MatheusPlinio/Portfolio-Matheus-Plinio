import FetchDataProfile from "@/app/api/profile/route";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";

export default async function Page() {

    const data = await FetchDataProfile()

    return (
        <div>
            <div className="absolute top-4 right-4">
                <LogoutButton />
            </div>
            <div className="border-2 rounded-xl shadow-xl p-2 w-full max-w-xl">
                <div className="text-center">
                    <span>Profile Picture</span>
                </div>
                <div className="flex justify-center p-5">
                    <Image
                        className="rounded-xl"
                        alt="profile_picture"
                        src="/IMG_4452_0spsnuL.jpg"
                        width="90"
                        height="90"
                    />
                </div>
                <div className="m-2 w-96">
                    <div className="m-4">
                        <span className="font-semibold">Your Name</span>
                    </div>
                    <div className="m-4">
                        <p className="ml-6">{data.name}</p>
                    </div>
                </div>
                <div className="m-2 w-96">
                    <div className="m-4">
                        <span className="font-semibold">Your E-mail</span>
                    </div>
                    <div className="m-4">
                        <p className="ml-6">{data.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}