import { injectHead, useHead, useSeoMeta } from "#imports";
import { useError, useRoute, useRuntimeConfig } from "nuxt/app";
import { stringifyQuery } from "ufo";
import { computed, toValue } from "vue";

export function canonical() {
  const config = useRuntimeConfig();
  const siteUrl = config.public?.siteUrl || "https://goodview-moving.com";
  const route = useRoute();
  const err = useError();

  const canonicalUrl = computed(() => {
    if (err.value) {
      return false;
    }
    const { path, query } = route;
    let url = siteUrl + (path || "/");
    // Optionally, filter query params here if needed
    const filteredQuery = Object.fromEntries(
      Object.entries(query || {})
      // .filter(([key]) => whitelist.includes(key)) // add whitelist if needed
    );
    if (Object.keys(filteredQuery).length) {
      url += "?" + stringifyQuery(filteredQuery);
    }
    if (!url.endsWith("/")) {
      url += "/";
    }
    return { rel: "canonical", href: url.toLowerCase() };
  });

  const minimalPriority = {
    tagPriority: "low"
  };

  useHead({
    htmlAttrs: { lang: "en" },
    titleTemplate: "",
    link: [() => canonicalUrl.value]
  }, minimalPriority);

  const seoMeta = {
    ogType: "website",
    ogUrl: () => canonicalUrl.value ? canonicalUrl.value.href : false,
    ogLocale: "en_US",
    ogSiteName: "GoodView Moving"
  };

  useSeoMeta(seoMeta, minimalPriority);
}
