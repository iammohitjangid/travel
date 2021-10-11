const API_URL="http://localhost:1337";

export async function listLogEntries(){
    const response = await fetch(`${API_URL}/api/log`);
    const jsonData = response.json();
    return jsonData;
}

export async function createLogEntry(entry,lat,long){
    const response = await fetch(`${API_URL}/api/log`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({...entry,
        latitude:lat,
        longitude:long})
    });
    const jsonData = response.json();
    return jsonData;
}
