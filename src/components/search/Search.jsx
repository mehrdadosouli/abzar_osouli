import { useState } from "react"

export default function Search() {
    const [search,setSearch] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <form className="w-full lg:block hidden mx-auto col-span-2" onSubmit={submitHandler}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">جستجو</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 p-2 flex items-center ps-3 rounded-l-lg bg-primaryColor hover:cursor-pointer" type="submit">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} id="default-search" className="block w-full p-3 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="لطفا محصول مورد نظر خود را جستجو کنید" required />
            </div>
        </form>

    )
}
