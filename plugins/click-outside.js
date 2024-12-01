export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
      mounted(el, binding) {
        el.clickOutsideEvent = function(event) {
          // Check if the clicked target is not the element or its children
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event); // Call the provided method
          }
        };
        document.addEventListener('click', el.clickOutsideEvent);
      },
      unmounted(el) {
        document.removeEventListener('click', el.clickOutsideEvent);
      }
    });
  });
  