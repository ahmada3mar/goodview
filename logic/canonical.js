import { injectHead, useHead, useSeoMeta } from "#imports";
import { useSiteConfig } from "#site-config/app/composables/useSiteConfig";
import { createSitePathResolver } from "#site-config/app/composables/utils";
import { TemplateParamsPlugin } from "@unhead/vue/plugins";
import { useError, useRoute, useRuntimeConfig } from "nuxt/app";
import { stringifyQuery } from "ufo";
import { computed, toValue } from "vue";
export function canonical() {
  const siteConfig = useSiteConfig({
    resolveRefs: false
  });
  const head = injectHead();
  head.use(TemplateParamsPlugin);
  const route = useRoute();
  const resolveUrl = createSitePathResolver({ withBase: true, absolute: true });
  const err = useError();
  const canonicalUrl = computed(() => {
    if (err.value) {
      return false;
    }
    const { query } = route;
    let url = resolveUrl(route.path || "/").value || route.path;
    try {
      url = url.toLocaleLowerCase(siteConfig.currentLocale || "en");
    } catch {
      url = url.toLowerCase();
    }
    const filteredQuery = Object.fromEntries(
      []      // Sort params
    );

    let href = Object.keys(filteredQuery).length ? `${url}?${stringifyQuery(filteredQuery)}/` : url;

    if (!href.endsWith("/")) {
      href = href + "/"
    }
    return { rel: "canonical", href };
  });
  const minimalPriority = {
    // give nuxt.config values higher priority
    tagPriority: "low"
  };
  useHead({
    htmlAttrs: { lang: () => toValue(siteConfig.currentLocale) },
    templateParams: {
      site: () => siteConfig,
      siteName: () => siteConfig.name
    },
    titleTemplate: "%s %separator %siteName",
    link: [() => canonicalUrl.value]
  }, minimalPriority);
  const seoMeta = {
    ogType: "website",
    ogUrl: () => {
      const url = canonicalUrl.value;
      return url ? url.href : false;
    },
    ogLocale: () => {
      const locale = toValue(siteConfig.currentLocale);
      if (locale) {
        const l = locale.replace("-", "_");
        if (l.includes("_")) {
          return l;
        }
      }
      return false;
    },
    ogSiteName: siteConfig.name
  };
  if (siteConfig.description)
    seoMeta.description = siteConfig.description;
  if (siteConfig.twitter) {
    const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter : `@${siteConfig.twitter}`;
    seoMeta.twitterCreator = id;
    seoMeta.twitterSite = id;
  }
  useSeoMeta(seoMeta, minimalPriority);
}
