function getTotalX(a, b) {
  let output = []
  // track int
   for(let i=1; i<=Math.max(...b); i++) {
     console.log("this is external loop i",i)
    let mods = 0
    // track elements of a
    for(let j=0; j<a.length; j++) {
      mods += i % a[j]
      console.log("mods",mods)
    }
    if(mods === 0) {
      console.log("if mods ZERO")
      // track elems of b
      for(let k=0; k<b.length; k++) {
        mods += b[k] % i 
        console.log("second mods",mods)
      }
      console.log("if mods step II")
      if(mods === 0) {
        console.log("push",i)
        output.push(i)
      } else continue
    } else continue
  }
  return output.length

}

let a = [ 3, 4]
let b = [24, 48]
console.log(getTotalX(a, b))