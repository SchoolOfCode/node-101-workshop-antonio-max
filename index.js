let myCollection = [
  {
    name: 'School of Code mug',
    count: 1,
    whatILike: 'It has my cute pixel character on it!',
  },
  {
    name: 'School of Code hat',
    count: 2,
    whatILike: 'An often overlooked fashion accessory',
  },
  {
    name: 'School of Code pillow',
    count: 1,
    whatILike: 'Eat. Sleep. Code. Repeat :)',
  },
];

let secondItem = myCollection[1];

function describeItem(element) {
  //Another way to do it (destructuring)
  // let [name, whatIlike, count] = element;

  let name = element.name;
  let whatILike = element.whatILike;
  let count = element.count;

  //Will return this console.log
  if (count > 1) {
    console.log(
      `I have ${count} names. Here's what I like about them: ${whatILike}`
    );
  } else {
    console.log(`I have a ${name}. Here's what I like about it: ${whatILike}`);
  }
}

function describeCollection() {
  myCollection.map(describeItem);
}

describeCollection();
