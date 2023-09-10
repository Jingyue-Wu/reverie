
export default function Slider() {
    return (
        <>
            <div className="flex gap-6 items-center m-3">
                <h1 className="font-normal text-sm">Title</h1>
                <input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
            </div>

        </>
    );
}
