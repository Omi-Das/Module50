export const getUsers = async () =>
{
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()
    return data
}

// export const getUserById = async(userId) => {
//     const res = await fetch(`http://localhost:5000/users/${userId}`)
//     const data = await res.json()
//     return data
// }
export const getUserById = async (userId) => {
    try {
        const res = await fetch(`http://localhost:5000/users/${userId}`, {
            cache: 'no-store' // লেটেস্ট ডাটা নিশ্চিত করতে
        });

        // যদি সার্ভার থেকে রেসপন্স ঠিক না আসে (যেমন: ৪0৪ বা ৫০০)
        if (!res.ok) {
            const errorText = await res.text();
            console.error("Server Response Error:", errorText);
            return null;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Fetch Process Error:", error);
        return null;
    }
};
