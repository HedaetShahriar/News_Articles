export async function fetchFilteredData(filters = {}) {
    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${filters.country}&language=${filters.language}&category=${filters.category}&status=${filters.status}&sources=${filters.sources.join(",")}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
async function fetchAllData() {
     try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

//save the data to db


export default fetchAllData;