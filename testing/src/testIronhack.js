const helloIronhack = () => {
  return 'Hi yay!'
}

const calculateMe = arr => {
  return (arr.length === 0 ? 0 : arr[0])
}

const person = {
  age: 22,
  grow: function (years) {
    this.age += years
  }
}