import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();//jquery元素.index就可以知道它排行老几
  $tabContent
    .children()
    .eq(index)//eq表示第几个，这里表示第index个
    .addClass("active")//不要用show、hide、css这三个API
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger('click')//初始自动点击第一个孩子，触发click事件
