function getTotalX(a, b) {
  let output = []
  // track int
  for(let i=1; i<=Math.max(...b); i++) {
    console.log("this is external loop i",i)
    let mods = 0
    // track elements of a
    for(let j=0; j<a.length; j++) {
      mods += i % a[j]
    }
    if(mods === 0) {
      console.log("if mods ZERO")
      // track elements of b
      for(let k=0; k<b.length; k++) {
        mods += b[k] % i 
      }
      if(mods === 0) {
        console.log("if mods step II")
        console.log("push",i)
        output.push(i)
      }
    }
  }
  return output.length
}

let a = [ 3, 4]
let b = [24, 48]
console.log(getTotalX(a, b))