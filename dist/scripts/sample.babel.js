"use strict";

/* global $ */
$(function () {
  $('.btn-add-content').on('click', function () {
    $(this).after("\n\t\t\t<br>\n\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies placerat varius. Vestibulum ante ipsum\n\t\t\tprimis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis quam lacus. Suspendisse non ipsum\n\t\t\tvitae lectus pulvinar vestibulum gravida vel neque. Cras maximus felis vel sem mollis mattis. Morbi rhoncus, lacus\n\t\t\tvitae porta malesuada, magna lorem facilisis orci, tempus auctor dolor est sed massa. Duis feugiat mi nisl, sit\n\t\t\tamet lobortis tellus scelerisque id. Donec eleifend massa ut magna tincidunt, interdum posuere purus vulputate.\n\t\t");
  });
  var $header = $('.sticky-web-layout > header[aria-hidden="true"]');
  $('.sticky-web-layout > header + header .btn-add-content').on('click', function () {
    $('.btn-add-content', $header).trigger('click');
  });
});