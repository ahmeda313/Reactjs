export async function makeOrder(items, customerData){
    const requestBody = {
        order:{
            items:items,
            customer:{...customerData}
        }

    }

    const response = await fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(requestBody)
    })
    const data = await response.json()
    console.log(data)
}
