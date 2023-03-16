export const checkNumber = (data) => {
  if(data) {
    const number = `${data.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.',)}₫`
      return number
  }
  return data
}

export const checkImage = (image) => {
  if(image) {
    const check = image.indexOf('http')
    if(check == -1) {
      return `${process.env.REACT_APP_IMAGE}new/${image}`
    } else {
      return image
    }
  }
}
