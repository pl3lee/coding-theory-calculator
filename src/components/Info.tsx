import { FcInfo } from "react-icons/fc";

export const Info = ({ info }: { info: string }) => (
    <div className="py-3">
        <div className=" p-3 w-100 flex gap-1 text-xl justify-start align-middle  bg-blue-50 shadow-md rounded-lg">
            <FcInfo className="text-5xl" />
            {info}
        </div>
    </div>

)