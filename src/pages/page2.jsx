export default function Page2() {
    return (
        <>
            <div className="grid grid-cols-3 h-screen">
                <div className="col-span-1 bg-amber-100 h-full">
                    <ul className="p-4 flex flex-col gap-2 font-extrabold">
                        <li className="bg-slate-100 p-4 duration-300 ease-out rounded-2xl hover:bg-gray-400">
                            مقدمة عن لغة Golang
                        </li>
                        <li className="bg-slate-500 text-white p-4 duration-300 ease-out rounded-2xl hover:bg-gray-400">
                            تجهيز البيئة البرمجية وتحميل مترجم اللغة
                        </li>
                        <li className="bg-slate-100 p-4 duration-300 ease-out rounded-2xl hover:bg-gray-400">
                            المتغيرات في لغة Golang
                        </li>
                        <li className="bg-slate-100 p-4 duration-300 ease-out rounded-2xl hover:bg-gray-400">
                            الدوال في لغة Golang
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 p-4">
                    <img src="https://i.ytimg.com/vi/etSN4X_fCnM/maxresdefault.jpg" />
                    <div className="p-4">
                        <p>
                            شرح مبسط للغة Golang وكيفية تجهيز البيئة البرمجية وتحميل مترجم اللغة
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}