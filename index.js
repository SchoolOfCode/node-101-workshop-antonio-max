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

function describeItem(secondItem) {
  let name = secondItem.name;
  let whatILike = secondItem.whatILike;

  //Will return this console.log
  console.log(`I have a ${name}. Here's what I like about it: ${whatILike}`);
}

describeItem(secondItem);
