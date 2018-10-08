const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];

function renderList() {
  $('.content').empty();
  for (let i = 0; i < studentList.length; i++) {
    $('.content').append(`<p>${studentList[i]}</p>`);
  };
}
renderList()


$('#add').on('click', function () {
  let addName = $('#name').val();
  studentList.push(addName);
  renderList();
  addName.val('');
});


$('#search').on('click', function () {
  let searchName = $('#name').val();
  studentList.forEach(e => {
    if (searchName === e) {
      $('body').addClass('blue');
    }
  });
});

$('#delete').on('click', function () {
  let deleteName = $('#name').val();
  studentList.forEach((e, i) => {
    if (deleteName === e) {
      studentList.splice(i, 1);
      renderList();
      deleteName.val('');
    }
  });
  
})
