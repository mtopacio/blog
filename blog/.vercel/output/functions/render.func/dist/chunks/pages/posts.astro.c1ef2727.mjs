/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro.bc1e62c4.mjs';
import 'html-escaper';
import { $ as $$DefaultLayout } from './2023-07-04-project-announcement.md.a54c33d0.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/2023-07-04-project-announcement.md": () => import('./2023-07-04-project-announcement.md.a54c33d0.mjs').then(n => n._)}), () => "../pages/posts/*.md");
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Posts" }, { "default": ($$result2) => renderTemplate`
    
    ${maybeRenderHead($$result2)}<div class="flex flex-row">
       
        <div class="flex flex-col w-full h-full text-lg p-5">
            <div class="flex flex-row justify-center font-semibold">Posts</div>
            ${allPosts.map(
    (post) => renderTemplate`<div class="bg-blue-100 flex flex-row justify-center gap-x-2">${post.frontmatter.date.split("T")[0]}: <a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></div>`
  )}
        </div>
       
    </div>
   
` })}`;
}, "/home/mtopacio/Git/blog/blog/src/pages/posts.astro");

const $$file = "/home/mtopacio/Git/blog/blog/src/pages/posts.astro";
const $$url = "/posts";

export { $$Posts as default, $$file as file, $$url as url };
