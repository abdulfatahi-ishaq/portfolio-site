$(document).ready(function() {
  // MODAL
  var modalText = {
    pgoldhome: {
      title: 'TradewithPGold Home',
      tag: 'CRYPTO TRADING PLATFORM.',
      detail:
        'TradewithPGold Home is the home/landing page of a crypto exchange platform that lets customers exchange their crypto currency and giftcards to local currency easily and efficiently.',
      link: 'https://tradewithpgold.com/'
    },
    pgoldapp: {
      title: 'TradewithPGold App',
      tag: 'CRYPTO TRADING PLATFORM.',
      detail:
        'TradewithPGold App is a crypto exchange application that lets customers exchange their crypto currency and giftcards to local currency easily and efficiently.',
      link: 'https://tradewithpgold.com/login'
    },
    rsglobal: {
      title: 'Real Source Global Investment',
      tag: 'INVESTMENT PLATFORM.',
      detail:
        'Real Source Global Investment Application is an investment platform for customers to invest their money and earn returns at specified intervals with other features such as Multi Level Marketing, Referrals, Withdrawal functions, etc.',
      link: 'http://app.rsglobal.com.ng'
    },
    premium: {
      title: 'Premium Contest',
      tag: 'ONLINE CONTEST VOTING PLATFORM',
      detail:
        'Premiumcontest is an online contest voting platform where intended contestants registers and are voted for. Contestants with highest votes are deemed winner at the end of each edition.',
      link: 'http://www.premiumcontest01.com'
    },
    mit: {
      title: 'MIT Accessories Store',
      tag: 'E-Commerce Site.',
      detail:'MITaccesories is an e-commerce site where customers can buy computer, phone, audio and music accessories. The platform was built with WordPress.',
      link: 'https://www.mitaccessories.com'
    },
    rsfglobal: {
      title: 'Global Bank',
      tag: 'Online Banking App.',
      detail:
        'This is an online banking app that provides internet banking capabilities such as send and receive money, funds transfer, etc it is also equip with an instant messaging functionality using tawk.to plugin.',
    },
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
