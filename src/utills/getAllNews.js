export const getAllNews = async()=>{
    const res = fetch('https://the-news-portal-server.vercel.app/all-news',{
        next:{
            revalidate: 60
        }
    });

return (await res).json()
}
