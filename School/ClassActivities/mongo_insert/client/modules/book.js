async function saveBook() {
    const url = "http://localhost:3000/book";

    const data = {
        course_name:  document.querySelector("#course_name").value,
        section_code: document.querySelector("#section_code").value,
        professor:    document.querySelector("#professor").value,
        building:     document.querySelector("#building").value,
        room:         document.querySelector("#room").value,
        start_time:   document.querySelector("#start_time").value,
        end_time:     document.querySelector("#end_time").value
    };
    
    const config = {
        method: "post", 
        mode: "cors", 
        cache: "no-cache", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    };

    const fetchResponse = await fetch(url, config);
    const jsonResponse = await fetchResponse.json();

    document.querySelector("#response").innerHTML = 
        `Server said: ${jsonResponse}`;
}

export { saveBook };