document.addEventListener("DOMContentLoaded", () => {
    const buttons = Array.from(document.querySelectorAll('[data-news]'));
    buttons.forEach((button) => {
      button.addEventListener('click',
    		() => {
          const source = button.getAttribute('data-source');
          require.ensure([], function(require) {
              const feed = require("../feed/feed.js");
              feed.updateFeed(source);
          }, "feed");
        });
    });
});
