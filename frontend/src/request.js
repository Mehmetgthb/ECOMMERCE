import axios from "axios";

 const base_url="http://localhost:5000/api/"

 const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTM4ZThmZDVkOTBmYzU4YzUwNDI2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTYyODY4NCwiZXhwIjoxNjg1ODg3ODg0fQ.5o0RuNSeyZ8JmfX3zJ6njWQX-Hd8lz40ZZwXkGXsE68"
 

 export const adminreq=axios.create({
    baseURL:base_url,
    headers:{token:`Bearer ${Token}`}
 })