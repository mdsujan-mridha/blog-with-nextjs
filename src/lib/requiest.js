

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all blog
async function fetchBlogs() {
    try {
        if (!apiDomain) {
            return [];
        }
        const res = await fetch(`${apiDomain}/blogs`);
        if (!res.ok) {
            throw new Error(`Failed to fetch data,${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    }

}

// fetch single blog 

async function fetchSingleBlog(id) {

    try {
        if (!apiDomain) {
            return null;
        }
        const res = await fetch(`${apiDomain}/blogs/${id}`, { cache: "force-cache" });
        if (!res.ok) {
            throw new Error(`Failed to fetch data,${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }

}


export { fetchBlogs, fetchSingleBlog };