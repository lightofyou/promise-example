// 随机生成一个 start-end 范围的整数
function random (start: number, end: number) : number {
  return Math.round(Math.random() * (end - start) + start)
}

// 模拟一个请求
// 在50-300ms之间返回当次请求的耗时
function getData (): Promise<number> {
  const time = random(50, 300)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time);    
  })
}

// 连续发n个请求，用一个数组存下来所有的请求的结果
function getDatasWithCount (count: number): Promise<number[]> {
  const promiseArr = []
  for (let i = 0; i < count; i++) {
    promiseArr.push(getData())
  }
  return Promise.all(promiseArr)
}

// 连续发太多请求，后端说不行，得分批发，第一批的结果返回后再发下一批的
function getDatasWithCountAndTimes (count: number, times: number): Promise<number[][]> {
  let p = Promise.resolve([])
  for (let i = 0; i < times; i++) {
    p = p.then(pre => {
      return new Promise(r => {
        getDatasWithCount(count).then(cur => {
          r([...pre, cur])
        })
      })
    })
  }
  return p
}

export {
  random,
  getData,
  getDatasWithCount,
  getDatasWithCountAndTimes
}