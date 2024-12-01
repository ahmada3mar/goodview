// plugins/vue-lazyload.client.ts
import { defineNuxtPlugin } from '#app';
import VueLazyLoad from 'vue-lazyload';


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyLoad, {
    preLoad: 0,
    throttleWait: 0,
    attempt: 1,
    scale: 0,
    observer: true,

    // optional
    observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
    },
    adapter: {
        loaded ( { bindType, el } ) {
            if ( el.nodeName == 'IMG' ) {
                handler( el );
            }
        },
        loading ( listener, Init ) {
            if ( !listener.el.style.paddingTop ) {
                var padding = 100;
                var ratio = listener.el.getAttribute( 'ratio' );
                if ( ratio ) {
                    padding = ratio;
                } else if ( listener.el.getAttribute( 'width' ) && listener.el.getAttribute( 'height' ) )
                    padding = listener.el.getAttribute( 'height' ) / listener.el.getAttribute( 'width' ) * 100;
                       if ( listener.el.nodeName == 'IMG' ) {
                    // listener.el.style.paddingTop = padding + '%';
                    // listener.el.style.height = '100%';
                }
            }
        },
    }
} );
});
function handler ( el ) {
    let num = 0;
    let interval = window.setInterval( () => {
        if ( el.currentSrc || num == 100 ) {
            el.removeAttribute( 'style' );
            el.classList.add( 'loaded' );
            window.clearInterval( interval );
        }
        num++;
    }, 300 );
}
