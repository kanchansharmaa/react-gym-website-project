
export const exerciseOptions={
   
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
        
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        },
      };
 export  const youtubeOptions = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
     
        headers: {
          'X-RapidAPI-Key': '097de7e0f0mshe49b70228cbbb5fp144780jsn5d7b4010ea23',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
      


export const fetchData=async(url , options)=>{
const response =await fetch(url,options);

const data=await response.json();
return data;

}