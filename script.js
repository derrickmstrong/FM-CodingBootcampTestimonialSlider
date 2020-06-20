$(function () {
  const profile = [
    {
      name: 'Tanya Sinclair',
      title: 'UX Engineer',
      quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
      photo: './images/image-tanya.jpg',
    },
    {
      name: 'John Tarkpor',
      title: 'Junior Front-end Developer',
      quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
      photo: './images/image-john.jpg',
    },
  ];

  let i = 0;

  $('.quote').html(profile[i].quote);
  $('.name').html(profile[i].name);
  $('.title').html(profile[i].title);
  $('.profile-pic').attr('src', profile[i].photo);

  $('.prev').click(clickPrev);
  $('.next').click(clickNext);

  console.log('No. of Profile:', profile.length); // 2

  function clickPrev() {
    if (i > 0) {
      i--;
    $('.quote').html(profile[i].quote);
    $('.name').html(profile[i].name);
    $('.title').html(profile[i].title);
    $('.profile-pic').attr('src', profile[i].photo);
    } else if (i === 0) {
      i = profile.length - 1;
      $('.quote').html(profile[i].quote);
    $('.name').html(profile[i].name);
    $('.title').html(profile[i].title);
    $('.profile-pic').attr('src', profile[i].photo);
    }
    
  }
  function clickNext() {
    if (i < profile.length - 1) {
      i++;
      $('.quote').html(profile[i].quote);
      $('.name').html(profile[i].name);
      $('.title').html(profile[i].title);
      $('.profile-pic').attr('src', profile[i].photo);
    } else if (i === profile.length - 1) {
      i = 0;
      $('.quote').html(profile[i].quote);
      $('.name').html(profile[i].name);
      $('.title').html(profile[i].title);
      $('.profile-pic').attr('src', profile[i].photo);
    }
  }
});
