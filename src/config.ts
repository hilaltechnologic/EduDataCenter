import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://data.educentrals.com/", // your site url
  title: "Data Center by EduCentrals",
  slogan: "Inti Data, Inti Perubahan Pendidikan.",
  description: "EduDataCenter adalah pusat data pendidikan berbasis digital yang menyediakan informasi, analisis, dan insight terbaru untuk mendukung kebijakan dan keputusan berbasis data. Dari angka putus sekolah hingga performa siswa, kami hadir untuk menjadikan data sebagai pondasi perubahan.",
  social: {
    github: "https://github.com/hilaltechnologic", // leave empty if you don't want to show the github
    linkedin: "", // leave empty if you don't want to show the linkedin
    email: "hilal@technologist.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
