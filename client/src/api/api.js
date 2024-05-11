export const GetAllNotes = async () => {
    const url = `http://localhost:3000/api/v1/notes`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error);
        return;
    }
}
