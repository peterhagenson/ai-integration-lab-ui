
export function GetNotified() {
    return (
        <div class="w-full flex justify-center items-center bg-gray-100">
            <div class="flex flex-col justify-center items-center">
                <h1 class="text-1xl font-bold mt-4">Get Notified When There Is A New Post!</h1>
                <p class="text-sm">Subscribe to our newsletter for updates</p>
                <form class="flex flex-col mt-4 items-center mb-4">
                    <input type="email" placeholder="Enter your email" class="border border-gray-300 p-2 rounded mb-2 h-8 w-52" />
                    <button type="submit" class="bg-blue-500 text-white p-1 rounded w-25 h-8">Subscribe</button>
                </form>
            </div>
        </div>
    )
}