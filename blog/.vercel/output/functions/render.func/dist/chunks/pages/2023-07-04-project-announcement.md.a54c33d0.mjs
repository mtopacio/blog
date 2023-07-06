/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, d as renderComponent, e as renderHead, f as createVNode, s as spreadAttributes, F as Fragment } from '../astro.bc1e62c4.mjs';
import 'html-escaper';

const $$Astro$2 = createAstro();
const $$HeaderComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderComponent;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-row w-full h-full bg-slate-900 text-white justify-between px-5 py-2 shadow-lg">
    <div class="flex flex-row gap-x-4 self-center text-md">
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
    </div>
    <div class="text-3xl tracking-widest font-thin">Mark Topacio</div>
    
    <div class="flex flex-row gap-x-4 self-center">
        
        <a href="https://www.linkedin.com/in/mark-topacio/">
            <img src="/linkedin.svg" alt="" class="h-6">
        </a>
        <a href="https://medium.com/@marktopacio">
            <img src="/medium.svg" alt="" class="h-6">
        </a>
        <a href="https://twitter.com/@markctopacio">
            <img src="/twitter.svg" alt="" class="h-6">
        </a>
    </div>
</div>`;
}, "/home/mtopacio/Git/blog/blog/src/components/HeaderComponent.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$DefaultLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>', "</title>\n  ", '</head>\n  \n  <!-- Google tag (gtag.js) -->\n  <script async src="https://www.googletagmanager.com/gtag/js?id=G-VQ8H4C233W"><\/script>\n  \n\n  <body class="flex flex-col h-full w-full bg-zinc-300">\n    ', "\n    ", " \n  </body></html>"])), title, renderHead($$result), renderComponent($$result, "HeaderComponent", $$HeaderComponent, {}), renderSlot($$result, $$slots["default"]));
}, "/home/mtopacio/Git/blog/blog/src/layouts/DefaultLayout.astro");

const $$Astro = createAstro();
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, {}, { "default": ($$result2) => renderTemplate`

${maybeRenderHead($$result2)}<div class="flex flex-col h-full w-full py-20 px-96 text-lg">
  ${renderSlot($$result2, $$slots["default"])}
</div>


` })}`;
}, "/home/mtopacio/Git/blog/blog/src/layouts/PostLayout.astro");

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>I’m starting this blog as a means to track my progress. A year ago I was blessed with an oppurtunity to develop on the backend at work; however, my frontend experience was limited to libraries in Python. The limitation of that was quickly realized as part of the backend requirement is real-time.</p>\n<p>The first project for this blog is within the realm of algorithmic trading.</p>");

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"Project Announcement","description":"","date":"2023-07-04T08:56:55.425Z","preview":"","draft":false,"tags":["Astro","Svelte"],"categories":[],"image":{"url":"https://unsplash.com/photos/CSWllKT9wPw","alt":"example image"}};
				const file = "/home/mtopacio/Git/blog/blog/src/pages/posts/2023-07-04-project-announcement.md";
				const url = "/posts/2023-07-04-project-announcement";
				function rawContent() {
					return "\nI'm starting this blog as a means to track my progress. A year ago I was blessed with an oppurtunity to develop on the backend at work; however, my frontend experience was limited to libraries in Python. The limitation of that was quickly realized as part of the backend requirement is real-time. \n\nThe first project for this blog is within the realm of algorithmic trading.\n \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$PostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _20230704ProjectAnnouncement = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    images,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DefaultLayout as $, _20230704ProjectAnnouncement as _ };
