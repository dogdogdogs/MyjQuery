"use strict";

$(() => {
  $("#but").click(() => {
    $("p").text("おはよう！");
    $("p").addClass("red-text");

    $("h4")
      .text("HELLO!!!!HELLO!!!!")
      .addClass("red-text");
  });
});

$(() => {
  $("button").click(() => {
    $("li:nth-child(odd)")
      // .eq(2)
      .addClass("red-text")
      ;
  });
});

$(() => {
  const $input = $("input");
  $input.focus();

  $("#botan").click(() => {
    $("<li>")
      .text($input.val())
      .appendTo("ul")
      ;
    $input
      .val("")//addの後、空にする
      .focus()//フォーカスする
      ;
  });
  $("ul").click(e => {
    if (e.target.nodeName !== "LI" || !confirm("Are you sure?")) {
      return;
    }
    $(e.target).fadeOut();
  });
});