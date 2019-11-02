startPage(() => {
  let friends = new Array();

  let title = createNode('h1', 'Friends App');
  appendNode(title, selectNode('#content'));

  let activeTitleEffect = false;

  function titleEffect() {
    if (activeTitleEffect == false) {
      activeTitleEffect = true;
      title.className = 'green-color';
    } else {
      activeTitleEffect = false;
      title.className = '';
    }
  }

  setInterval(titleEffect, 2000);

  let greet = createNode('button', 'Greet Friends');
  addClassName(greet, 'button');
  appendNode(greet);

  click(greet, () => {
    for (let i=0; i < friends.length; i++) {
      alert(`Hello ${friends[i]} || The Friend Position is: ${i}`);
    };
  });

  let add = createNode('button', 'Add Friends');
  addClassName(add, 'button');
  appendNode(add, selectNode('#content'));

  click(add, () => {
    let name = prompt('Write the name for the friend to add');

    friends.push(name);
    alert(`Your friend ${name} has been added successfully`);
  });

  let del = createNode('button', 'Delete Friends');
  addClassName(del, 'button');
  appendNode(del, selectNode('#content'));

  click(del, () => {
    let name     = prompt('Write the name for the friend to delete'),
        position = searchArray(friends, name);

    if (position == -1) {
      alert(`Your friend ${name} has been not found in the friends list`);
    } else {
      friends.splice(position, 1);
      alert(`Your friend ${name} has been deleted successfully to the friends list`);
    };
  });

  let otherDel = createNode('button', 'Delete Other Friend');
  addClassName(otherDel, 'button');
  appendNode(otherDel, selectNode('#content'));

  click(otherDel, () => {
    let textPrompt = prompt('Write the friend position in the friends list to this delete'),
        intPrompt  = parseInt(textPrompt);

    if(intPrompt + 0 == intPrompt) {
      if (intPrompt < 0 || intPrompt > friends.length -1) {
        alert(`The friend position has been not found, friend position: ${intPrompt}`);
        throw `The friend position has been not found, friend position: ${intPrompt}`;
      } else {
        alert(`Your friend ${friends[intPrompt]} has been deleted successfully`);
        friends.splice(intPrompt, 1);
      }
    } else {
      alert(`The character writed in prompt is invalid, character ${textPrompt}`);
      throw `The character writed in prompt is invalid, character ${textPrompt}`;
    }
  })
});
