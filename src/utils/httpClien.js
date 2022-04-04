
const API = 'https://api.themoviedb.org/3'

export function getHttpClient(PATH) {
    return fetch(`${API}${PATH}`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzcwMzRiMGIwZjNjM2RmYWVmMTU3MTdiNWY5MmUzOCIsInN1YiI6IjYyNDc5ZDVjYTNiNWU2MDA2NDE5Y2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q_gUFNAWkxB5Y_1HhpUgdFa82X39vnXpMLv_6q6tRSU",
                "Content-Type": " application/json;charset=utf-8"
            }
        })
        .then((result) => result.json())
}