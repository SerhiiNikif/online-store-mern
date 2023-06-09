import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzVkZTZhNzhkZGU4NTI1ZTY0NTJhYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjIzOTM2MCwiZXhwIjoxNjg2NDk4NTYwfQ.-jF6N05z1o2NkqN3pG6iq_jyyvfInlirUDT6R1ZK-4M"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});

