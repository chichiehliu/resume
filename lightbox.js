// 用來測試是否有引入成功。
// console.log("引入成功");

$(function() {
  /*
   * 燈箱開啟功能
   */

  // 先準備好要裝「圖片路徑」的箱子（變數）
  //   宣告變數，宣告空字串
  let photoSrc = "";

  // 監聽我們要點擊的元素：每張圖片容器，click的事件
  $(".portfolio__items__container").click(function() {
    // let photoSrc = "hiiii";

    // 取得點擊的圖片路徑
    // 將元素語法取路徑然後丟到上面""空字串存起來
    photoSrc = $(this).children("img")[0].src;
    console.log(photoSrc);
    // 顯示燈箱 UI
    // 幫這個燈箱加上一個css的效果事件
    $(".portfolio__lightbox").css({ display: "flex" });
    // 將燈箱中的圖片路徑換成我們存好的路徑
    // 將SRC中間的質步要寫成路徑，而是寫成一個變數，這樣子就會在選取的變數為一個箱子
    // 選取器的>大於代表為幫我選到所有IMG標籤的小孩
    $(".portfolio__lightbox > img").attr("src", photoSrc);
    // 鎖定 body 捲軸
    $("body").css({ overflow: "hidden" });
  });

  /*
   * 燈箱關閉功能
   */

  // 監聽我們要點擊的元素：燈箱右上角的叉叉
  $(".portfolio__lightbox__close").click(function() {
    // console.log("點擊check");
    // 把自己隱藏起來
    $(".portfolio__lightbox").css({ display: "none" });
    // 開啟 body 捲軸
    $("body").css({ position: "relative", overflow: "auto" });
  });
});
