import type { MetadataRoute } from "next";

const base = "https://hrshuvo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                          lastModified: new Date(), changeFrequency: "monthly",  priority: 1    },
    { url: `${base}/journey`,             lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8  },
    { url: `${base}/projects`,            lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9  },
    { url: `${base}/projects/ezdu`,       lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9  },
    { url: `${base}/architecture`,        lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7  },
    { url: `${base}/philosophy`,          lastModified: new Date(), changeFrequency: "yearly",   priority: 0.6  },
    { url: `${base}/contact`,             lastModified: new Date(), changeFrequency: "yearly",   priority: 0.7  },
  ];
}
