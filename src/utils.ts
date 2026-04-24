function processData(data: any) {
    let result = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].active == true) {
        result.push({
          id: data[i].id,
          name: data[i].name.toLowerCase(),
          score: data[i].score * 2
        })
      }
    }
    return result
  }
  
  export { processData }