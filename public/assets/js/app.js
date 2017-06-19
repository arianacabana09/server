const createContent = (data) =>{
  const name = $('<div><span>Name: </span><strong>'+data.results[0].name.first +'</strong></span></div>');
  const gender = $('<div><span>Gender: </span><strong>'+data.results[0].gender +'</strong></span></div>');
  const city = $('<div><span>City: </span><strong>'+data.results[0].location.city +'</strong></span></div>');
  const email = $('<div><span>Email: </span><strong>'+data.results[0].email +'</strong></span></div>');
  const cell = $('<div><span>Cell: </span><strong>'+data.results[0].cell +'</strong></span></div>');
  const img = $('<img class="size" src="'+data.results[0].picture.large+'"/>');

  $('#root').append(name);
  $('#root').append(gender);
  $('#root').append(city);
  $('#root').append(email);
  $('#root').append(cell);
  $('#root').append(img);
}

$(_ =>{
  $.getJSON('https://randomuser.me/api/?nat=es',(data)=>{
    console.log(data.results[0]);
    // console.log(data.results[0].name.first);
    // console.log(data.results[0].gender);
    // console.log(data.results[0].location.city);
    // console.log(data.results[0].email);
    // console.log(data.results[0].cell);
    // console.log(data.results[0].picture.large);


    createContent(data);
  });
});
