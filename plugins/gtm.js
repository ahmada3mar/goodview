// plugins/gtm.js
export default defineNuxtPlugin(() => {
    useHead({
      noscript: [
        {
            children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMZP63WH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            tagPosition: 'bodyOpen'
         }
      ]
    });
  });
  