window.addEventListener('load', async () => {
    let video = document.querySelector('video[autoplay]');
    try {
      await video.play();
    } catch (err) {
      video.controls = true;
      console.log("catch");
    }
  });

$(function () {
  // $("select").styler();

  var windowWidth = window.innerWidth;
  let personsArray;
  let currencySymbol;

  let personImg = $('.dynamic-person-img');
  let personSum = $('.dynamic-person-sum-span');
  let dollarShake = $('.dollar-shake');

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  let todaysDate = dd + '/' + mm + '/' + yyyy;
  let tomorrowsDate = dd + "/" + mm + '/' + yyyy;

  $('.trade-time-td').text(todaysDate);
  $('.tomorrow-date').text(tomorrowsDate);

  if (windowWidth <= 575) {
      $(".join-us-img").appendTo('.join-us-section');
  }

  function initDynamicPersonDiv(personsArray) {
      let personName = $('.dynamic-person-name-span');
      let randomIndex = Math.floor(Math.random() * 24) + 1;
      let randomSum = Math.floor(Math.random() * 500) + 100;
      let randomPersonObj = personsArray[randomIndex];
      personImg.attr('src', randomPersonObj.photo);
      personName.text(randomPersonObj.name + " " + randomPersonObj.surname[0] + ".");
      personSum.text(randomSum.toString());
      personImg.addClass('shake');
      personSum.addClass('shake');
      dollarShake.addClass('shake');

      setTimeout(function () {
          personImg.removeClass('shake');
          personSum.removeClass('shake');
          dollarShake.removeClass('shake');
      }, 1000);

      setTimeout(function () {
          initDynamicPersonDiv(personsArray);
      }, 5000);
  }

  $.ajax({
      type: 'GET',
      url: 'https://gotrack.static500.com/api/v1/geo',
      success: function(response) {

          let visitorCountry = response.data[0].country.toLowerCase();
          let countryIsoCode = response.data[0].iso_code.toLowerCase();
          let video = $('.video');
          let countrySpan = $('.country-name-span');

          countrySpan.text(response.data[0].country);
          switch (response.data[0].iso_code) {
              case 'GB': currencySymbol = '£'; break;
              case 'AT': currencySymbol = '€'; break;
              case 'DE': currencySymbol = '€'; break;
              case 'CH': currencySymbol = '€'; break;
              case 'NL': currencySymbol = '€'; break;
              case 'FR': currencySymbol = '€'; break;
              case 'ES': currencySymbol = '€'; break;
              case 'IT': currencySymbol = '€'; break;
              case 'SE': currencySymbol = '€'; break;
              case 'DK': currencySymbol = '€'; break;
              case 'NO': currencySymbol = '€'; break;
              case 'FI': currencySymbol = '€'; break;
              default: currencySymbol = '$'; break;
          }

          switch (countryIsoCode) {
              case 'pm': countryIsoCode = "fr"; break;
              case 'fo': countryIsoCode = "dk"; break;
              case 'bo': countryIsoCode = "es"; break;
              case 'ec': countryIsoCode = "es"; break;
              case 'do': countryIsoCode = "es"; break;
              case 'sv': countryIsoCode = "es"; break;
              case 'cu': countryIsoCode = "es"; break;
          }

          switch (countryIsoCode) {
              case 'dk': video.append($('<track kind="subtitles" srclang="dk" src="media/Danish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'de': video.append($('<track kind="subtitles" srclang="de" src="media/German - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'ch': video.append($('<track kind="subtitles" srclang="de" src="media/German - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'at': video.append($('<track kind="subtitles" srclang="de" src="media/German - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'it': video.append($('<track kind="subtitles" srclang="it" src="media/Italian - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'no': video.append($('<track kind="subtitles" srclang="no" src="media/Norwegian - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'se': video.append($('<track kind="subtitles" srclang="se" src="media/Swedish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'nl': video.append($('<track kind="subtitles" srclang="nl" src="media/Dutch - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'es': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'ar': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'cl': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'mx': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'pa': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'pe': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'pr': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'cr': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'co': video.append($('<track kind="subtitles" srclang="es" src="media/Spanish - Bitcoin Quotes By Famous People.vtt" default>')); break;
              case 'pl': video.append($('<track kind="subtitles" srclang="pl" src="media/Polish - Bitcoin Quotes By Famous People.vtt" default>')); break;
          }
          $('.flag').attr('src', "img/flags (copy)/" + countryIsoCode + ".png");
      
          var uinamesRegions = ["albania","argentina","armenia","australia","austria","azerbaijan","bangladesh","belgium","bosnia and herzegovina","brazil","bulgaria","canada","china","colombia","costa rica","croatia","czech republic","denmark","egypt","england","estonia","finland","france","georgia","germany","greece","hungary","india","indonesia","iran","ireland","israel","italy","japan","korea","kyrgyz republic","mexico","morocco","nepal","netherlands","new zealand","nigeria","norway","pakistan","poland","portugal","romania","russia","saudi arabia","slovakia","slovenia","spain","sweden","switzerland","tunisia","turkey","ukraine","united states","vietnam"];
          if( !uinamesRegions.includes(visitorCountry) ) {
              visitorCountry = "england";
          } 

          $.ajax({
              url: "https://uinames.com/api/?amount=25&region=" + visitorCountry + "&ext",
              method: "GET",
              dataType: "json",
              success: function (response) {
                  initDynamicPersonDiv(response); 
              }
          });
      }
  }); 

  $(".faq__item-top").on("click", function() {

    let
        that = $(this),
        submenu = $(".faq__submnenu"),
        that_submenu = that.siblings(submenu);

    if ( that_submenu.is(":visible") ) {
        $(".faq__item-top").removeClass("active");
        submenu.slideUp(300)
    } else {
        $(".faq__item-top").removeClass("active");
        that.addClass("active");
        submenu.slideUp(300)
        that.siblings(submenu).slideDown(300);
    }

});

});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      // On-page links
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  } else {
                      $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });
          }
      }
  });