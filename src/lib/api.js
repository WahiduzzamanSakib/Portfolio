// import localProjects from "../../public/projects.json";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export const getProjects = async () => {
//   try {
//     const res = await fetch(`${API_URL}/projects`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch projects");
//     }

//     const data = await res.json();

//     // API data থাকলে API, না থাকলে local JSON
//     if (Array.isArray(data) && data.length > 0) {
//       return data;
//     }

//     return localProjects;
//   } catch (error) {
//     console.error("API failed, using local data:", error);

//     return localProjects;
//   }
// };

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getProjects = async () => {
  const res = await fetch(`${API_URL}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};