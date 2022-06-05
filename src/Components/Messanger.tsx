import React, { useEffect } from "react";

/**
 *
 */
export function init() {
  var chatbox = document.getElementById("fb-customer-chat");
  chatbox?.setAttribute("page_id", "680699671975051"); // TODO: move to args
  chatbox?.setAttribute("attribution", "biz_inbox");

  // @ts-ignore
  window.fbAsyncInit = function () {
    // @ts-ignore
    window.FB.init({
      xfbml: true,
      version: "v11.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    // @ts-ignore
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    // @ts-ignore
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

/**
 *
 */
export function cleanup() {
  (function (d, id) {
    var target = d.getElementById(id);
    if (target) {
      // @ts-ignore
      target.parentNode.removeChild(target);
    }
  })(document, "facebook-jssdk");
  // @ts-ignore
  delete window.FB;
}

export function Messenger() {
  useEffect(() => {
    init();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}

export default Messenger;